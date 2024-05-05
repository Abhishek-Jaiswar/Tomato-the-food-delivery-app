import React from "react";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <>
      <div className=" flex items-between gap-10 p-7 px-10 bg-[#323232]">
        <div className=" flex flex-col gap-3">
          <img className="w-32" src={assets.logo} alt="" />
          <p className="text-slate-200 w-[50%]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque,
            maxime? Ipsa vero incidunt unde, esse iure accusamus molestiae
            quisquam nostrum.
          </p>
          <div className="flex items-center justify-start gap-5">
            <img className=" w-10" src={assets.facebook_icon} alt="" />
            <img className=" w-10" src={assets.linkedin_icon} alt="" />
            <img className=" w-10" src={assets.twitter_icon} alt="" />
          </div>
        </div>
        <div>
          <h2 className="text-2xl text-white font-semibold">Company</h2>
          <ul className="text-white">
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl text-white font-semibold">Get in touch</h2>
          <ul className="text-white">
            <li>+12 989 989 989</li>
            <li>tomato@support.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className=" bg-[#323232] text-center text-white p-3" >Copyright 2024 © Tomato.com All rights reserved</p>
    </>
  );
};

export default Footer;
