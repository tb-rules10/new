/* eslint-disable no-unused-vars */
import {useState, useEffect} from "react";
import { BiUserCircle } from "react-icons/bi";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { AppName, NavItems } from "../data.js";

function SideNavbar() {

  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <>
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
    </>
  );
}

export default SideNavbar;
