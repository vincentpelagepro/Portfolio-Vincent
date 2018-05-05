/*
 * Npm import
 */
import React from 'react';

/*
 * Local import
 */
import css3 from '../../assets/images/css3.png';
import docker from '../../assets/images/docker.png';
import expressjs from '../../assets/images/expressjs.png';
import html5 from '../../assets/images/html5.png';
import mongodb from '../../assets/images/mongodb.png';
import reactredux from '../../assets/images/reactredux.jpeg';
import sea from '../../assets/images/sea.png';
import seo from '../../assets/images/seo.png';
import adwordsscripts from '../../assets/images/adwordsscripts.png';
/*
 * Component
 */

const Skills = () => (
  <div id="skills">
    <p className="h3 white">Skills</p>
    <ul>
      <li>
        <span className="skills-title">HTML5</span>
        <div className="circle">
          <img src={html5} alt="HTML5" />
        </div>
      </li>
      <li>
        <span className="skills-title">CSS3</span>
        <div className="circle">
          <img src={css3} alt="CSS3" />
        </div>
      </li>
      <li>
        <span className="skills-title">React Redux</span>
        <div className="circle">
          <img src={reactredux} alt="React-Redux" />
        </div>
      </li>
      <li>
        <span className="skills-title">MongoDB</span>
        <div className="circle">
          <img src={mongodb} alt="MongoDB" />
        </div>
      </li>
      <li>
        <span className="skills-title">Express.js</span>
        <div className="circle">
          <img src={expressjs} alt="Express.js" />
        </div>
      </li>
      <li>
        <span className="skills-title">Docker</span>
        <div className="circle">
          <img src={docker} alt="Docker" />
        </div>
      </li>
      <li className="hiding-skill">
        <span className="skills-title">SEO</span>
        <div className="circle">
          <img src={seo} alt="SEO" />
        </div>
      </li>
      <li className="hiding-skill">
        <span className="skills-title">SEA</span>
        <div className="circle">
          <img src={sea} alt="SEA" />
        </div>
      </li>
      <li className="hiding-skill">
        <span className="skills-title">AdWords Scripts</span>
        <div className="circle">
          <img src={adwordsscripts} alt="AdWords Scripts" />
        </div>
      </li>
    </ul>
  </div>
);

/*
 * Export default
 */
export default Skills;
