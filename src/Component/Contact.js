import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, message } = formData;

    // Construct the WhatsApp message
    const whatsappMessage = `Name: ${name}%0AEmail: ${email}%0AMessage: ${message}`;

    // WhatsApp URL
    const whatsappURL = `https://wa.me/16198610976?text=${whatsappMessage}`;

    // Redirect to WhatsApp
    window.location.href = whatsappURL;
  };

  return (
    <div className="contact-container">

      <h1>Contact Us</h1>
      <div className="page-contact">
        <p>
          Phone: <a href="tel:+16198610976">+1 (619) 861-0976</a>
        </p>
        <p>
          WhatsApp: <a href="https://wa.me/16198610976" target="_blank" rel="noopener noreferrer">+1 (619) 861-0976</a>
        </p>
        <p>
          Email: <a href="mailto:info@example.com">Edouardm1986@gmail.com</a>
        </p>
      </div>

      <form className="contact-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          rows="4"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>

        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
