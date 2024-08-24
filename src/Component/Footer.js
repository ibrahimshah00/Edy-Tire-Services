import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faAddressBook } from '@fortawesome/free-solid-svg-icons'
import '@fortawesome/fontawesome-free/css/all.min.css'; 

const Footer = () => {
  return (
    <footer className="footer" id="contact">
      <div className="footer-content">
        <div className="footer-about">
          <h3>About Edy Tire Service</h3>
        
        </div>
        <div className="footer-contact">
          <h3>Contact Us</h3>
          <p>
    Phone:  
    <a href="tel:+16198610976" className='number'> +1 (619) 861-0976</a>
  </p>
          <a href="/Contact" className='number'>Appointment </a>
       
        </div>
        <div className="footer-social">
          <h3>Follow Us</h3>
          <a href="https://www.facebook.com/profile.php?id=61562467525378">  <i className="fab fa-facebook"></i></a>
          <a href="#"><i className="fab fa-instagram"></i> </a>
          <a href="#"><i className="fab fa-tiktok"></i> </a>
        
        </div>
      </div>
      <p className="footer-copyright">© 2024 Edy Tire Service. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
