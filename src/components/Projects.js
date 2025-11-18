import React from 'react';
import './Projects.css';

const projects = [
  {
    title: 'Mentoretalk',
    technologies: ['HTML', 'CSS', 'MongoDB', 'Node', 'React.js', 'AWS'],
    description:
      'Developed a web app connecting users with mentors for personalized career guidance. Designed and deployed a microservice architecture for scalability, integrated AWS for secure session handling and used MongoDB to manage dynamic user data.',
    link: null,
  },
  {
    title: 'E‑commerce Application',
    technologies: ['Spring Boot', 'Docker', 'Apache Kafka'],
    description:
      'Built a scalable e‑commerce platform with microservice architecture including product management, order processing, inventory control and notification services. Implemented with Spring Boot and Docker, resulting in a notable improvement in deployment time and system reliability.',
    link: null,
  },
  {
    title: 'Ed.Tech',
    technologies: ['HTML', 'CSS', 'React.js', 'Jenkins', 'Selenium'],
    description:
      'Developed the front‑end of an education technology platform with interactive lessons, real‑time collaboration tools, personalized dashboards and comprehensive analysis. Designed for scalability to handle a large number of users and data.',
    link: null,
  },
];

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <h2 className="section-title">Projects</h2>
      <div className="projects-grid">
        {projects.map(project => (
          <div className="project-card" key={project.title}>
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <div className="project-tags">
              {project.technologies.map(tech => (
                <span className="project-tag" key={tech}>{tech}</span>
              ))}
            </div>
            {project.link && (
              <a href={project.link} className="btn btn-secondary" target="_blank" rel="noreferrer">
                View Project
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;