import React, { useContext } from "react";
import { StoreContext } from "../../Context/StoreContext";
import FoodItem from "../FoodItem/FoodItem";

const FoodDisplay = ({ category = "All" }) => {
  const { food_list } = useContext(StoreContext);
  return (
    <div className="py-5">
      <h2 className=" text-gray-700 text-3xl font-semibold pb-5">
        Top dishes near you
      </h2>
      <div className="grid grid-cols-4 gap-10">
        {food_list.map((items, index) => {
          if (category === "All" || category === items.category) {
            return (
              <div key={index} className="">
                <FoodItem
                  key={index}
                  id={items._id}
                  price={items.price}
                  name={items.name}
                  description={items.description}
                  image={items.image}
                />
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default FoodDisplay;
