


import React, { Component, createContext } from 'react';
import { food_list } from '../assets/assets';

export const StoreContext = createContext(null);

class StoreContextProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      food_list,
      cartItems: {},
    };
  }

  addToCart = (itemId) => {
    const { cartItems } = this.state;
    if (!cartItems[itemId]) {
      this.setState({
        cartItems: { ...cartItems, [itemId]: 1 },
      });
    } else {
      this.setState({
        cartItems: { ...cartItems, [itemId]: cartItems[itemId] + 1 },
      });
    }
  };

  removeFromCart = (itemId) => {
    const { cartItems } = this.state;
    if (cartItems[itemId] > 0) {
      this.setState({
        cartItems: { ...cartItems, [itemId]: cartItems[itemId] - 1 },
      });
    }
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.cartItems !== this.state.cartItems) {
      console.log(this.state.cartItems);
    }
  }

  render() {
    const ContextValue = {
      food_list,
      cartItems: this.state.cartItems,
      addToCart: this.addToCart,
      removeFromCart: this.removeFromCart,
    };

    return (
      <StoreContext.Provider value={ContextValue}>
        {this.props.children}
      </StoreContext.Provider>
    );
  }
}

export default StoreContextProvider;