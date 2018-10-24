import React from 'react'
import './Portfolio.css'

export const Portfolio = (props) => {
  return (
    <div className='portfolio' id='portfolio'>
      <div className='portfolio-header'>
        <img className='portfolio-icon' src='https://res.cloudinary.com/joeschmoe1/image/upload/v1540416981/portfolio-icon.png' alt='portfolio-icon' />
        <h2 className='portfolio-title'>Portfolio</h2>
      </div>
      <div className='d3-pen-container'>
        {props.d3PenList}
      </div>
      <div className='react-pen-container'>
        {props.reactPenList}
      </div>
    </div>)
}
