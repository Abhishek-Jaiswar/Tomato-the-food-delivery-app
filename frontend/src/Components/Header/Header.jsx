import React, { useState } from "react";

const Header = () => {
  return (
    <div className=" relative h-[34vw] bg-[url('/header_img.png')] bg-contain bg-center bg-no-repeat ">
      <div className=" absolute flex flex-col items-start gap-5 max-w-[50%] bottom-14 left-16">
        <h2 className="text-6xl text-white font-semibold animate-fadeIn">Order Your <span className=" block animate-fadeIn">favourite food here</span></h2>
        <p className="text-[1.1rem] text-gray-100 font-semibold animate-fadeIn">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid eum obcaecati hic cum officia quidem optio quod amet, neque, consequatur eaque! Qui, earum ab quasi tempore animi temporibus optio ipsa?</p>
        <button className="text-gray-600 bg-white font-semibold px-5 py-2 rounded-md animate-pulse">View Menu</button>
      </div>
    </div>
  )
};

export default Header;
