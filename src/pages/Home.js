import React, { useRef } from 'react'
import About from '../components/About/About';
import Header from '../components/Header/Header';
import Portfolio from '../components/Portfolio/Portfolio'

const Home = () => {
  const myRefs = [useRef(), useRef(), useRef()];
  return (
    <>
      <Header />
      <Portfolio sectionRef={myRefs[0]}/>
      <About />
    </>
  )
}

export default Home