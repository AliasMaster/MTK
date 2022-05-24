import React, { useEffect, useRef, useState } from 'react'

import './index.css'

const Break = () => {

    var height, width

    useEffect(() => {
        height = document.querySelector('.squere').offsetHeight
        width = document.querySelector('.squere').offsetWidth

        if(height > width) {
            document.querySelector('.squere').style.width = height + 'px'
        } else {
            document.querySelector('.squere').style.height = width + 'px'
        }
    })

  return (
    <div className='break'>
        <div className='squere'>
            <span className='noOfPhones'>320+</span>
            <span className='break-desc'>Telefonow w kolekcji</span>
        </div>
    </div>
  )
}

export default Break