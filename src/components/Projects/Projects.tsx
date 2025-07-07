import React from 'react';
import { Github, ExternalLink, Code, ChevronRight } from 'lucide-react';
import { projects } from '../../data/projects';
import styles from './Projects.module.css';

const Projects: React.FC = () => {
  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Technical Projects</h2>
          <p className={styles.subtitle}>Showcasing my technical expertise and problem-solving abilities</p>
        </div>
        
        <div className={styles.grid}>
          {projects.map((project) => (
            <div key={project.id} className={styles.card}>
              <div className={styles.imageContainer}>
                <Code size={48} className={styles.icon} />
              </div>
              
              <div className={styles.content}>
                <div className={styles.cardHeader}>
                  <h3 className={styles.cardTitle}>{project.title}</h3>
                  <span className={styles.duration}>{project.duration}</span>
                </div>
                
                <p className={styles.description}>{project.description}</p>
                
                <div className={styles.technologies}>
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span key={tech} className={styles.tech}>
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className={styles.tech}>
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>
                
                <ul className={styles.highlights}>
                  {project.highlights.slice(0, 2).map((highlight, idx) => (
                    <li key={idx} className={styles.highlight}>
                      <ChevronRight size={16} className={styles.chevron} />
                      {highlight}
                    </li>
                  ))}
                </ul>
                
                <div className={styles.links}>
                  {project.github && (
                    <a href={project.github} className={styles.link}>
                      <Github size={16} />
                      <span>Code</span>
                    </a>
                  )}
                  {project.live && (
                    <a href={project.live} className={`${styles.link} ${styles.liveLink}`}>
                      <ExternalLink size={16} />
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;