/*
 * Npm import
 */
import React from 'react';
import 'babel-polyfill';
/*
 * Local import
 */

/*
 * Component
 */
import Header from '../Header';
// import Test from '../Test';
import AboutMe from '../AboutMe';
import Skills from '../Skills';
import Projects from '../Projects';
import Contact from '../Contact';

class App extends React.Component {
  state = {
    inverted: false,
  }

  handleIntersection = (event) => {
    const bar1 = document.querySelector('.bar1');
    const bar2 = document.querySelector('.bar2');
    const bar3 = document.querySelector('.bar3');
    if (event.isIntersecting) {
      bar1.style.backgroundColor = 'black';
      bar2.style.backgroundColor = 'black';
      bar3.style.backgroundColor = 'black';
    }
    else if (!event.isIntersecting) {
      bar1.style.backgroundColor = 'white';
      bar2.style.backgroundColor = 'white';
      bar3.style.backgroundColor = 'white';
    }
  }

  handleClick = () => {
    if (window.screen.height < 748) {
      this.setState({ inverted: !this.state.inverted });
    }
  }
  render() {
    const { inverted } = this.state;
    return (
      <div id="app">
        <Header inverted={inverted} handleClick={this.handleClick} />
        <AboutMe handleIntersection={this.handleIntersection} />
        <Skills />
        <Projects handleIntersection={this.handleIntersection} />
        <Contact />
      </div>
    );
  }
}

/*
 * Export default
 */
export default App;
