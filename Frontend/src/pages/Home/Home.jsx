import React, { useState } from 'react';
import './Home.css';
import Header from '../../Components/Header/Header';
<<<<<<< HEAD
import ExploreMenu from '../../Components/ExploreMenu/ExploreMenu';
import FoodDisplay from '../../Components/FoodDisplay/FoodDisplay';

function Home() {
=======
import ExploreMenu from '../../Components/ExploreMenu/exploreMenu';
import FoodDisplay from '../../Components/FoodDisplay/FoodDisplay';


const Home = () =>  {
>>>>>>> c450967 (Initial Commit)
  const [category, setCategory] = useState("All");

  return (
    <div>
      <Header />
      <ExploreMenu category={category} setCategory={setCategory} />
<<<<<<< HEAD
      <FoodDisplay category={category}/>
=======
      <FoodDisplay category={category} />
>>>>>>> c450967 (Initial Commit)
    </div>
  );
}

export default Home;