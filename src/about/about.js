import React from 'react'
import './about.css'
import handIcon from '../resources/hand.png'

export const About = () => {
  return (
    <div className='about' id='about'>
      <img className='wave' src={handIcon} alt='hand-wave' />
      <h1 className='about-heading'>Hello There! I'm Daniel.</h1>
      <p className='about-description'>I enjoy the outdoors, fotos and the front end</p>
    </div>)
}
