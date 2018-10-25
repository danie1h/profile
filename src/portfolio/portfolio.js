import React from 'react'
import './portfolio.css'
import portfolioIcon from '../resources/portfolio-icon.png'

export const Portfolio = (props) => {
  return (
    <div className='portfolio' id='portfolio'>
      <div className='portfolio-header'>
        <img className='portfolio-icon' src={portfolioIcon} alt='portfolio-icon' />
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
