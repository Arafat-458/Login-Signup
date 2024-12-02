import React from 'react';
import './Navbar.css';
import { assets } from '../../assets/assets';
import { Link } from 'react-router-dom';

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
    const { setShowLogin } = this.props;

    return (
      <div className="navbar">
        <img src={assets.logo} alt="" className="logo" />
        <ul className="navbar-menu">
          <Link to='/' className={menu === 'home' ? 'active' : ''} onClick={() => this.handleMenuClick('home')}>Home</Link>
          <a href='#explore-menu' className={menu === 'menu' ? 'active' : ''} onClick={() => this.handleMenuClick('menu')}>Menu</a>
          <a href='#footer' className={menu === 'contact-us' ? 'active' : ''} onClick={() => this.handleMenuClick('contact-us')}>Contact us</a>
        </ul>
        <div className="navbar-right">
          <img src={assets.search_icon} alt="" />
          <div className="navbar-search-icon">
            <img src={assets.basket_icon} alt="" />
            <div className="dot"></div>
          </div>
          <button onClick={() => setShowLogin(true)}>sign in</button>
        </div>
      </div>
    );
  }
}

export default Navbar;