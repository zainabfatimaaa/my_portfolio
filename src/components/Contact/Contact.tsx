import React from 'react';
import { Mail, Phone, Linkedin, MapPin } from 'lucide-react';
import styles from './Contact.module.css';

const Contact: React.FC = () => {
  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.container}>
        <div className={styles.left}>
          <h2>Let’s Connect</h2>
          <p className={styles.intro}>I'd love to hear from you!</p>
          <p className={styles.note}>
            Whether it’s an opportunity to collaborate, a freelance project, or just a quick hello — feel free to reach out!
          </p>
        </div>

        <div className={styles.right}>
          <div className={styles.info}>
            <div className={styles.item}>
              <Mail size={18} />
              <a href="mailto:zainabfatima.9852@gmail.com">zainabfatima.9852@gmail.com</a>
            </div>
            <div className={styles.item}>
              <Phone size={18} />
              <a href="tel:+923066194727">+92 306-6194727</a>
            </div>
            <div className={styles.item}>
              <Linkedin size={18} />
              <a href="https://linkedin.com/in/zainabfatima-" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </div>
            <div className={styles.item}>
              <MapPin size={18} />
              <span>Lahore, Pakistan</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
