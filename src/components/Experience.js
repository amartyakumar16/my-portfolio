import React from 'react';
import './Experience.css';

const experiences = [
  {
    company: 'Vizva Consultancy Services',
    role: 'DevOps Engineer',
    location: 'On‑Site',
    period: 'May 2025 – Present',
    responsibilities: [
      'Implemented CI/CD pipelines with Jenkins and GitHub Actions, reducing deployment time by 40%',
      'Automated infrastructure provisioning with Terraform, Ansible and Puppet',
      'Containerized applications with Docker to improve scalability and environment consistency',
      'Managed AWS and DigitalOcean infrastructure to ensure high availability and cost efficiency',
    ],
  },
  {
    company: 'Xebia Technologies',
    role: 'DevOps Engineer Intern',
    location: 'Virtual',
    period: 'June 2024 – July 2024',
    responsibilities: [
      'Developed full‑stack features using the MERN stack, Next.js and Vue.js to enhance user experience',
      'Integrated security tools into CI/CD workflows, reducing vulnerabilities by 30%',
      'Built automated testing scripts with Selenium, reducing manual QA time',
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="experience">
      <h2 className="section-title">Experience</h2>
      <div className="timeline">
        {experiences.map((exp, idx) => (
          <div className="timeline-item" key={exp.company}>
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h3 className="timeline-title">{exp.role} @ {exp.company}</h3>
              <span className="timeline-period">{exp.period} • {exp.location}</span>
              <ul className="timeline-list">
                {exp.responsibilities.map(item => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;