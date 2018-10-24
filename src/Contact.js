import React, { Component } from 'react'
import './Contact.css'

class Contact extends Component {
  render () {
    return (
      <div className='contact' id='contact'>
        <div className='contact-content'>
          <h2 className='contact-heading'>Reach Out</h2>
          <div className='contact-items'>
            <div className='contact-dev-items'>
              <a href='https://codepen.io/danie1h/' target='_blank' rel='noopener noreferrer'><img className='content-img' id='codepen' src='https://res.cloudinary.com/joeschmoe1/image/upload/v1528178008/codepen.png' alt='codepen icon' /></a>
              <a href='https://github.com/danie1h' target='_blank' rel='noopener noreferrer'><img className='content-img' id='github' src='https://res.cloudinary.com/joeschmoe1/image/upload/v1536868333/GitHub-Mark-120px-plus.png' alt='github icon' /></a>
              <a id='profile-link' href='https://www.freecodecamp.org/portfolio/danie1h' target='_blank' rel='noopener noreferrer'><img className='content-img' id='fcc' src='https://res.cloudinary.com/joeschmoe1/image/upload/v1528222837/freecodecamp.svg' alt='free code camp icon' width='128' /></a>
            </div>
            <div className='contact-social-items'>
              <a href='https://www.linkedin.com/in/daniel-humphreys/' target='_blank' rel='noopener noreferrer'><img className='content-img' id='linkedin' src='https://res.cloudinary.com/joeschmoe1/image/upload/v1536868388/Linkedin-256.png' alt='linkedin icon' height='120' width='120' /></a>
              <a href='https://vsco.co/dan_d/' target='_blank' rel='noopener noreferrer'><img className='content-img' id='vsco' src='https://res.cloudinary.com/joeschmoe1/image/upload/v1536867625/vsco-black.png' alt='vcsco icon' /></a>
              <a href='https://www.instagram.com/daniel_humphreys_/' target='_blank' rel='noopener noreferrer'><img className='content-img' id='instagram' src='https://res.cloudinary.com/joeschmoe1/image/upload/v1528222766/instagram-128.png' alt='instagram icon' /></a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Contact
