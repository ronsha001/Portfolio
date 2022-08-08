import React from 'react'
import './About.css';

const About = () => {
  return (
    <section>
      <div className="about-container">
        <div className="about-wrapper">
          
          <div className="text-center">
            <h1>ABOUT</h1>
          </div>

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

          <div className="text-container">
            <div className="text">
              <p>
              I'm a Software Engineer specializing in Web Development, Java, and Networking (Cisco CCNA certified). During my degree studies, I learned object-oriented, data structures and algorithms, relational databases, web development, user experience, and much more.
              <br/> <br />
              Today I'm a web developer with knowledge in both frontend and backend technologies. Solutions provider loves challenges, is pleasant to work with, is a team player with a can-do approach, and is highly motivated to explore and learn the most modern technologies.
              </p>
            </div>
            <div className="text">
              <p>
              React + Redux | Node.js + Express | JavaScript | TypeScript | MySQL + Sequelize | MongoDB + Mongoose | HTML5 | CSS3 | Bootstrap | GIT | RestFull API | GraphQL | MVC | Java | PHP | Python | Docker | OSI Model | IT | C | Selenium | Sockets | Linux | OOP | Data Structure | Unit Testing | UML
              <br /> <br />
              Language acquisition | Innovative thinking | Analytical skills | Attention to detail | Quick & Self learner | Communication | Think outside the box | Team player | Strong memory
              </p>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  )
}

export default About