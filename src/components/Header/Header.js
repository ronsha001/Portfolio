import React from 'react'
import Info from '../Info/Info'
import Navbar from '../Navbar/Navbar'

const Header = ({myRefs}) => {
  return (
    <header>
      <Navbar/>
      <Info />
    </header>
  )
}

export default Header