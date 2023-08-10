/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { BsArrowUpRight } from "react-icons/bs";
import { BiUserCircle } from "react-icons/bi";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { AppName, NavItems } from "../data.js";

function Navbar() {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  document.body.classList.add("light");
  return (
    <div className="flex justify-between items-center h-24 mx-auto md:px-12 px-4 bg-light-primary">
      <h1 className="w-full text-4xl whitespace-nowrap font-bold text-light-secondary">
        {AppName}
      </h1>
      <ul className="items-center hidden md:flex w-full justify-evenly text-light-secondary">
        <li className="whitespace-nowrap mx-4 py-1 link">{NavItems[0]}</li>
        <li className="whitespace-nowrap mx-4 py-1 link">{NavItems[1]}</li>
        <li className="whitespace-nowrap mx-4 py-1 link">{NavItems[2]}</li>
      </ul>
      <div className="hidden md:flex group">
        <button className="ml-1 flex justify-between items-center whitespace-nowrap bg-light-secondary transition-all  text-light-primary group-hover:text-light-secondary group-hover:bg-light-primary p-3 rounded-full ease-in-out duration-300 border-transparent border-2 group-hover:border-light-secondary box-border">
          <p className="pr-2">Get Started</p>
          <div className="rounded-full bg-light-primary text-light-secondary group-hover:bg-light-secondary group-hover:text-light-primary p-1 transition-all duration-300">
            <BsArrowUpRight className="transform group-hover:rotate-45 transition-transform duration-500" />
          </div>
        </button>
      </div>
      <div
        onClick={handleNav}
        className="cursor-pointer block md:hidden text-light-secondary"
      >
        {nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
      </div>
      <ul
        className={`fixed top-0 h-full ease-in-out duration-500 w-[60%] border-r border-r-gray-900 bg-light-secondary text-light-primary ${
          nav ? "left-0 " : "left-[-100%]"
        }`}
      >
        <h1 className="w-full mb-8 ml-3 mt-5 text-4xl whitespace-nowrap font-bold">
          {AppName}
        </h1>
        <li className="side-nav-items">{NavItems[0]}</li>
        <li className="side-nav-items">{NavItems[1]}</li>
        <li className="side-nav-items">{NavItems[2]}</li>
        <div
          className={`flex text-light-primary hover:bg-light-hover cursor-pointer start items-center p-4 pl-3 w-[60%] border-y border-gray-600 ease-in-out fixed duration-500 bottom-0 ${
            nav ? "left-0" : "left-[-100%]"
          }`}
        >
          <BiUserCircle size={40} />
          <p className="ml-4">Register / Sign In</p>
        </div>
      </ul>
    </div>
  );
}

export default Navbar;
