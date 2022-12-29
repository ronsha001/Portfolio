import React from "react";
import "./About.css";

const About = () => {
  return (
    <section id="About">
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
                I am hardworking and self-motivated, someone who loves a
                challenge. I am a creative thinker who likes to solve problems.
                I have built myself and become adept in many DevOps tools such
                as Kubernetes, Docker, Jenkins, GitOps, Github Actions, ArgoCD
                and much more In addition to my knowledge in software
                development.
                <br /> <br />I am a person who is dedicated to his craft and
                seeks on completing my next mission, whatever way it comes,
                communicating to my collogues or teaching newer prospects. I
                know I am an asset wherever I go.
              </p>
            </div>
            <div className="text">
              <p>
                React + Redux | Node.js + Express | JavaScript | TypeScript |
                MySQL + Sequelize | MongoDB + Mongoose | HTML5 | CSS3 |
                Bootstrap | GIT | RestFull API | GraphQL | MVC | Java | PHP |
                Python | Docker | OSI Model | IT | C | Selenium | Sockets |
                Linux | OOP | Data Structure | Unit Testing | UML
                <br /> <br />
                Kubernetes | Helm Charts | Jenkins | GitHub Actions | ArgoCD |
                Docker | Bash & Python scripting | AWS | Azure | GCP | CI/CD
                Pipelines | Terraform | Logging & Monitoring
                <br />
                <br />
                <strong>Microsoft Certified:</strong> Azure Administrator Associate
                <br /> <br />
                <strong>Cisco Certified Network Associate (CCNA):</strong> Introduction to Networks
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
