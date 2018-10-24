import React from 'react'
import './Menu.css'

export const Menu = () => {
  return (
    <div className='menu'>
      <nav className='menu-nav'>
        <a className='menu-item' href='#about'>Home</a>
        <a className='menu-item' href='#portfolio'>Portfolio</a>
        <a className='menu-item' href='#contact'>Reach Out</a>
      </nav>
    </div>)
}
