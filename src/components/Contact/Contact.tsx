import React, { useState } from 'react';
import { Mail, Phone, Linkedin, MapPin } from 'lucide-react';
import styles from './Contact.module.css';

const Contact: React.FC = () => {
  const [form, setForm] = useState({ firstName: '', lastName: '', email: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });

    if (response.ok) {
      alert('Message sent successfully!');
      setForm({ firstName: '', lastName: '', email: '', message: '' });
    } else {
      alert('Failed to send message. Please try again.');
    }
  };

  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.container}>
        <div className={styles.left}>
          <h2>Get in Touch</h2>
          <p className={styles.intro}>I'd like to hear from you!</p>
          <p className={styles.note}> Whether you have an exciting opportunity, a project to collaborate on, or just want to say hi, I’d love to connect!</p>
          <div className={styles.info}>
            <div className={styles.item}><Mail size={18} /><a href="mailto:zainabfatima.9852@gmail.com">zainabfatima.9852@gmail.com</a></div>
            <div className={styles.item}><Phone size={18} /><a href="tel:+923066194727">+92 306-6194727</a></div>
            <div className={styles.item}><Linkedin size={18} /><a href="https://linkedin.com/in/zainabfatima-">LinkedIn</a></div>
            <div className={styles.item}><MapPin size={18} /><span>Lahore, Pakistan</span></div>
          </div>
        </div>

        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.row}>
            <input name="firstName" value={form.firstName} onChange={handleChange} placeholder="First Name" required />
            <input name="lastName" value={form.lastName} onChange={handleChange} placeholder="Last Name" required />
          </div>
          <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="Email *" required />
          <textarea name="message" rows={4} value={form.message} onChange={handleChange} placeholder="Message" required />
          <button type="submit">Send</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
