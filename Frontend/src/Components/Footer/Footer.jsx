import React from 'react';
import './Footer.css';
import { assets } from '../../assets/assets';

class Footer extends React.Component {
  render() {
    return (
      <div className="footer" id="footer">
        <div className="footer-content">
          <div className="footer-content-left">
            <img src={assets.logo} alt="" />
            <div className="footer-social-icon">
              <img src={assets.facebook_icon} alt="" />
            </div>
          </div>
          <div className="footer-content-center">
            <h2>Company</h2>
            <ul>
              <li>Home</li>
              <li>About us</li>
              <li>Delivery</li>
              <li>Privacy policy</li>
            </ul>
          </div>
        </div>
        <hr />
        <p className="footer-copyrights">copyrights 2024 foodie.com - All Rights Reserved.</p>
      </div>
    );
  }
}

export default Footer;