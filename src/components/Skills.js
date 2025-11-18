import React from 'react';
import './Skills.css';

const skillCategories = [
  {
    title: 'Programming Languages',
    items: ['JavaScript (ES6+)', 'TypeScript', 'Python', 'Java', 'SQL', 'HTML', 'CSS', 'Bash', 'R'],
  },
  {
    title: 'Frontend',
    items: ['React', 'React Native', 'Vue.js', 'Nuxt.js', 'Tailwind CSS'],
  },
  {
    title: 'Backend',
    items: ['Node.js', 'Express.js', 'Flask', 'RESTful APIs', 'Microservices'],
  },
  {
    title: 'Databases',
    items: ['PostgreSQL', 'MySQL', 'SQLite', 'Redis', 'Elasticsearch'],
  },
  {
    title: 'DevOps & Cloud',
    items: ['AWS (EC2, S3, Lambda)', 'Docker', 'Kubernetes', 'Jenkins', 'GitHub Actions', 'Terraform', 'Ansible', 'Puppet', 'Nginx'],
  },
  {
    title: 'Other Tools',
    items: ['Git', 'Prisma ORM', 'Prometheus', 'Grafana', 'Selenium', 'CI/CD'],
  },
  {
    title: 'Soft Skills',
    items: ['Agile/Scrum', 'Collaboration', 'Problem‑Solving', 'System Design'],
  },
];

const colorPalette = [
  'var(--primary-color)',
  'var(--secondary-color)',
  'var(--accent-color)',
  '#7fba00',
  '#ff9800',
  '#009688',
  '#e91e63',
];

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <h2 className="section-title">Skills</h2>
      <div className="skills-grid">
        {skillCategories.map((category, index) => {
          const color = colorPalette[index % colorPalette.length];
          return (
            <div className="skill-card" key={category.title} style={{ '--accent': color }}>
              <h3 className="skill-title">{category.title}</h3>
              <ul className="skill-list">
                {category.items.map(item => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;