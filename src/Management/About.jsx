import React from "react";
import "./About.css";

export default function About() {
  return (
    <>
        <section className="about-hero">
        <img src="./about.jpg" alt="About Safa Events" className="about-img" />
        <div className="about-overlay"></div>

        <div className="about-content">
          <h1>About Us</h1>
        </div>
      </section>

      <section className="secondabout">
        <div className="about-wrapper">

          <div className="about-images">
            <img src="./secondabout.jpg" alt="Event Decoration" />
            <img src="./thirdabout.jpg" alt="Wedding Setup" />
          </div>

          <div className="about-text">
            <h6>Who We Are</h6>
            <h2>Your Event, Our Expertise — A Perfect Celebration!</h2>

            <p>
              Founded in 2014 and headquartered in Chennai, Safa Events is a
              premier event planning and décor company dedicated to curating
              extraordinary experiences. With a deep passion for creativity
              and innovation, we specialize in crafting bespoke events that
              captivate, inspire, and leave a lasting impression.
            </p>

            <p>
              Our team of seasoned professionals works closely with clients to
              understand their vision, preferences, and objectives, ensuring a
              personalized approach to every event. From corporate conferences
              to lavish weddings and private celebrations, we transform ideas
              into reality with meticulous attention to detail.
            </p>

            <p>
              What sets us apart is our unwavering commitment to quality,
              transparency, and client satisfaction. From conceptualization and
              design to logistics and on-site coordination, we handle every
              aspect seamlessly—allowing our clients to enjoy their special
              moments stress-free.
            </p>

            <p>
              With Safa Events, celebrations are more than just gatherings.
              They are beautifully orchestrated experiences that create
              cherished memories and lasting impressions.
            </p>
          </div>

        </div>

        
<section className="about-stats">
  <div className="stats-box">
    <h2>10+</h2>
    <p>Years of Service</p>
  </div>

  <div className="stats-box">
    <h2>1000+</h2>
    <p>Successful Events</p>
  </div>

  <div className="stats-box">
    <h2>500+</h2>
    <p>Ceremonies</p>
  </div>

  <div className="stats-box">
    <h2>1000+</h2>
    <p>Happy Clients</p>
  </div>
</section>

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
              <li><a href="/about">About</a></li>
              <li><a href="/Services">Services</a></li>
              <li><a href="/Contact">Contact</a></li>
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
