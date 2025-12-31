import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <section className="hero">
        <img src="./home.jpg" alt="Event" className="img" />

        <div className="overlay"></div>

        <div className="content">
          <h6>Your Dream Events, Perfectly Planned</h6>
          <h1>
            Making Moments <br /> Unforgettable
          </h1>
        </div>
      </section>
      <section className="about">
        <div className="Second">
          <img src="./Second.jpg" alt="About" />
        </div>
        <div className="secondpara">
          <h6>Who we are</h6>
          <h2>Discover Our Story and Passion for Dream Events</h2>
          <h5>
            Our expert planners have years of experience creating flawless
            events.
          </h5>
          <h4>
            Safa Events is a premier event management company based in Chennai
            that specializes in creating unforgettable experiences for our
            clients.
            <br />
            Our commitment extends beyond event execution; we build lasting
            relationships by delivering unparalleled service.
          </h4>
        </div>
      </section>
     <section className="features-section">
        <div className="feature-card">
          <div className="feature-icon">
            <i className="fa-solid fa-gem"></i>
          </div>
          <h3>Personalized Planning</h3>
          <p>
            Every event is unique, and so is our approach. We craft tailored
            plans to bring your dream event to life.
          </p>
        </div>

        <div className="feature-card">
          <div className="feature-icon">
            <i className="fa-solid fa-heart"></i>
          </div>
          <h3>Creative Vision</h3>
          <p>
            Innovation is at the heart of everything we do. From décor to
            immersive experiences, we inspire.
          </p>
        </div>

        <div className="feature-card">
          <div className="feature-icon">
            <i className="fa-solid fa-layer-group"></i>
          </div>
          <h3>Transparent Pricing</h3>
          <p>
            No hidden costs, no surprises—just honest pricing with clear
            breakdowns.
          </p>
        </div>

        <div className="feature-card">
          <div className="feature-icon">
            <i className="fa-solid fa-user"></i>
          </div>
          <h3>Full Service Support</h3>
          <p>
            From concept to execution, we handle every detail so you enjoy your
            event stress-free.
          </p>
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
