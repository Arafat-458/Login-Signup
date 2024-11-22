import React, { useState } from 'react';
import './Navbar.css';
import { assets } from '../../assets/assets';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: 'home',
    };
  }

  handleMenuClick = (menu) => {
    this.setState({ menu });
  };

  render() {
    const { menu } = this.state;

    return (
      <div className="navbar">
        <img src={assets.logo} alt="" className="logo" />
        <ul className="navbar-menu">
          <li className={menu === 'home' ? 'active' : ''} onClick={() => this.handleMenuClick('home')}>Home</li>
          <li className={menu === 'menu' ? 'active' : ''} onClick={() => this.handleMenuClick('menu')}>Menu</li>
          <li className={menu === 'contact-us' ? 'active' : ''} onClick={() => this.handleMenuClick('contact-us')}>Contact us</li>
        </ul>
        <div className="navbar-right">
          <img src={assets.search_icon} alt="" />
          <div className="navbar-search-icon">
            <img src={assets.basket_icon} alt="" />
            <div className="dot"></div>
          </div>
          <button>sign in</button>
        </div>
      </div>
    );
  }
}

export default Navbar;