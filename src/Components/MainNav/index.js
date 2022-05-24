import React, { useEffect } from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import { scrollToElement, scrollTop } from '../../consts/scrollTo'

import './index.css'


const MainNav = ({logo, display}) => {

  return (
    <Router>
      <nav className={display ? 'main-nav displayed' : 'main-nav'} >
          <div className='main-logo'>
            <Link to="/" onClick={() => { scrollTop() }}>
              <img src={logo} alt='Logo'/>
            </Link>
          </div>
          <ul className='nav-bar'>
            <Link to="/" onClick={() => { scrollTop() }}>
              <li className='nav-bar-item'>Strona Główna</li>
            </Link>
            <Link to="/Galeria">
              <li className='nav-bar-item'>Galeria</li>
            </Link>
            <Link
              to={{
                  pathname: "/",
                  state: { fromDashboard: true }
              }} onClick={() => scrollToElement('history')}>
              <li className='nav-bar-item'>Historia</li>
            </Link>
            <Link
              to={{
                  pathname: "/",
                  state: { fromDashboard: true }
              }} onClick={() => scrollToElement('footer')}>
              <li className='nav-bar-item'>Kontakt</li>
            </Link>
          </ul>
      </nav>
    </Router>
  )
}

export default MainNav