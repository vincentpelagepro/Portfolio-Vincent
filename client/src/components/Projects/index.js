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
import dataProjects from './Utils/data';
/*
 * Component
 */

class Projects extends React.Component {
  state = {
    currentProject: dataProjects[0],
  }

  componentDidMount() {
    const imagesLoader = document.querySelector('.images-loader');
    dataProjects.map((project) => {
      const img = document.createElement('img');
      img.src = project.src;
      imagesLoader.appendChild(img).style.display = 'none';
      return img.src;
    });
  }

  handleClick = value => () => {
    const { currentProject } = this.state;
    const indexProject = dataProjects.indexOf(currentProject);
    if (value === 'previous') {
      if (indexProject === 0) {
        this.setState({ currentProject: dataProjects[dataProjects.length - 1] });
      }
      else {
        this.setState({ currentProject: dataProjects[indexProject - 1] });
      }
    }
    else if (value === 'next') {
      if (indexProject === dataProjects.length - 1) {
        this.setState({ currentProject: dataProjects[0] });
      }
      else {
        this.setState({ currentProject: dataProjects[indexProject + 1] });
      }
    }
  }

  render() {
    const options = {
      onChange: this.props.handleIntersection,
      root: null,
      rootMargin: '-10% 0% -90%',
    };

    const { currentProject } = this.state;
    const styleImage = {
      backgroundImage: `url(${currentProject.src})`,
    };
    return (
      <Observer {...options}>
        <div id="projects">
          <p className="h3 red">Projects</p>
          <div className="card-project">
            <div className="image-wrapper" style={styleImage} />
            <div className="project-details">
              <div className="wrapper-content">
                <h4 className="title">{currentProject.name}</h4>
                <p className="content-project">{currentProject.content}</p>
                <ul className="skills-list">
                  {
                    currentProject.skills.map(skill => (
                      <li key={skill}>{skill}</li>
                    ))
                  }
                </ul>
              </div>
            </div>
            <div className="next" onClick={this.handleClick('next')}>
              <svg version="1.1" viewBox="0 0 129 129" enableBackground="new 0 0 129 129" width="512px" height="512px">
                <g>
                  <path d="m40.4,121.3c-0.8,0.8-1.8,1.2-2.9,1.2s-2.1-0.4-2.9-1.2c-1.6-1.6-1.6-4.2 0-5.8l51-51-51-51c-1.6-1.6-1.6-4.2 0-5.8 1.6-1.6 4.2-1.6 5.8,0l53.9,53.9c1.6,1.6 1.6,4.2 0,5.8l-53.9,53.9z" />
                </g>
              </svg>
            </div>
            <div className="previous" onClick={this.handleClick('previous')}>
              <svg version="1.1" viewBox="0 0 129 129" enableBackground="new 0 0 129 129" width="512px" height="512px">
                <g>
                  <path d="m40.4,121.3c-0.8,0.8-1.8,1.2-2.9,1.2s-2.1-0.4-2.9-1.2c-1.6-1.6-1.6-4.2 0-5.8l51-51-51-51c-1.6-1.6-1.6-4.2 0-5.8 1.6-1.6 4.2-1.6 5.8,0l53.9,53.9c1.6,1.6 1.6,4.2 0,5.8l-53.9,53.9z" />
                </g>
              </svg>
            </div>
          </div>
          <div className="images-loader" />
        </div>
      </Observer>
    );
  }
}

Projects.propTypes = {
  handleIntersection: PropTypes.func.isRequired,
};

/*
 * Export default
 */
export default Projects;
