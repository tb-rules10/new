/* eslint-disable no-unused-vars */
import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Onboarding from "../components/Onboarding";
import HomePage from "../components/HomePage";
import { useLoginStatus } from '../utils/LoginStatus'; 

function Home() {

  const isLoggedIn = useLoginStatus();

  return (
    <>
      <Navbar />
      {isLoggedIn ?  <HomePage /> : <Onboarding /> }
    </>
  );
}

export default Home;
