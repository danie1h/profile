import React, { Component } from 'react'
import './Portfolio.css'
import Codepen from 'react-codepen-embed'

class Portfolio extends Component {
  render () {
    const codepenUser = 'danie1h'
    const defaultHeightOfPen = 600
    const defaultTabOfPen = 'result' // upon load only show the result site, not the code
    const defaultThemeIdOfPen = 'default' // only option for nonpaid user
    const d3PenList = [ // list of JS projects with D3 implementation
      {
        name: 'heat-map',
        hash: 'gjLGNY',
        description: 'Get some heated history by checking the temperatures. {D3 JS}'
      }, {
        name: 'choropleth-map',
        hash: 'qyjZJN',
        description: 'Find the most studious (or lack there of) in the U.S. {D3 JS}'
      }, {
        name: 'treemap',
        hash: 'ejEzzY',
        description: 'Branch out to find the top kickstarter campaigns. {D3 JS}'
      }
    ]
    const reactPenList = [ // list of JS porjects with react implementation
      {
        name: 'calculator',
        hash: 'qKgxgR',
        description: 'Crunch some numbers with a calculator. {React, Redux & SCSS}'
      }, {
        name: 'drum-machine',
        hash: 'WyLbmK',
        description: 'Drop a beat with a drum machine. {React and SCSS}'
      }, {
        name: 'pomodoro-timer',
        hash: 'PBoMwG',
        description: 'Stay efficient by setting the Pomodoro timer. {React, Redux & SCSS}'
      }
    ]

    let d3PenListInJSX = d3PenList.map(pen => { // create JSX output for all the d3 objects listed
      return (
        <div className='pen-container' id={pen.name} key={pen.name}>
          <div className='pen'>
            <Codepen hash={pen.hash} user={codepenUser} height={defaultHeightOfPen} defaultTab={defaultTabOfPen} themeId={defaultThemeIdOfPen} />
          </div>
          <div className='pen-description-container'>
            <p className='pen-description'>{pen.description}</p>
          </div>
        </div>
      )
    })
    let reactPenListInJSX = reactPenList.map(pen => { // create JSX output for all the react objects listed
      return (
        <div className='pen-container' id={pen.name} key={pen.name}>
          <div className='pen'>
            <Codepen hash={pen.hash} user={codepenUser} height={defaultHeightOfPen} defaultTab={defaultTabOfPen} themeId={defaultThemeIdOfPen} />
          </div>
          <div className='pen-description-container'>
            <p className='pen-description'>{pen.description}</p>
          </div>
        </div>
      )
    })

    return (
      <div className='portfolio' id='portfolio'>
        <div className='portfolio-header'>
          <img className='portfolio-icon' src='https://res.cloudinary.com/joeschmoe1/image/upload/v1540416981/portfolio-icon.png' alt='portfolio-icon' />
          <h2 className='portfolio-title'>Portfolio</h2>
        </div>
        <div className='d3-pen-container'>
          {d3PenListInJSX}
        </div>
        <div className='react-pen-container'>
          {reactPenListInJSX}
        </div>
      </div>)
  }
}

export default Portfolio
