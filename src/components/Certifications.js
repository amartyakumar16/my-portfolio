import React from 'react';
import './Certifications.css';

const certifications = [
  {
    title: 'AWS Academy Graduate – Microservices and CI/CD Pipeline Builder',
    icon: '🎓',
  },
  {
    title: 'AWS Academy Graduate – Cloud Foundations',
    icon: '🎓',
  },
  {
    title: 'Xe‑Architect Certification – Xebia Academic Alliance (2024)',
    icon: '📜',
  },
   {
    title: 'AWS Academy Graduate – Cloud Foundations',
    icon: '🎓',
  },
  {
    title: 'First Runner Up – Intra Volleyball Tournament, UPES',
    icon: '🏆',
  },
];

const Certifications = () => {
  return (
    <section id="certifications" className="certifications">
      <h2 className="section-title">Certifications &amp; Achievements</h2>
      <ul className="certification-list">
        {certifications.map(item => (
          <li key={item.title} className="certification-item">
            <span className="certification-icon">{item.icon}</span>
            <span>{item.title}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Certifications;
