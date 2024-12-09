<<<<<<< HEAD
import React, { useContext } from 'react'
import "./FoodItem.css";
import { assets } from '../../assets/assets';
import { StoreContext } from '../../Context/StoreContext';
export const FoodItem = ({id,name,price,image}) => {
    
    const{cartItems,addToCart,removeFromCart,url}=useContext(StoreContext)

return (
    <div className='food-item'>
        <div className="food-item-img-container">
        <img className='food-item-image' src={image} alt="" />

                {!cartItems[id]
                ?<img className='add' onClick={()=>addToCart(id)} src={assets.add_icon_white} alt="" />
                :<div className='food-item-counter'>
                    <img onClick={()=>removeFromCart(id)} src={assets.remove_icon_red} alt="" />
                    <p>{cartItems[id]}</p>
                    <img onClick={()=>addToCart(id)} src={assets.add_icon_green} alt="" />

                </div>   
                }
        </div>
        <div className="food-item-info">
            <div className="food-item-name-rating">
                <p>{name}</p>
                <img src={assets.rating_starts} alt="" />
            </div>
            
            <p className="food-item-price">{price}Tk</p>
        </div>
        </div>
)
}

export default FoodItem
=======
import React, { Component, useContext } from 'react';
import './FoodItem.css';
import { assets } from '../../assets/assets';
import { StoreContext } from '../../Context/StoreContext';

class FoodItem extends Component {
  constructor(props) {
    super(props);
    const { id, name, price, image } = props;
    const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);

    this.state = {
      id,
      name,
      price,
      image,
      cartItems,
      addToCart,
      removeFromCart,
    };
  }

  handleIncrement = () => {
    const { id, addToCart } = this.state;
    addToCart(id);
  };

  handleDecrement = () => {
    const { id, removeFromCart } = this.state;
    removeFromCart(id);
  };

  render() {
    const { id, name, price, image, cartItems } = this.state;

    return (
      <div className='food-item'>
        <div className="food-item-img-container">
          <img className='food-item-image' src={image} alt="" />
          {!cartItems[id] ? (
            <img
              className='add'
              onClick={this.handleIncrement}
              src={assets.add_icon_white}
              alt=""
            />
          ) : (
            <div className='food-item-counter'>
              <img
                onClick={this.handleDecrement}
                src={assets.remove_icon_red}
                alt=""
              />
              <p>{cartItems[id]}</p>
              <img
                onClick={this.handleIncrement}
                src={assets.add_icon_green}
                alt=""
              />
            </div>
          )}
        </div>
        <div className="food-item-info">
          <div className="food-item-name-rating">
            <p>{name}</p>
            <img src={assets.rating_starts} alt="" />
          </div>
          <p className="food-item-price">Price:{price} </p>
        </div>
      </div>
    );
  }
}

export default FoodItem;
>>>>>>> c450967 (Initial Commit)
