<<<<<<< HEAD
import React, { useContext } from "react";
import "./FoodDisplay.css";
import { StoreContext } from "../../Context/StoreContext";
import FoodItem from '../FoodItem/FoodItem';


export const FoodDisplay = ({category}) => {
  const { food_list } = useContext(StoreContext);
  return (
    <div className="food-display" id="food-display">
      <h2>Top dishes</h2>
      <div className="food-display-list">
        {food_list.map((item, index) => {
            if(category==="All"||category===item.category){
                return (
                  <FoodItem
                    key={index}
                    id={item._id}
                    name={item.name}
                    
                    image={item.image}
                    price={item.price}
                  />
                );
            }
          
        })}
      </div>
    </div>
  );
};

export default FoodDisplay
=======

import React, { Component, useContext } from 'react';
import './FoodDisplay.css';
import { StoreContext } from '../../Context/StoreContext';
import FoodItem from '../FoodItem/FoodItem';

class FoodDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filteredFoodList: [], // Initialize filtered food list state
    };
  }

  componentDidMount() {
    const { food_list } = useContext(StoreContext); // Access food_list from context
    this.setState({ filteredFoodList: food_list }); // Set initial filtered list
  }

  componentDidUpdate(prevProps, prevState) {
    const { category } = this.props; // Get category from props
    const { food_list } = useContext(StoreContext); // Access food_list from context

    // Update filtered list based on category change or food list change
    if (category !== prevProps.category || food_list !== prevState.food_list) {
      const filteredList = food_list.filter((item) => {
        return category === 'All' || category === item.category;
      });
      this.setState({ filteredFoodList: filteredList });
    }
  }

  render() {
    const { filteredFoodList } = this.state;

    return (
      <div className='food-display' id='food-display'>
        <h2>Best Foods Near You</h2>
        <div className="food-display-list">
          {filteredFoodList.map((item, index) => {
            return (
              <FoodItem
                key={index}
                id={item._id}
                name={item.name}
                price={item.price}
                image={item.image}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default FoodDisplay;
>>>>>>> c450967 (Initial Commit)
