import React, { useState } from "react";
import Header from "../../Components/Header/Header";
import ExploreMenu from "../../Components/ExploreMenu/ExploreMenu";
import FoodDisplay from "../../Components/FoodDisplay/FoodDisplay";

const Home = () => {
  const [category, setCategory] = useState();

  return (
    <div>
      <div className="app">
        <Header />
      </div>
      <div className="app">
        <ExploreMenu category={category} setCategory={setCategory} />
      </div>
      <div className="app">
        <FoodDisplay category={category} />
      </div>
    </div>
  );
};

export default Home;
