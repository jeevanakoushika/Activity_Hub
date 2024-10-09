import React from 'react';
import '../components/css/footer.css'; // Make sure to create a CSS file for styles

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-icons">
        <a href="#" aria-label="Twitter">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="#" aria-label="Instagram">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="#" aria-label="YouTube">
          <i className="fab fa-youtube"></i>
        </a>
        <a href="#" aria-label="LinkedIn">
          <i className="fab fa-linkedin"></i>
        </a>
      </div>
      <div className="footer-content">
        <div className="footer-section">
          <h4>Events</h4>
          <ul>
            <li>Food, Flutter</li>
            <li>Stand Up Comedy</li>
            <li>Social Service, Word Press</li>
            <li>Photography, Gen AI</li>
            <li>Arts and Crafts</li>
            <li>Game, Web Development</li>
            <li>Dive Into Data Science</li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Clubs</h4>
          <ul>
            <li>GDSC</li>
            <li>Megha, Mayavi</li>
            <li>Mayavi</li>
            <li>Narthana, Swara</li>
            <li>Signup</li>
            <li>Login</li>
            <li>Logout</li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Sports</h4>
          <ul>
            <li>Basket, Throw Ball</li>
            <li>Cricket, Hockey</li>
            <li>Tennis, Table Tennis</li>
            <li>Volley, Baseball</li>
            <li>Badminton</li>
            <li>Yoga, Bowling</li>
            <li>Swimming</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
