import React from 'react';
import styles from '@/Styling/ContactForm.module.css';

function ContactForm() {
  return (
    <div className={styles.container}>
      <div className={styles.formWrapper}>
        <h1 className={styles.heading}>Contact Now</h1>
        <form action="https://api.web3forms.com/submit" method="POST" className={styles.form}>
          <input type="hidden" name="access_key" value="bbd9ab85-940d-478a-b813-b58d2d9d8cbc" required />
          <div className={styles.inputField}>
            <label htmlFor="name" className={styles.label}>First Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your first name"
              required
              className={styles.input}
            />
          </div>
          <div className={styles.inputField}>
            <label htmlFor="email" className={styles.label}>Email Address:</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email address"
              required
              className={styles.input}
            />
          </div>
          <div className={styles.inputField}>
            <label htmlFor="message" className={styles.label}>Your Message:</label>
            <textarea
              id="message"
              name="message"
              placeholder="Type your message here..."
              required
              className={styles.textarea}
            ></textarea>
          </div>
          <button type="submit" className={styles.submitButton}>
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
