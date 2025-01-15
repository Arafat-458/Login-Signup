import React, { useContext } from 'react';
import './FoodDisplay.css';

import { StoreContext } from '../../Context/StoreContext';
import FoodItems from 'c:/Users/DELL/Foodie/Frontend/src/Components/FoodItem/FoodItems.jsx';

const FoodDisplay = ({ category }) => {
    const { food_list } = useContext(StoreContext);

    return (
        <div className='food-display' id='food-display'>
            <h2>Top dishes near you</h2>
            <div className="food-display-list">
                {food_list && food_list.length > 0 ? (
                    food_list.map((item, index) => {
                        if (category === "All" || category === item.category) {
                            return <FoodItems key={index} item={item} />;
                        }
                        return null;
                    })
                ) : (
                    <p>No food items available</p>
                )}
            </div>
        </div>
    );
};

export default FoodDisplay;