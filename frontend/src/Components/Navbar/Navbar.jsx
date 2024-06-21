import React, { useState } from "react";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menu, setMenu] = useState("Home");

  return (
    <div className="flex items-center justify-between py-6">
      <img className="w-[8rem]" src={assets.logo} alt="" />
      <ul className="flex items-center justify-center gap-10 font-semibold text-gray-700">
        <Link to={"/"}>
          <li
            className={menu === "Home" ? "border-b-2 border-orange-400" : ""}
            onClick={() => setMenu("Home")}
          >
            Home
          </li>
        </Link>
        <Link to={"/cart"}>
          <li
            className={menu === "Menu" ? "border-b-2 border-orange-400" : ""}
            onClick={() => setMenu("Menu")}
          >
            Menu
          </li>
        </Link>
        <Link>
          <li
            className={
              menu === "Mobile app" ? "border-b-2 border-orange-400" : ""
            }
            onClick={() => setMenu("Mobile app")}
          >
            Mobile app
          </li>
        </Link>
        <Link>
          <li
            className={
              menu === "Contact us" ? "border-b-2 border-orange-400" : ""
            }
            onClick={() => setMenu("Contact us")}
          >
            Contact us
          </li>
        </Link>
      </ul>
      <div className="flex items-center justify-center gap-6">
        <div>
          <img
            className="w-[1.5rem] cursor-pointer"
            src={assets.search_icon}
            alt=""
          />
        </div>
        <div className="relative">
          <img
            className="w-[1.5rem] cursor-pointer"
            src={assets.basket_icon}
            alt=""
          />
          <div className="absolute -top-2.5 -right-2 w-3 h-3 rounded-full bg-orange-600"></div>
        </div>
        <Link to={'/signIn'}>
          <button className="px-5 py-2 border border-orange-200 font-semibold text-gray-700 hover:bg-orange-300 rounded-md">
            Sign In
          </button>
        </Link>
        <Link to={'/signUp'}>
          <button className="px-5 py-2 bg-orange-100 font-semibold text-gray-700 hover:bg-orange-300 rounded-md">
            Sign Up
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
