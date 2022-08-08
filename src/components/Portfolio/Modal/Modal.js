import React from 'react'
import './Modal.css';

const Modal = ({showWindow, handleClose, title, desc, image1, image2, link, git, secondaryTitle}) => {
  const handlePropagation = (e) => {
    e.stopPropagation();
  }
  return (
    <div className="modal-backdrop" onClick={handleClose}>
      <div className="modal" onClick={(e) => handlePropagation(e)}>
        <h2>{title}</h2>
        {secondaryTitle && <h3>{secondaryTitle}</h3>}
        <div className="images-container">
          <div className="image">
            <img src={image1} alt="img" />
          </div>
          <div className="image">
            <img src={image2} alt="img" />
          </div>
        </div>
        <p>{desc}</p>
        <i className="fa-solid fa-xmark close" onClick={handleClose}></i>
        <div className="links">
          <a href={link} target="_blank" rel='noreferrer' id='live'><i className="fa-solid fa-diamond-turn-right"></i> Live</a>
          <a href={git} target="_blank" rel='noreferrer' id='git'><i className="fa-brands fa-github"></i> Git</a>
        </div>
      </div>
    </div>
  )
}
export default Modal

