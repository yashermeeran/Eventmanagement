import React, { useState } from "react";
import "./Contact.css";

export default function Contact() {
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault(); // stop page reload
    setShowPopup(true);
  };

  return (
    <>
      {/* ================= HERO SECTION ================= */}
      <section className="contact-hero">
        <img src="./Contact1.jpg" alt="Contact" className="Contact" />
        <div className="Contact-overlay"></div>
        <div className="Contact-content">
          <h1>Contact Us</h1>
        </div>
      </section>

      {/* ================= CONTACT INFO ================= */}
      <section className="contact-head">
        <h3>Get In Touch</h3>
        <h2>Let’s Make Your Events Unforgettable Together!</h2>

        <div className="contact-grid-wrapper">
          <div className="contact-card">
            <h4>Address</h4>
            <p>123 Event St, Celebration City, Country</p>
          </div>

          <div className="contact-card">
            <h4>Let’s Talk</h4>
            <p>+91 81483 00181</p>
            <h4>Email Support</h4>
            <p>yhaser0304@gmail.com</p>
          </div>

          <div className="contact-card">
            <h4>Branch Address</h4>
            <p>Medavakkam, Chennai – 600100</p>
          </div>

          <div className="contact-card">
            <h4>Working Hours</h4>
            <p>Monday – Sunday<br />9:00 AM – 6:00 PM</p>
          </div>
        </div>
      </section>

      {/* ================= FORM SECTION ================= */}
      <section className="Contact-custom">
        <img src="./Contact2.jpg" alt="Contact Form" className="Contactcus" />

        <div className="Contact-customs">
          <h3>We’re Here to Help You</h3>
          <h1>Fill Out Our Contact Form</h1>
        </div>

        <div className="Contact-form">
          <form onSubmit={handleSubmit}>
            <input type="text" placeholder="First Name" required />
            <input type="text" placeholder="Last Name" required />
            <input type="tel" placeholder="Phone Number" required />
            <input type="email" placeholder="Your Email" required />

            <select required>
              <option value="">Select Event Type</option>
              <option>Wedding</option>
              <option>Corporate</option>
              <option>Birthday</option>
              <option>Engagement</option>
            </select>

            <input type="text" placeholder="Subject" required />
            <textarea placeholder="Your Message" required></textarea>

            <button type="submit">Send Message</button>
          </form>
        </div>
      </section>

      {/* ================= SUCCESS POPUP ================= */}
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-box">
            <h2>✅ Success!</h2>
            <p>
              Your form has been submitted successfully. <br />
              Our organizer will call you shortly.
            </p>
            <button onClick={() => setShowPopup(false)}>OK</button>
          </div>
        </div>
      )}

      {/* ================= FOOTER ================= */}
      <footer className="site-footer">
        <div className="footer-container">

          <div className="footer-col">
            <img src="./logo.png" alt="Safa Events" className="footer-logo" />
            <div className="footer-social">
              <i className="fa-brands fa-instagram"></i>
              <i className="fa-brands fa-whatsapp"></i>
              <i className="fa-brands fa-youtube"></i>
            </div>
          </div>

          <div className="footer-col">
            <h3>Our Services</h3>
            <ul>
              <li>Wedding & Birthday Celebrations</li>
              <li>Corporate Events</li>
              <li>Fashion Shows</li>
              <li>Exhibitions & Commercial Shows</li>
              <li>Nightclub & Themed Events</li>
            </ul>
          </div>

          <div className="footer-col">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="/home">Home</a></li>
              <li><a href="/about">About Us</a></li>
              <li><a href="/services">Services</a></li>
              <li><a href="/contact">Contact Us</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h3>Get In Touch</h3>
            <p><i className="fa-solid fa-phone"></i> +91 81483 00181</p>
            <p><i className="fa-solid fa-envelope"></i> yasher0304@gmail.com</p>
          </div>
        </div>

        <div className="footer-bottom">
          © 2025 Safa Events. All Rights Reserved.
        </div>
      </footer>
    </>
  );
}
