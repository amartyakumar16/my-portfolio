import React from 'react';
import './Hero.css';
import heroBg from '../assets/hero-bg.png';

const Hero = () => {
  return (
    <section className="hero" id="hero" style={{ backgroundImage: `url(${heroBg})` }}>
      <div className="overlay">
        <div className="hero-content">
          <h1 className="hero-title">Amartya Kumar</h1>
          <h2 className="hero-subtitle">DevOps Engineer &amp; Full‑Stack Developer</h2>
          <p className="hero-desc">
            DevOps engineer and full‑stack developer with hands‑on experience in
            CI/CD pipelines, cloud infrastructure and scalable web applications.
            Passionate about building systems that are efficient, reliable and
            secure.
          </p>
          <div className="hero-actions">
            <a href="#contact" className="btn btn-primary">Get In Touch</a>
            <a href="/Amartya_Kumar.pdf" className="btn btn-secondary" download>
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;