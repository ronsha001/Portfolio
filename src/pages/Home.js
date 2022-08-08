import React from 'react'
import About from '../components/About/About';
import Contact from '../components/Contact/Contact';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import Portfolio from '../components/Portfolio/Portfolio'

const Home = () => {
  
  return (
    <>
      <Header />
      <Portfolio />
      <About />
      <Contact />
      <Footer />
    </>
  )
}

export default Home