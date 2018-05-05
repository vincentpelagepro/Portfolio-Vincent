/*
 * Npm import
 */
import React from 'react';
import PropTypes from 'prop-types';
/*
 * Local import
 */

/*
 * Component
 */

class SideMenu extends React.Component {
  componentDidMount() {
    const currentSection = document.querySelector(`a[data-ref=${this.props.current}]`);
    currentSection.style.fontWeight = 'bold';
  }
  render() {
    return (
      <div className="side-menu">
        <div className="chevron-up">
          <a href={this.props.prev} ><i className="fas fa-chevron-up" /></a>
        </div>
        <ul>
          <li><a href="#header" data-ref="header" className="scroll">Head</a></li>
          <hr />
          <li><a href="#about-me" data-ref="about-me">About Me</a></li>
          <hr />
          <li><a href="#skills" data-ref="skills">Skills</a></li>
          <hr />
          <li><a href="#projects" data-ref="v">Projects</a></li>
          <hr />
          <li><a href="#contact" data-ref="contact">Contact</a></li>
        </ul>
        <div className="chevron-down">
          <a href={this.props.next} ><i className="fas fa-chevron-down" /></a>
        </div>
      </div>
    );
  }
}

SideMenu.propTypes = {
  prev: PropTypes.string.isRequired,
  next: PropTypes.string.isRequired,
  current: PropTypes.string.isRequired,
};


/*
 * Export default
 */
export default SideMenu;
