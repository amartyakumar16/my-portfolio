import React from 'react';
import './Education.css';

const Education = () => {
  return (
    <section id="education" className="education">
      <h2 className="section-title">Education</h2>
      <div className="education-card">
        <h3 className="education-school">University of Petroleum and Energy Studies, Dehradun</h3>
        <p className="education-degree">B.Tech in Computer Science</p>
        <p className="education-period">2021 – 2025</p>
        <p className="education-grade">CGPA: 7.52</p>
        <p className="education-location">Uttarakhand, India</p>
      </div>
    </section>
  );
};

export default Education;