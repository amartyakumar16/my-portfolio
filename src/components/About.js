import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <h2 className="section-title">About Me</h2>
      <div className="about-grid">
        <div className="about-text">
          <p>
            I am a passionate DevOps engineer and full‑stack developer with
            experience architecting and delivering modern web applications. My
            journey has been centered around building efficient CI/CD
            pipelines, automating cloud infrastructure and designing scalable
            microservice architectures.
          </p>
          <p>
            With strong foundations in programming and system design, I enjoy
            collaborating with cross‑functional teams to solve problems, reduce
            deployment time and enhance reliability. My goal is to constantly
            learn, innovate and create technology that has a meaningful
            impact.
          </p>
        </div>
        <div className="about-details">
          <ul>
            <li><span className="label">Name:</span> Amartya Kumar</li>
            <li><span className="label">Location:</span> Gurugram, Haryana, India</li>
            <li><span className="label">Degree:</span> B.Tech in Computer Science (UPES, 2021–2025)</li>
            <li><span className="label">Current Role:</span> DevOps Engineer at Vizva Consultancy Services</li>
            <li><span className="label">Interests:</span> DevOps, Cloud, Microservices, Full‑Stack Development</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;