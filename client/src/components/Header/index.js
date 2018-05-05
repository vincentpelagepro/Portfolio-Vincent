/*
 * Npm import
 */
import React from 'react';
import PropTypes from 'prop-types';
// import TextLoop from 'react-text-loop';
/*
 * Local import
 */

/*
 * Component
 */


const Header = ({ handleClick, inverted }) => {
  let classNames = ['bar1', 'bar2', 'bar3'];
  let classNameList = 'listMenuClose';
  let classNameIntro = 'intro introMenuClose';
  if (inverted) {
    classNames = ['bar1 changBar1', 'bar2 changBar2', 'bar3 changBar3'];
    classNameList = 'listMenuOpen';
    classNameIntro = 'intro introMenuOpen';
  }

  return (
    <div id="header">
      <div className="navbar">
        <div className="burger" onClick={handleClick} onKeyPress={handleClick} >
          <a href="#app">
            {
                classNames.map((className, index) => (
                  <div className={className} key={index} />
                ))
              }
          </a>
        </div>
      </div>
      <ul className={classNameList}>
        <li><a onClick={handleClick} onKeyPress={handleClick} href="#about-me">About Me</a></li>
        <li><a onClick={handleClick} onKeyPress={handleClick} href="#skills">Skills</a></li>
        <li><a onClick={handleClick} onKeyPress={handleClick} href="#projects">Projects</a></li>
        <li><a onClick={handleClick} onKeyPress={handleClick} href="#contact">Contact</a></li>
      </ul>
      <div className={classNameIntro}>
        <h1>Vincent Pélage</h1>
        <span className="skills-loop">React.js / Node.js</span>
        <h2>Developer</h2>
      </div>
    </div>
  );
};

Header.propTypes = {
  handleClick: PropTypes.func.isRequired,
  inverted: PropTypes.bool.isRequired,
};

/*
 * Export default
 */
export default Header;
