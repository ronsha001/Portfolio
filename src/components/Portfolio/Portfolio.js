import React from 'react'
import './Portfolio.css';
import myBestMemories from '../../images/mybestmemories.png';
import nodeTravelApp from '../../images/nodeTravelAppMVC.png';
import getAgent from '../../images/getAgent.png';
import brainGym from '../../images/brainGym.png';

import mbm1 from '../../images/mbm1.png';
import mbm2 from '../../images/mbm2.png';

import nta1 from '../../images/nta1.png';
import nta2 from '../../images/nta2.png';

import ga1 from '../../images/ga1.png';
import ga2 from '../../images/ga2.png';

import bg1 from '../../images/bg1.png';
import bg2 from '../../images/bg2.png';


import Card from './Card/Card';

const Portfolio = () => {

  return (
    <section id='Portfolio' className='portfolio-container'>
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
          image={myBestMemories} 
          title={"Memories - React & Node(Rest API)"}
          secondaryTitle={"MERN Stack"}
          link={"https://mybestmemories.netlify.app/posts"}
          desc={`
            Social media that allow to share memories, like other's memories and comment on other's memories.
            This project includes Login with Email (JWT) + Google OAuth Authentication.
            React + Redux, Node, Express, MongoDB`}
          image1={mbm1}
          image2={mbm2}
          git={"https://github.com/ronsha001/FullStack-Memories"}
        />
        <Card 
          image={nodeTravelApp} 
          title={"Travel App - Node(MVC)"} 
          secondaryTitle={"Node.js + EJS"}
          link={"https://travel-node-app.herokuapp.com/"}
          desc={`Model View Controller architecture with csrf session protection + Auth + Authrorization +
            Error Handling + Validation + AWS S3 Bucket + Stripe payment + Cloudinary images media and etc..`}
          image1={nta1}
          image2={nta2}
          git={"https://github.com/ronsha001/Node-Travel-App"}
        />
        <Card 
          image={getAgent} 
          title={"GetAgent - PHP"} 
          desc={`During my degree studies, I was required to make a final project for the degree, so I decided to make a real estate agents website called "GetAgent". this website was built by me and meant to help real estate agents to publish their names and their assets in the market. I developed the front and the backend using HTML, CSS, JS, PHP and MySql.`}
          link={"http://getagent.infinityfreeapp.com/index.php"}
          image1={ga1}
          image2={ga2}
          git={"https://github.com/ronsha001/GetAgent-FinalProject"}
        />
        <Card 
          image={brainGym} 
          title={"BrainGym - React"}
          secondaryTitle={"React.js (without backend)"}
          link={"https://brain--gym.herokuapp.com/"}
          desc={`Front-end React.js project that I wrote to improve my skills and just for fun and practice. However, in my eyes, the idea of this project is brilliant.`}
          image1={bg1}
          image2={bg2}
          git={"https://github.com/ronsha001/BrainGYM"}
        />
        
      </div>
    </section>
  )
}

export default Portfolio