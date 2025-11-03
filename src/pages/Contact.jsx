// src/pages/Contact.jsx
import React, { useState } from "react";
import InnerBanner from "../components/InnerBanner";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted', formData);
    // Optional: reset form
    // setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="form-section">
      <h2>Send Us a Message</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            required
          />
        </div>
        <input
          type="text"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          placeholder="Subject"
          required
        />
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Message"
          required
        />
        <button type="submit" className="send-btn">SEND MESSAGE</button>
      </form>
    </div>
  );
};

const Contact = () => {
  return (
    <main>
      {/* Breadcrumb Section */}
      <InnerBanner
        title="Contact Us"
        image="images/about/10.png"
        description=""
      />

      {/* Contact Form and Info Section */}
      <section>
        <div className="contact-form-container">
          <ContactForm />

          <div className="contact-info">
            <h3>CONTACT US</h3>
            <h2>Get In Touch!</h2>
            <p>We would love to hear from you.</p>

            {/* Call Us */}
            <div className="contact-detail">
              <img src="/images/phone_icon.svg" alt="Phone" className="contact-icon" />
              <div>
                <strong>Call Us</strong><br />
                416.708.5881
              </div>
            </div>

            {/* Email Us */}
            <div className="contact-detail">
              <img src="/images/email_icon.svg" alt="Email" className="contact-icon" />
              <div>
                <strong>Email Us</strong><br />
                Rajesh.sharmacpa@cloudtaxsolutions.com
              </div>
            </div>

            {/* Office Address */}
            <div className="contact-detail">
              <img src="/images/location_icon.svg" alt="Address" className="contact-icon" />
              <div>
                <strong>Office Address</strong><br />
                111 Ballantyne Boulevard, Vaughan Ontario, Canada<br />
                L3L 0E8
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
