import React, {Component} from 'react';
import "./Menu.css";

class Menu extends Component {
  render() {
    return (
    <div className="menu">
      <nav className="menu-nav">
        <a className="menu-item" href="#about">Home</a>
        <a className="menu-item" href="#portfolio">Portfolio</a>
        <a className="menu-item" href="#contact">Reach Out</a>
      </nav>
    </div>);
  }
}

export default Menu;
