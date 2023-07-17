import React from 'react'
import "./Navbar.css"

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='navbar__logo'>
            <h2>The Elysian</h2>
        </div>
        <ul className='navbar__links'>
            <li><a href='#home'>Home</a></li>
            <li><a href='#about'>About</a></li>
            <li><a href='#menu'>Menu</a></li>
            <li><a href='#specials'>Specials</a></li>
        </ul>
        <div className="navbar__right">
            <a>Reserve/Book</a>
        </div>
      
    </div>
  )
}

export default Navbar
