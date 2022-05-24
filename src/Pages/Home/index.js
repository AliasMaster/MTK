import React from 'react'
import HomeGalery from '../../Components/Home Galery'
import Main from '../../Components/Main'
import Footer from '../../Components/Footer'
import Nav from '../../Components/Nav/'
import Break from '../../Components/Break/'
import History from '../../Components/History'

const Home = () => {
  return (
    <>
      <Nav/>
      <Main/>
      <HomeGalery />
      <Break/>
      <History/>
      <Footer />
    </>
  )
}

export default Home