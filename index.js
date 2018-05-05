// Package import
const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const mongoose = require('mongoose');
const path = require('path');
const sslRedirect = require('heroku-ssl-redirect');
require('dotenv').config();

// Local import
const Contact = require('./formModel');

// Init variable
const app = express();

// enable ssl redirect
app.use(sslRedirect());

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: `${process.env.MAIL_ADDRESS}`,
    pass: `${process.env.MAIL_PASS}`,
  },
});


// le .use c'est quand on utilise un middleware
// (une fonction qui se met entre la requete et le traitement de la requete)
app.use(bodyParser.json()); // pour pouvoir parser un format json

// ajoute deux instructions dans le header de la réponse su server
// permet de faire des requetes API
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

const formValidator = (req, res, next) => {
  const isNoSqlInjected = (item) => {
    const contentFormat = /^((?!{).).*|((?!}).)$/;
    const itemFormatted = item.replace(/(\s+)/g, '');
    const find = itemFormatted.search(contentFormat);
    return find;
  };

  if (req.body.form) {
    const payLoad = Object.values(req.body.form);
    const result = payLoad.map(item => isNoSqlInjected(item));

    async function test() {
      try {
        const resultat = await result.indexOf(-1);
        return resultat;
      }
      catch (error) {
        console.log(error);
      }
    }

    test().then((result) => {
      if (result > -1) {
        console.log('form was not validate');
        res.send({ message: 'false' });
      }
      else {
        console.log('form was validate');
        next();
      }
    });
  }
  else {
    next();
  }
};

app.use('/form-submit', formValidator);

app.post('/form-submit', (req, res) => {
  console.log(req.body.form);
  const { name, email, message } = req.body.form; // req.body grâce à body parser
  // paramètre de connexion
  const mongoDB = `mongodb://vincent:${process.env.DB_PASS}@ds255958.mlab.com:55958/portfoliosydney`;
  mongoose.connect(mongoDB);
  // lancer et stocker la connexion
  const db = mongoose.connection;
  // tester la connexion
  db.on('error', console.error.bind(console, 'mongoDB connection error: '));
  db.once('open', () => {
    console.log('Youpi, Connected to the DB');
  });

  const newContact = new Contact({
    name,
    email,
    message,
  });
  newContact.save((err, savedContact) => {
    if (err) {
      console.error(err);
      return err;
    }
    console.log(savedContact);
    const mailOptions = {
      from: email,
      to: 'vincent.plge@gmail.com',
      subject: 'New message from Portfolio',
      html: `<p>Name: ${name}</p><p>Message: ${message}</p>`,
    };
    transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        console.log(err);
      }
      else {
        console.log(info);
      }
    });
    res.send({ message: 'true' });
  });
});


// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(`${__dirname}/client/build/index.html`));
});

const port = process.env.PORT || 5000;
app.listen(port);
