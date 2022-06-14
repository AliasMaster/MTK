import { React, useEffect, useRef, useState } from 'react'

import { BsArrowBarRight,  BsArrowBarLeft} from 'react-icons/bs'

import { AiOutlineInfoCircle, AiFillInfoCircle } from 'react-icons/ai'

import './index.css'

import { PHONES } from '../../consts/phones'

const HomeGalery = () => {


  // slider functions
  const nextButton = useRef({});
  const prevButton = useRef({});
  
  var slides
  var values = []

  useEffect(() => {
    slides = document.querySelectorAll('.home-galery-item')
    if(slides.length > 3) {
      values[0] = slides.length - 1 // prev
      values[1] = 0                 // current
      values[2] = 1                 // next
      
      // displayDesc(false)
      slides[values[0]].classList.add("prev");
      slides[values[1]].classList.add("active");
      slides[values[2]].classList.add("next");
      
      nextButton.current.onclick = () => {
        goNext()
      }
      
      prevButton.current.onclick = () => {
        goPrev()
      }
    }
  }, [])

  var goPrev = () => {
    goNum(false)
  }

  var goNext = () => {
    goNum(true)
  }

  var goNum = isRight => {
    
    var increment
    isRight ? increment = 1 : increment = -1; 

    
    for(let i=0; i<slides.length; i++) {
      values[i] += increment

      if(values[i] >= slides.length) {
        values[i] = 0
      }

      if(values[i] < 0) {
        values[i] = slides.length - 1
      }
    }
    
    for (let i = 0; i < slides.length; i++) {
      slides[i].classList.remove("active");
      slides[i].classList.remove("prev");
      slides[i].classList.remove("next");
    }

    

    slides[values[0]].classList.add("prev");
    slides[values[1]].classList.add("active");
    slides[values[2]].classList.add("next");

    // displayDesc(false)
  }

  //show description

  // const [outIcon, setOutIcon] = useState(false);

  // var descBox, item, iconBox
  // var items = []
  // let j

  // useEffect(() => {
  //   item = document.querySelectorAll('.home-galery-item')

  //   j=0
  //   item.forEach(e => {
  //     e.childNodes.forEach(el => {
  //       if(el.classList.contains('home-galery-item-description')) {
  //         descBox = el
  //       }

  //       if(el.classList.contains('home-galery-icon')) {
  //         iconBox = el
  //       }
  //     })
      
  //     items[j] = new Array(descBox, iconBox)

  //     j++
  //   });

  //   displayDesc()

  // }, []);

  // var displayDesc = (...args) => {
  //   if(args[0] == false) {
  //     for(let i = 0; i<items.length; i++) {
  //       items[i][0].classList.remove('top')
  //       items[i][1].classList.remove('top')
  //     }
  //     return 0
  //   }

  //   for(let i = 0; i<items.length; i++) {
  //     items[i][1].onclick = () => {
  //       items[i][0].classList.toggle('top')
  //       items[i][1].classList.toggle('top')

  //       if(items[i][1].classList.contains('top')) {
  //         setOutIcon(true)
  //       } else {
  //         setOutIcon(false)
  //       }
  //     }
  //   }
  // }

  //galery items
  var phonesArray = PHONES

  if(phonesArray.length >10) {
    phonesArray = phonesArray.slice(10)
  }


  var galeryItems = phonesArray.map((phone) =>
    <article className='home-galery-item' key={phone.id}>
      <img src={phone.img} alt="phone" className='home-galery-item-img'/>
      {/* <div className='home-galery-item-description'>
        <div className='text'>
          <h3>{phone.name}</h3>
          <p>{phone.description}</p>
        </div>
      </div>
      <div className='home-galery-icon'>
        {outIcon ? <AiFillInfoCircle /> : <AiOutlineInfoCircle />}
      </div> */}
    </article>
  );

  return (
      <>
        <section className='home-galery'>
          <h2 className='home-galery-title'>Galeria</h2>
          <div className='home-galery-content'>
            {phonesArray.length > 3 ? galeryItems: ''}
          </div>
          <button className='active'>Zobacz więcej</button>
          <div className='slide slide-left' ref={prevButton}>
            <BsArrowBarLeft/>
          </div>
          <div className='slide slide-right' ref={nextButton}>
            <BsArrowBarRight/>
          </div>
        </section>
      </>
  )
}

export default HomeGalery