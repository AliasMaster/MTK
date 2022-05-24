import React from 'react'

import './index.css'

import elektronikIcon from '../../Assets/Images/social media/elektronik256.png'
import facebookIcon from '../../Assets/Images/social media/facebook256.png'
import instagramIcon from '../../Assets/Images/social media/instagram512.png'

const MainSocialMedia = () => {
  return (
    <div className='main-social-media'>
        <span className='main-social-media-item'>
        <a href="https://www.facebook.com/muztelkom" target="_blank" rel="noreferrer">
            <img src={facebookIcon} alt='logo facebook'/>
        </a>
        </span>
        <span className='main-social-media-item'>
        <a href="https://www.instagram.com/muztelkom/" target="_blank" rel="noreferrer">
            <img src={instagramIcon} alt='logo instragram'/>
        </a>
        </span>
        <span className='main-social-media-item elektronik'>
        <a href="https://zse.edu.pl/" target="_blank" rel="noreferrer">
            <img src={elektronikIcon} alt='logo elektronik'/>
        </a>
        </span>
    </div>
  )
}

export default MainSocialMedia