import React from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import { scrollToElement, scrollTop } from '../../consts/scrollTo'

import './index.css'

import MainSocialMedia from '../MainSocialMedia'

import Map from '../../consts/Map'
import Facebook from '../../consts/Facebook'

import elektronikLogo from '../../Assets/Images/social media/elektronik256.png'
import erasmusLogo from '../../Assets/Images/erasmus.png'
import logo from '../../Assets/Images/logo.png'

import { GrMail } from "react-icons/gr";
import { FiMapPin } from 'react-icons/fi'

const Footer = () => {

  return (
    <section className='footer' id='footer'>
      <div className='patrons'>
        <div className='patrons-content'>
          <a className='patron' href='https://zse.edu.pl/erasmusaustria/' target='_blank' rel="noreferrer">
            <img src={erasmusLogo} alt="Logo Erasmus+" />
          </a>
          <a className='patron' href='https://zse.edu.pl/' target='_blank' rel="noreferrer">
            <img src={elektronikLogo} alt="Logo Elektronik" />
          </a>
        </div>
        <span className='patrons-text'>
          Nasi patroni
        </span>
      </div>

      <div className='main-footer'>
        <div className='footer-logo'>
          <img src={logo} alt="Logo" />
        </div>
        <nav className='footer-nav'>
          <Router>
            <h3>Nawigacja:</h3>
            <ul>
              <Link to="/" onClick={() => { scrollTop() }}>
                <li>Strona Glowna</li>
              </Link>
              <Link to="/Galeria">
                <li>Galeria</li>
              </Link>
              <Link
              to={{
                  pathname: "/",
                  state: { fromDashboard: true }
              }} onClick={() => scrollToElement('history')}>
                <li>Historia</li>
              </Link>
              <Link
              to={{
                  pathname: "/",
                  state: { fromDashboard: true }
              }} onClick={() => scrollToElement('footer')}>
                <li>Kontakt</li>
              </Link>
            </ul>
          </Router>
        </nav>
        <div className='footer-contact'>
          <h3>Kontakt:</h3>
          <a href='mailto:muztelkom@gmail.com' className='template-blue contact-content-box'>
            <GrMail/>
            <span>muztelkom@gmail.com</span>
          </a>
          <span className='contact-content-box'>
            <FiMapPin/>
            <span>
              <p>ul. Jagiellońska 13,</p>
              <p>41-200 Sosnowiec</p>
            </span>
          </span>
          <div className='footer-social-media'>
            <MainSocialMedia/>
          </div>
        </div>
        <div className='footer-map'>
          <Map/>
        </div>
        <div className='footer-facebook'>
          <Facebook/>
        </div>
      </div>

      <div className='footer-authors'>
        <span>
          Muzeum Telefonii Komorkowej &copy; 2022
        </span>
        <span className='authors'>
          Piotr Maj, Filip Mrozik, Mateusz Minor
        </span>
      </div>
    </section>
  )
}

export default Footer