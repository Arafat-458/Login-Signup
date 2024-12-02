import React, { Component } from 'react';
import './ExploreMenu.css';
import { menu_list } from '../../assets/assets';

class ExploreMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: props.category || 'All', 
    };
  }

  handleClick = (item) => {
    this.setState({ category: item.menu_name === this.state.category ? 'All' : item.menu_name });
  }

  render() {
    const { category } = this.state;

    return (
      <div className='explore-menu' id='explore-menu'>
        <h1>Explore our menu</h1>
        <p className='explore-menu-text'>Choose from a menu featuring a list of dishes crafted with the best ingredients and expertise. We are offering best food here.Our mission is to satisfy your cravings.</p>
        <div className="explore-menu-list">
          {menu_list.map((item, index) => (
            <div key={index} className='explore-menu-list-item' onClick={() => this.handleClick(item)}>
              <img className={category === item.menu_name ? "active" : ""} src={item.menu_image} alt="" />
              <p>{item.menu_name}</p>
            </div>
          ))}
        </div>
        <hr />
      </div>
    );
  }
}

export default ExploreMenu;