import React from 'react'

import MainNav from '../MainNav'
import MainSocialMedia from '../MainSocialMedia'

import './index.css'

//import background from '../../Assets/Images/backgroundL.jpg'
import background from '../../Assets/Images/backgroundVertical.png'
//import background from '../../Assets/Images/backgroundHorizontalSmall.png'
import logo from '../../Assets/Images/logo.png'


const Main = () => {
  
  return (
    <>
      <article className='main-page'>
        <div className='background'>
          <img src={background} alt="background" />
          <div className='background-filter'></div>
        </div>
        <div className='main-content'>
          <MainNav logo={logo} display={true}/>
          <section className='main-text'>
            <div>
              <h1 className='main-title'>Muzeum <span className='template-blue'>Telefonii</span> Komórkowej</h1>
              <p className='title-description'>W Zespole Szkół Elektronicznych i Informatycznych w Sosnowcu</p>
            </div>
          </section>
        </div>
        <MainSocialMedia/>
      </article>
    </>
  )
}

export default Main