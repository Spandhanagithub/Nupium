import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-row-1">
        <div className="footer-middle">
          <a href="/Copyrights" className="white-link">Copyrights @ 2023 Nupium</a>
        </div>
      </div>
      <div className="footer-row-2">
        <a href="https://nupium.com/" className="white-link" target="_blank" rel="noopener noreferrer">Company Website</a>
        <a href="./Component/PopUpForm" className="white-link" onClick={() => window.open("./Component/PopUpForm")}>
  Query Now
</a>

      </div>
    </footer>
  );
};

export default Footer;
