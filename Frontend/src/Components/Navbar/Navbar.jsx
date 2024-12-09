<<<<<<< HEAD
import React, { useContext, useState } from 'react';
import './Navbar.css';
import { assets } from '../../assets/assets';
import { Link } from 'react-router-dom';
import { StoreContext } from '../../Context/StoreContext';

const Navbar = ({setShowLogin}) => {
  const [menu, setMenu] = useState('home');
  const {getTotalCartAmount} =useContext(StoreContext);

  const handleMenuClick = (menu) => {
    setMenu(menu);
  };
 
  return (
    <div className="navbar">
      <Link to='/'><img src={assets.logo} alt="" className="logo" /></Link>
      <ul className="navbar-menu">
        <Link to='/' className={menu === 'home' ? 'active' : ''} onClick={() => handleMenuClick('home')}>Home</Link>
        <a href='#explore-menu' className={menu === 'menu' ? 'active' : ''} onClick={() => handleMenuClick('menu')}>Menu</a>
        <a href='#footer' className={menu === 'contact-us' ? 'active' : ''} onClick={() => handleMenuClick('contact-us')}>Contact us</a>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="" />
        <div className="navbar-search-icon">
        <Link to='/cart'><img src={assets.basket_icon} alt="" /></Link>
          <div className={getTotalCartAmount()===0?"":"dot"}></div>
        </div>
        <button onClick={()=>setShowLogin(true)}>Sign in</button>
      </div>
    </div>
  );
};

export default Navbar;
   
=======
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
>>>>>>> c450967 (Initial Commit)
