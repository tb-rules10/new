/* eslint-disable no-unused-vars */
import React from "react";
import Video from "../assets/video2.mp4";
import Image from "../assets/image2.gif";
import { TypeAnimation } from 'react-type-animation';
import { Link } from 'react-router-dom';
import { Button } from "@material-tailwind/react";

function Onboarding() {
  return (
    <div className="mx-auto md:px-28 px-10 flex items-center justify-between h-[80vh]">
      <div className="font-sans">
        <h1 className="font-bold text-[#291528] text-5xl py-2 typewriter">
          {/* Explore, Code, Collaborate: */}
          <TypeAnimation
      sequence={[
        'Explore, Code, Collaborate:',
        3000,
        // 'Systummmmm',
        // 3000, 
      ]}
      repeat={Infinity}
    />


        </h1>
        <h1 className=" text-5xl py-2 text-[#3A3E3B]">Your Open Source</h1>
        <h1 className="text-5xl text-[#3A3E3B] py-2">
          <b className="text-[#291528]">DSA</b> Hub
        </h1>

        

        <div className="flex my-4 gap-3">
        <Button className="w-28 my-4 bg-light-secondary hover:bg-[#000300] normal-case font-normal text-md" >
          <Link to="/register" >Register</Link>
        </Button>
        <Button variant="outlined" className="w-28 mr-2 my-4 normal-case font-normal text-md" >
          <Link to="/login" >Sign In</Link>
        </Button>
          {/* <button className="w-28 mr-2 my-4 whitespace-nowrap bg-light-secondary text-light-primary p-3 rounded-xl ease-in-out duration-300  hover:bg-[#000300]">
            <Link to="/register" >Register</Link>
          </button>
          <button className="w-28 ml-2 my-4 whitespace-nowrap border-light-secondary text-light-secondary p-3 rounded-xl ease-in-out duration-300 border-2 box-border transform hover:scale-x-110 hover:bg-white">
            <p>Sign In</p>
          </button> */}
        </div>
      </div>
      <div>
        <img src={Image} alt="not-again" className="h-[50vh]" />
      </div>
    </div>
  );
}

export default Onboarding;
