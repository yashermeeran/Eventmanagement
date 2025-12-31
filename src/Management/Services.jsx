import React, { useEffect } from "react";
import "./Service.css";

export default function Services() {
  useEffect(() => {
    const cards = document.querySelectorAll(".card-service");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.2 }
    );

    cards.forEach((card) => observer.observe(card));
  }, []);

  return (
    <>
      <section className="service-hero">
        <img src="./Service.jpg" alt="Service" className="Serviceimg" />
        <div className="Service-overlay"></div>
        <div className="Service-content">
          <h1>Our Services</h1>
        </div>
      </section>

   
      <section className="Ser-head">
        <h3>What we offer</h3>
        <h2>Lets Explore Our Services</h2>

 
        <div className="service-grid">
          <div className="card-service">
            <img src="./light.jpg" alt="" />
            <h4>Lightings</h4>
            <p>
              We offer expertly curated lighting solutions that transform your
              venue into a mesmerizing visual experience.
            </p>
          </div>

          <div className="card-service">
            <img src="./photo.jpg" alt="" />
            <h4>Photography</h4>
            <p>
              Capture your most cherished moments with professional photography
              and cinematic videography.
            </p>
          </div>

          <div className="card-service">
            <img src="./funzone.jpg" alt="" />
            <h4>Fun Zone</h4>
            <p>
              From kids play areas to interactive games, we bring joy and
              excitement for all age groups.
            </p>
          </div>

          <div className="card-service">
            <img src="./catring.jpg" alt="" />
            <h4>Catering</h4>
            <p>
              Delicious menus, elegant presentation, and unforgettable taste
              crafted for your event.
            </p>
          </div>

          <div className="card-service">
            <img src="./dance.jpg" alt="" />
            <h4>Dance</h4>
            <p>
              Professional dance performances that add energy, elegance, and
              entertainment to your event.
            </p>
          </div>

          <div className="card-service">
            <img src="./Dj.jpg" alt="" />
            <h4>DJ</h4>
            <p>
              High-energy DJs with premium sound systems to keep your celebration
              alive.
            </p>
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
