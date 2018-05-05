/* Npm import */
import React from 'react';
import axios from 'axios';

/* Component import */
import MessageForm from './messageForm';

/* Local import */
import formTrim from './Utils/formTrim';

/* Code */
class Form extends React.Component {
state = {
  form: {
    name: '',
    email: '',
    message: '',
  },
  messageForm: '',
}


onSubmit = (event) => {
  event.preventDefault();
  const { form } = this.state;

  const formTrimed = formTrim(form);

  const formChecked = (formTrimed) => {
    const emailFormat = /.*@.*\..*/;
    for (const item in formTrimed) {
      if ((item === 'email' && formTrimed[item].search(emailFormat)) < 0) {
        this.setState({ messageForm: 'Oops, your email seems to be invalid ! Please check it before sending your message :)' });
        return false;
      }
      else if ((!formTrimed[item] || Number(formTrimed[item]))) {
        this.setState({ messageForm: 'Please fill all inputs' });
        return false;
      }
    }
    return true;
  };

  // envoie les données seulement si elles sont validées
  if (formChecked(formTrimed)) {
    this.setState({
      form: {
        name: '',
        email: '',
        message: '',
      },
    });

    axios
      .post('/form-submit', {
        form: {
          ...formTrimed,
        },
      })
      .then((response) => {
        if (response.data.message === 'false') {
          this.setState({ messageForm: 'Your form has not been sent, please check that all required information is in an acceptable format. ' });
        }
        else {
          this.setState({ messageForm: 'Your form has been sent ! Thank you for your message :)' });
        }
      });
  }
}

handleChange = (event) => {
  const { name, value } = event.target;
  this.setState(({ form }) => ({
    form: {
      ...form,
      [name]: value,
    },
  }));
}

render() {
  const { name, email, message } = this.state.form;
  const { messageForm } = this.state;
  return (
    <div className="form-container">
      <MessageForm messageForm={messageForm} />
      <form>
        <input type="text" placeholder="Name" onChange={this.handleChange} name="name" value={name} />
        <input type="email" placeholder="Email" onChange={this.handleChange} name="email" value={email} />
        <textarea placeholder="Message" onChange={this.handleChange} name="message" value={message} />
        <button type="submit" value="Submit" className="btn btn-switch" onClick={this.onSubmit}>Submit</button>
      </form>
    </div>
  );
}
}

/* Export default */
export default Form;
