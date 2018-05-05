/*
 * Npm import
 */
import React from 'react';
import PropTypes from 'prop-types';
import 'intersection-observer'; // optional polyfill
import Observer from '@researchgate/react-intersection-observer';
/*
 * Local import
 */
import linkedin from '../../assets/images/linkedin.png';
/*
 * Component
 */

class AboutMe extends React.Component {
  handleClick = () => {
    this.setState({ inverted: !this.state.inverted });
  }

  render() {
    const options = {
      onChange: this.props.handleIntersection,
      root: null,
      rootMargin: '-10% 0% -90%',
    };
    return (
      <Observer {...options}>
        <div id="about-me">
          <p className="h3 red">About Me</p>
          <div className="card-about-me">
            <p>Full stack developer with more than 5 years of experience in a digital agency and as self employment, I also have a
strong digital marketing experience that allows me to take into consideration both technical and marketing side of a
project.
            </p>
            <p>I started learning web development in self taught, proof that I am really passionate, curious, conscientious,
and used to solve problems and sharing with others.
            </p>
          </div>
          <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/vincent-pelage/"><img src={linkedin} alt="linkedin Vincent Pélage" /></a>
        </div>
      </Observer>
    );
  }
}

AboutMe.propTypes = {
  handleIntersection: PropTypes.func.isRequired,
};

/*
 * Export default
 */
export default AboutMe;
