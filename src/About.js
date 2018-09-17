import React, {Component} from 'react';
import "./About.css";

class About extends Component {
  render() {
    return (
      <div className="about" id="about">
        <img className="wave" src="https://res.cloudinary.com/joeschmoe1/image/upload/v1536866929/baseline_pan_tool_white_18dp.png" alt="Hand Wave"></img>
        <h1 className="about-heading">Hello There! I'm Daniel.</h1>
        <p className="about-description">I enjoy the outdoors, fotos and the front end</p>
      </div>);
  }
}

export default About;