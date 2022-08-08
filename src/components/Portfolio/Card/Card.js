import React, { useState } from 'react'
import Modal from '../Modal/Modal';
import './Card.css';
const Card = ({ image, title, link, desc, image1, image2, git, secondaryTitle}) => {
  const [showWindow, setShowWindow] = useState(false);

  if (showWindow) {
    const body = document.querySelector("body");
    body.style.overflow = 'hidden';
  } else {
    const body = document.querySelector("body");
    body.style.overflow = 'auto';
  }

  const handleClose = () => {
    setShowWindow(false);
  }
  return (
    <>
    <div  className="card-wrapper" onClick={() => setShowWindow(true)}>
      <img src={image} alt="project" />
      <div className="card">
        <h2>{title}</h2>
        <i className="fa-solid fa-plus"></i>
      </div>
    </div>
    { showWindow && 
        <Modal
          showWindow={showWindow}
          handleClose={handleClose} 
          title={title}
          desc={desc}
          image1={image1}
          image2={image2}
          link={link}
          git={git}
          secondaryTitle={secondaryTitle}
        />
    }
    </>
  )
}

export default Card