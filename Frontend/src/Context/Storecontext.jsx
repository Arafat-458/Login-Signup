


/*import React, { Component, createContext } from 'react';
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

export default StoreContextProvider;*/
import React, { Component, createContext } from "react";
import axios from "axios";

export const StoreContext = createContext(null);

class StoreContextProvider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cartItems: {},
            url: import.meta.env.VITE_API_URL, // Use import.meta.env for Vite
            token: "",
            food_list: []
        };
    }

    addToCart = async (itemId) => {
        this.setState((prevState) => {
            const cartItems = { ...prevState.cartItems };
            if (!cartItems[itemId]) {
                cartItems[itemId] = 1;
            } else {
                cartItems[itemId] += 1;
            }
            return { cartItems };
        });

        if (this.state.token) {
            try {
                await axios.post(`${this.state.url}/api/cart/add`, { itemId }, { headers: { Authorization: `Bearer ${this.state.token}` } });
            } catch (error) {
                console.error("Error adding to cart:", error);
            }
        }
    };

    removeFromCart = async (itemId) => {
        this.setState((prevState) => {
            const cartItems = { ...prevState.cartItems };
            cartItems[itemId] -= 1;
            return { cartItems };
        });

        if (this.state.token) {
            try {
                await axios.post(`${this.state.url}/api/cart/remove`, { itemId }, { headers: { Authorization: `Bearer ${this.state.token}` } });
            } catch (error) {
                console.error("Error removing from cart:", error);
            }
        }
    };

    getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in this.state.cartItems) {
            if (this.state.cartItems[item] > 0) {
                let itemInfo = this.state.food_list.find((product) => product._id === item);
                totalAmount += itemInfo.price * this.state.cartItems[item];
            }
        }
        return totalAmount;
    };

    fetchFoodList = async () => {
        try {
            const response = await axios.get(`${this.state.url}/api/food/list`);
            this.setState({ food_list: response.data.data });
        } catch (error) {
            console.error("Error fetching food list:", error);
        }
    };

    loadCartData = async (token) => {
        try {
            const response = await axios.post(`${this.state.url}/api/cart/get`, {}, { headers: { Authorization: `Bearer ${token}` } });
            this.setState({ cartItems: response.data.cartData });
        } catch (error) {
            console.error("Error loading cart data:", error);
        }
    };

    async componentDidMount() {
        await this.fetchFoodList();
        const storedToken = localStorage.getItem("token");
        if (storedToken) {
            this.setState({ token: storedToken });
            await this.loadCartData(storedToken);
        }
    }

    render() {
        const contextValue = {
            food_list: this.state.food_list,
            cartItems: this.state.cartItems,
            setCartItems: (cartItems) => this.setState({ cartItems }),
            addToCart: this.addToCart,
            removeFromCart: this.removeFromCart,
            getTotalCartAmount: this.getTotalCartAmount,
            url: this.state.url,
            token: this.state.token,
            setToken: (token) => this.setState({ token })
        };

        return (
            <StoreContext.Provider value={contextValue}>
                {this.props.children}
            </StoreContext.Provider>
        );
    }
}

export default StoreContextProvider;