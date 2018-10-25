import React, { Component } from 'react'
import './profile.css'
import { Menu } from './menu/menu.js'
import { About } from './about/about.js'
import { Portfolio } from './portfolio/portfolio.js'
import { Contact } from './contact/contact.js'

class Profile extends Component {
  render () {
    return (
      <div className='App'>
        <Menu />
        <About />
        <Portfolio reactPenList={this.props.reactPenList} d3PenList={this.props.d3PenList} />
        <Contact />
        <footer>
          <p>&copy; 2018 Daniel Humphreys</p>
        </footer>
      </div>
    )
  }
}

export default Profile
