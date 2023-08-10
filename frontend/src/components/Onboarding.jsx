/* eslint-disable no-unused-vars */
import React from 'react'
import Video from "../assets/video2.mp4";
import Image from "../assets/image2.gif";

function Onboarding() {
  return (
    <div className="mx-auto md:px-28 px-10 flex items-center justify-between h-[80vh]">
        <div className="font-sans">
          <h1 className="font-bold text-5xl py-2 typewriter">
            Explore, Code, Organize:
          </h1>
          <h1 className=" text-5xl py-2">Your Open Source</h1>
          <h1 className="text-5xl py-2">
            <b>DSA</b> Hub
          </h1>

          <div className="flex my-4">
            <button className="w-28 mr-2 my-4 whitespace-nowrap bg-light-secondary text-light-primary p-3 rounded-xl ease-in-out duration-300 hover:scale-105 ">
              <p>Register</p>
            </button>
            <button className="w-28 ml-2 my-4 whitespace-nowrap border-light-secondary text-light-secondary p-3 rounded-xl ease-in-out duration-300 border-2 box-border transform hover:scale-105">
              <p>Login</p>
            </button>
          </div>
        </div>
        <div>
          <img src={Image} alt="not-again" className="h-[50vh]" />
        </div>
      </div>
  )
}

export default Onboarding
