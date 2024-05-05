import React, { useContext } from "react";
import { assets } from "../../assets/assets";
import { StoreContext } from "../../Context/StoreContext";

const FoodItem = ({ id, name, price, image, description}) => {
  const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);

  return (
    <div className=" w-full m-auto rounded-md shadow-md animate-fadeIn ">
      <div className=" relative">
        <img className=" w-full rounded-md" src={image} alt="" />
        {!cartItems[id] ? (
          <img
            className=" absolute bottom-4 right-4 w-8 cursor-pointer rounded-full"
            onClick={() => addToCart(id)}
            src={assets.add_icon_white}
          />
        ) : (
          <div className=" absolute bottom-4 right-4 flex items-center justify-center gap-1 bg-white px-2 py-1 rounded-full">
            <img
              onClick={() => removeFromCart(id)}
              src={assets.remove_icon_red}
              alt=""
              className=" w-7 rounded-full cursor-pointer"
            />
            <p className=" text-orange-600 font-semibold">{cartItems[id]}</p>
            <img
              onClick={() => addToCart(id)}
              src={assets.add_icon_green}
              alt=""
              className=" w-7 rounded-full cursor-pointer"
            />
          </div>
        )}
      </div>
      <div>
        <div className=" p-3 pb-0 flex items-center justify-between ">
          <p className=" text-zinc-700 font-semibold">{name}</p>
          <img className=" w-[4.5rem]" src={assets.rating_starts} alt="" />
        </div>
        <div className="p-3 pb-1 pt-0">
          <p className=" text-base text-zinc-500">{description}</p>
        </div>
        <div className="p-3 pb-4 pt-0">
          <p className=" text-orange-500 font-bold">${price}</p>
        </div>
      </div>
    </div>
  );
};

export default FoodItem;
