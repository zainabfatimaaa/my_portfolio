import React from 'react';
import styles from './Header.module.css';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <nav className={styles.nav}>
          <div className={styles.logo}>Zainab Fatima</div>
          <div className={styles.navLinks}>
            <a href="#about" className={styles.navLink}>About</a>
            <a href="#projects" className={styles.navLink}>Projects</a>
            <a href="#experience" className={styles.navLink}>Experience</a>
            <a href="#contact" className={styles.navLink}>Contact</a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
