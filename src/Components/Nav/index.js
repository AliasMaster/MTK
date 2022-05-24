import { React, useEffect, useState } from 'react'

import MainNav from '../MainNav'

import './index.css';

import logo from '../../Assets/Images/logo-min.png'

const Nav = () => {

  const [onView, setOnView] = useState(false);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    var footer = document.querySelector('.footer')
    setOffset(getOffset(footer))
  }, [])

  function getOffset(el) {
    const rect = el.getBoundingClientRect();
    return rect.top + window.scrollY
  }

  window.onscroll = () => {
    if(window.scrollY > (4/5 * window.innerHeight) && window.scrollY < (offset - 200)) {
      setOnView(true)
    } else {
      setOnView(false)
    }
  }
  
  return (
    <div className='navigator'>
      <MainNav logo={logo} display={onView}/>
    </div>
  )
}

export default Nav