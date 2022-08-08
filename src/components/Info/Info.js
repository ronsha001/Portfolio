import React from 'react'
import './Info.css';
import myImg from '../../images/me.jpg';
const Info = () => {
  return (
    <div className="info-container">
      <div className="image-container">
        <div className="image">
          <img src={myImg} alt="Me" />
        </div>
        <div className="links">
          <div className="link">
            <a href="https://www.linkedin.com/in/ron-sharabi/" target="_blank" rel="noreferrer" ><i className="fa-brands fa-linkedin"></i></a>
          </div>
          <div className="link">
            <a href="https://github.com/ronsha001" target="_blank" rel="noreferrer" ><i className="fa-brands fa-github"></i></a>
          </div>
        </div>
      </div>
      <h1>Ron Sharabi</h1>
      <div className="divider-line">
          <span>
          <i className="fa-solid fa-grip-lines divider"></i>
          </span>
          <span>
          <i className="fa-solid fa-graduation-cap"></i>
          </span>
          <span>
          <i className="fa-solid fa-grip-lines divider"></i>
          </span>
      </div>
      <p>Hi, my name is Ron a Full Stack Web developer.</p>
    </div>
  )
}

export default Info