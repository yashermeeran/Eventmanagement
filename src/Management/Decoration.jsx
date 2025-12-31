import React from "react";
import "./Decoration.css";

export default function Decoration() {
  return (
    <>

      <section className="decoration-hero">
        <img src="./Deco.jpg" alt="Decoration" className="img" />
        <div className="Deco-overlay"></div>

        <div className="Deco-content">
          <h1>Decoration</h1>
        </div>
      </section>

      <section className="deco-heading">
        <h3>What we offer</h3>
        <h2 className="Dream">Dream Events Start Here</h2>
      </section>

      <section className="deco-cards">

        <div className="deco-card">
          <img src="./deco1.jpg" alt="" />
          <h4>Wedding & Traditional Ceremonies</h4>
          <p>
            Your love story deserves a celebration as unique and beautiful as
            you are. We design stunning décor and flawless setups that make
            your big day unforgettable.
          </p>
        </div>

        <div className="deco-card">
          <img src="./deco2.jpg" alt="" />
          <h4>Baby & Kids Celebration</h4>
          <p>
            From baby showers to birthdays, we turn joyful milestones into
            unforgettable memories with creative décor and seamless planning.
          </p>
        </div>

        <div className="deco-card">
          <img src="./deco4.jpg" alt="" />
          <h4>Puberty & Family Events</h4>
          <p>
            At Cathy Creations, we believe every milestone in life is worth celebrating in style. From meaningful coming-of-age ceremonies to heartfelt family gatherings, we create stunning décor that beautifully weaves together tradition and contemporary design. Whether you're hosting a puberty ceremony, a milestone anniversary, or a cozy housewarming, our team ensures every detail reflects your story—with grace, care, and impeccable attention to detail.
          </p>
        </div>

        <div className="deco-card">
          <img src="./deco3.jpg" alt="" />
          <h4>Special & Religious Events</h4>
          <p>
            At Cathy Creations, we understand that some moments carry profound cultural and spiritual meaning. From colorful pre-wedding festivities to sacred religious ceremonies, we design décor that not only enhances the atmosphere but also honors the traditions behind each event. With a blend of beauty, respect, and creativity, we bring a sense of reverence and celebration to every special occasion.
          </p>
        </div>
        <div className="deco-custom">
          <img src="custom.jpg" alt="Connect" className="custom" />

          <div className="custom-content">
            <h3>
              Let's Create Magic Together – Partner with Us for Unforgettable Events!
            </h3>

             <button><a href="/Contact" className="custom-btn">Connect Now</a></button>
          </div>
        </div>

      </section>

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

            <p>
              <i className="fa-solid fa-phone"></i>
              +91 81483 00181
            </p>

            <p>
              <i className="fa-solid fa-envelope"></i>
              yasher0304@gmail.com
            </p>
          </div>

        </div>

        <div className="footer-bottom">
          © 2025 Safa Events. All Rights Reserved.
        </div>
      </footer>
    </>
  );
}
