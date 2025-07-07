import React from 'react';
import { Briefcase, Calendar, ChevronRight } from 'lucide-react';
import { experiences } from '../../data/experience';
import styles from './Experience.module.css';

const Experience: React.FC = () => {
  return (
    <section id="experience" className={styles.experience}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Work Experience</h2>
          <p className={styles.subtitle}>Building expertise through diverse internship experiences</p>
        </div>
        
        <div className={styles.timeline}>
          {experiences.map((exp) => (
            <div key={exp.id} className={styles.card}>
              <div className={styles.content}>
                <div className={styles.iconContainer}>
                  <div className={styles.icon}>
                    <Briefcase size={24} />
                  </div>
                </div>
                
                <div className={styles.details}>
                  <div className={styles.cardHeader}>
                    <div>
                      <h3 className={styles.position}>{exp.position}</h3>
                      <p className={styles.company}>{exp.company}</p>
                    </div>
                    <div className={styles.duration}>
                      <Calendar size={16} />
                      <span>{exp.duration}</span>
                    </div>
                  </div>
                  
                  <ul className={styles.achievements}>
                    {exp.achievements.map((achievement, idx) => (
                      <li key={idx} className={styles.achievement}>
                        <ChevronRight size={16} className={styles.chevron} />
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;