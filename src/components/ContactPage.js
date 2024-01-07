// components/ContactPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/main.css';

function ContactPage() {
  return (
    <section className="contact">
      <div className="contact-content">
        <h2>Contact Us</h2>
        <p>Have questions or inquiries? Reach out to us!</p>
        {/* Add a contact form component here */}
        <div className="auth-buttons">
          <Link to="/signup">Sign Up</Link>
          <Link to="/login">Login</Link>
          <Link to="/logout">Logout</Link>
        </div>
      </div>
    </section>
  );
}

export default ContactPage;
