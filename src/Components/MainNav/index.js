import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import { scrollToElement, scrollTop } from '../../consts/scrollTo'
import NavBar from '../NavBar'

import './index.css'

const MainNav = ({logo, display}) => {

  return (
    <Router>
      <nav className={display ? (window.innerWidth <= 768 ? 'main-nav displayed hamburger' : 'main-nav displayed') : (window.innerWidth <= 768 ? 'main-nav hamburger' : 'main-nav')} >
          <div className='main-logo'>
            <Link to="/" onClick={() => { scrollTop() }}>
              <img src={logo} alt='Logo'/>
            </Link>
          </div>
          <NavBar/>
      </nav>
    </Router>
  )
}

export default MainNav