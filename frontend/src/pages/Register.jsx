import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AppName } from "../data.js";

function Register() {
  return (
    <>
      <div className="grid grid-cols-5 m-auto overscroll-hidden w-screen h-screen">
        <div className="col-span-5 md:col-span-3 ">
          
          <div className="w-[30vw] h-[80vh] m-auto">
          <h1 className="p-3 m-auto  text-3xl whitespace-nowrap font-bold text-light-secondary">
            
          </h1>
          </div>
        </div>
        <div className="md:col-span-2 md:block hidden bg-gray-500">
            <img
                src="https://images.unsplash.com/photo-1596003906949-67221c37965c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
                alt="not-again"
                className="object-cover w-full h-full"
            />
        </div>
      </div>
    </>
  );
}

export default Register;
