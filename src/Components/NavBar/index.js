import React, { useEffect } from 'react'

import { scrollToElement, scrollTop } from '../../consts/scrollTo'
import { BrowserRouter as Router, Link } from 'react-router-dom'

const NabBar = () => {

    var close, burger, nav, items
    useEffect(() => {
        close = document.querySelectorAll('.close')
        burger = document.querySelectorAll('.menu-hamburger')
        nav = document.querySelector('.navigator .nav-bar')
        items = document.querySelectorAll('.navigator .nav-bar-item')

        burger.forEach(e => {
            e.onclick = () => {
                nav.classList.add('active')
            }
        })

        close.forEach(e => {
            e.onclick = () => {
                removeNav()
            }
        })

        items.forEach(e => {
            e.onclick = () => {
                removeNav()
            }
        })
    }, [])

    var removeNav = () => {
        nav.classList.remove('active')
    }

  return (
    <>
        <ul className='nav-bar'>
            <div className='nav-bar-block'>
                <div className='close'>
                    <div className='close-top'></div>
                    <div className='close-bottom'></div>
                </div>
                <Link to="/" onClick={() => { scrollTop() }}>
                    <li className='nav-bar-item'>Strona Główna</li>
                </Link>
                <Link to="/Galeria" >
                    <li className='nav-bar-item'>Galeria</li>
                </Link>
                <Link
                    to={{
                        pathname: "/",
                        state: { fromDashboard: true }
                    }} onClick={() => {scrollToElement('history')}}>
                    <li className='nav-bar-item'>Historia</li>
                </Link>
                <Link
                    to={{
                        pathname: "/",
                        state: { fromDashboard: true }
                    }} onClick={() => {scrollToElement('footer')}}>
                    <li className='nav-bar-item'>Kontakt</li>
                </Link>
            </div>
        </ul>
        <div className='menu-hamburger'>
            <div className='hamburger-top'></div>
            <div className='hamburger-mid'></div>
            <div className='hamburger-bottom'></div>
        </div>
    </>
  )
}

export default NabBar