import React, { useRef } from 'react'
import Header from '../components/Header/Header';
import Portfolio from '../components/Portfolio/Portfolio'

const Home = () => {
  const myRefs = [useRef(), useRef(), useRef()];
  return (
    <>
      <Header />
      <Portfolio sectionRef={myRefs[0]}/>
    </>
  )
}

export default Home