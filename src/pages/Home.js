import React, { useRef } from 'react'
import About from '../components/About/About';
import Contact from '../components/Contact/Contact';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import Portfolio from '../components/Portfolio/Portfolio'

const Home = () => {
  const myRefs = [useRef(), useRef(), useRef()];
  return (
    <>
      <Header />
      <Portfolio sectionRef={myRefs[0]}/>
      <About />
      <Contact />
      <Footer />
    </>
  )
}

export default Home