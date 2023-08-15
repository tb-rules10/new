/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useRef } from "react";
import { BsArrowUpRight } from "react-icons/bs";
import { AppName, NavItems } from "../data.js";
import { Link } from 'react-router-dom';
import SideNavbar from "./SideNavbar.jsx";
import { useLoginStatus } from '../utils/LoginStatus'; 
import ProfileMenu from "./ProfileMenu.jsx";

function Navbar() {

  const isLoggedIn = useLoginStatus();

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
        {
          isLoggedIn 
          // ? <div className="flex md:w-20 items-center justify-between cursor-pointer rounded-full hover:bg-gray-300 p-1 active:bg-gray-400" onClick={handleProfileMenu}>
          //   <Avatar src="https://avatars.githubusercontent.com/u/58645688?v=4" alt="avatar" className="border-light-secondary border-[1px] rounded-full p-0.5" />
          //   <span ref={profileDropdown} className="transform transition-transform duration-300">
          //   <HiOutlineChevronDown size={18} className="ml-[-1]"/>
          //   </span>
          // </div>

          ? <ProfileMenu />

          : <Link to="/register">
              <button className="ml-1 flex justify-between items-center whitespace-nowrap bg-light-secondary transition-all  text-light-primary group-hover:text-light-secondary group-hover:bg-light-primary p-3 rounded-full ease-in-out duration-300 border-transparent border-2 group-hover:border-light-secondary box-border">
                <p className="pr-2">Get Started</p>
                <div className="rounded-full bg-light-primary text-light-secondary group-hover:bg-light-secondary group-hover:text-light-primary p-1 transition-all duration-300">
                  <BsArrowUpRight className="transform group-hover:rotate-45 transition-transform duration-500" />
                </div>
              </button>
            </Link>
        }
      </div>
      <SideNavbar />
    </div>
  );
}

export default Navbar;
