import React from 'react'
import './Card.css';
const Card = ({myBestMemories, title, link}) => {
  return (
    <div className="card-wrapper" onClick={() => window.open(link)}>
      <img src={myBestMemories} alt="project" />
      <div className="card">
        <h2>{title}</h2>
        <i className="fa-solid fa-plus"></i>
      </div>
    </div>
  )
}

export default Card