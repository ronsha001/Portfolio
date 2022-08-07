import React from 'react'
import './Portfolio.css';
import myBestMemories from '../../images/mybestmemories.png';
import nodeTravelApp from '../../images/nodeTravelAppMVC.png';
import getAgent from '../../images/getAgent.png';
import brainGym from '../../images/brainGym.png';

import Card from './Card/Card';
const Portfolio = ({sectionRef}) => {
  return (
    <section className='portfolio-container' ref={sectionRef}>
      <h1>PORTFOLIO</h1>
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
      <div className="cards-container">
        <Card 
          myBestMemories={myBestMemories} 
          title={"Memories - React + Node(Rest API)"} 
          link={"https://mybestmemories.netlify.app/posts"}
        />
        <Card 
          myBestMemories={nodeTravelApp} 
          title={"Travel App - Node(MVC)"} 
          link={"https://travel-node-app.herokuapp.com/"}
        />
        <Card 
          myBestMemories={getAgent} 
          title={"GetAgent - PHP"} 
          link={"http://getagent.infinityfreeapp.com/index.php"}
        />
        <Card 
          myBestMemories={brainGym} 
          title={"BrainGym - React"} 
          link={"https://brain--gym.herokuapp.com/"}
        />
        
      </div>
    </section>
  )
}

export default Portfolio