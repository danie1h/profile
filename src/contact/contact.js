import React from 'react'
import './contact.css'
import githubIcon from '../resources/github.png'
import codepenIcon from '../resources/codepen.png'
import freecodecampIcon from '../resources/freecodecamp.svg'
import linkedinIcon from '../resources/linkedin.png'
import vscoIcon from '../resources/vsco.png'
import instagramIcon from '../resources/instagram.png'

export const Contact = () => {
  return (
    <div className='contact' id='contact'>
      <div className='contact-content'>
        <h2 className='contact-heading'>Reach Out</h2>
        <div className='contact-items'>
          <div className='contact-dev-items'>
            <a href='https://github.com/danie1h' target='_blank' rel='noopener noreferrer'><img className='content-img' id='github' src={githubIcon} alt='github icon' /></a>
            <a href='https://codepen.io/danie1h/' target='_blank' rel='noopener noreferrer'><img className='content-img' id='codepen' src={codepenIcon} alt='codepen icon' /></a>
            <a id='profile-link' href='https://www.freecodecamp.org/portfolio/danie1h' target='_blank' rel='noopener noreferrer'><img className='content-img' id='fcc' src={freecodecampIcon} alt='free code camp icon' width='128' /></a>
          </div>
          <div className='contact-social-items'>
            <a href='https://www.linkedin.com/in/daniel-humphreys/' target='_blank' rel='noopener noreferrer'><img className='content-img' id='linkedin' src={linkedinIcon} alt='linkedin icon' height='120' width='120' /></a>
            <a href='https://vsco.co/dan_d/' target='_blank' rel='noopener noreferrer'><img className='content-img' id='vsco' src={vscoIcon} alt='vcsco icon' /></a>
            <a href='https://www.instagram.com/daniel_humphreys_/' target='_blank' rel='noopener noreferrer'><img className='content-img' id='instagram' src={instagramIcon} alt='instagram icon' /></a>
          </div>
        </div>
      </div>
    </div>
  )
}
