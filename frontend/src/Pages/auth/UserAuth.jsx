import React, { useState } from "react";
import Input from "../../utils/Input";
import { Link } from "react-router-dom";

const UserAuth = ({ type }) => {
  console.log(type);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className=" h-screen flex flex-col items-center gap-16">
      <div className=" mt-10">
        <h1 className="text-4xl font-gelasio font-bold capitalize  ">
          {type == "Sign-In" ? "Welocme Back" : "Join Tomato Today!"}
        </h1>
      </div>

      <div className=" w-[27rem]">
        <form className="">
          {type != "Sign-In" ? (
            <div className=" py-2">
              <Input
                className=" w-[100%] rounded-md outline-orange-500 transition-all duration-100 p-3 bg-orange-50 pl-12 border border-orange-100 focus:bg-transparent placeholder:text-black"
                type="text"
                value={fullName}
                name="fullName"
                placeholder="Full name"
                onChange={(e) => setFullName(e.target.value)}
              />
            </div>
          ) : (
            ""
          )}
          <div className="py-2">
            <Input
              className=" w-[100%] rounded-md outline-orange-500 transition-all duration-100 p-3 bg-orange-50 pl-12 border border-orange-100 focus:bg-transparent placeholder:text-black"
              type="email"
              name="email"
              value={email}
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="py-2">
            <Input
              className=" w-[100%] rounded-md outline-orange-500 transition-all duration-100 p-3 bg-orange-50 pl-12 border border-orange-100 focus:bg-transparent placeholder:text-black"
              type="password"
              name="password"
              value={password}
              placeholder="Full name"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="flex items-center justify-center py-8">
            <button
              className="px-4 py-2 bg-orange-200 text-gray-700 font-semibold rounded-md"
              type="submit"
            >
              {type.replace("-", " ")}
            </button>
          </div>
          <div className=" flex items-center justify-between font-bold opacity-10">
            <hr className=" w-1/2 border-black" />
            <p className="px-3">OR</p>
            <hr className=" w-1/2 border-black" />
          </div>
          <div className="flex items-center justify-center py-8">
            <button
              className="px-4 py-2 bg-orange-200 text-gray-700 font-semibold rounded-md"
              type="submit"
            >
              Continue with google
            </button>
          </div>
          {type == "Sign-In" ? (
            <div className="flex items-center justify-center gap-1">
              <p className="text-base text-gray-400">Dont't have an account?</p>
              <Link to="/signUp">
                <p className="text-base font-semibold">Create one here...</p>
              </Link>
            </div>
          ) : (
            <div className="flex items-center justify-center gap-1">
              <p className="text-base text-gray-400">Already a member?</p>
              <Link to="/signIn">
                <p className="text-base font-semibold">Sign in here...</p>
              </Link>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default UserAuth;
