import React, {Component} from 'react';
import './App.css';
import Menu from './Menu.js';
import About from './About.js';
import Portfolio from './Portfolio.js';
import Contact from './Contact.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Menu />
        <About />
        <Portfolio />
        <Contact />
        <div className="Footer">
          <p>&copy; 2018 Daniel Humphreys</p>
        </div>
      </div>
    );
  }
}

export default App;
