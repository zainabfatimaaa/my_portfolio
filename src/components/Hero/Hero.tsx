import React from 'react';
import { Mail, Linkedin } from 'lucide-react';
import styles from './Hero.module.css';
import profilePic from '../../assets/pic.jpg';

const Hero: React.FC = () => {
  return (
    <section id="about" className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.textContent}>
            <h1 className={styles.title}>
              Hi, I'm <span className={styles.highlight}>Zainab</span>
            </h1>
            <p className={styles.description}>
            I'm a fresh Computer Science graduate from LUMS passionate about building scalable, user-focused applications with a strong foundation in full-stack development, LLM integration, and real-time systems. I enjoy working on products that require both technical depth and strategic thinking, with a growing interest in system design, performance optimization, and product scalability.

Beyond development, I'm drawn to the product lifecycle, especially roles that involve communication, collaboration, and a user-first mindset such as product management and tech consulting. I'm excited to explore opportunities where I can blend my technical skills with a passion for impactful problem-solving.
            </p>
            <div className={styles.skills}>
              <span className={styles.skill}>Full Stack Developer</span>
              <span className={styles.skill}>LLMs Engineer</span>
              <span className={styles.skill}>Product Manager</span>
            </div>
            <div className={styles.buttons}>
              <a href="mailto:zainabfatima.9852@gmail.com" className={styles.primaryButton}>
                <Mail size={20} />
                Get in Touch
              </a>
              <a href="https://linkedin.com/in/zainabfatima-" className={styles.secondaryButton}>
                <Linkedin size={20} />
                LinkedIn
              </a>
            </div>
          </div>
          <div className={styles.imageContainer}>
            <div className={styles.imageWrapper}>
              <div className={styles.imageCircle}>
                <img src={profilePic} alt="Zainab Fatima" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;