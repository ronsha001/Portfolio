import React from 'react'
import barsSVG from './bars-solid.svg'
import './BurgerButton.css'

const BurgerButton = ({ isActive, setIsActive}) => {
  return (
    <button className={isActive ? 'burger active' : 'burger'} type='button' onClick={() => setIsActive(!isActive)}>Menu <img src={barsSVG} alt="Bars SVG" /> </button>
  )
}

export default BurgerButton