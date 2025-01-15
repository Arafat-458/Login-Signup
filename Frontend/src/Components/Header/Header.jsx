/*import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <div className='header'>
        <div className="header-contents">
          <h2>Order your favourite food here</h2>
          <p>Choose from a menu featuring a list of dishes crafted with the best ingredients and expertise. Our mission is to satisfy your cravings.We provide our best service</p>
          <button>View Menu</button>
        </div>
      </div>
    );
  }
}

export default Header;*/
import React from 'react'
import './Header.css'
const Header = () => {
  return (
    <div className='header'>
        <div className='header-contents'>
            <h2>Order your favourite food here</h2>
            <p>Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and culinary expertise.Our mission is to satisfy your carvings and elevate your dining experience, one delicious meal at a time.</p>
            <button>View Menu</button>
        </div>
    </div>
  )
}

export default Header;