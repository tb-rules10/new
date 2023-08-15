/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Input, Button, Typography } from "@material-tailwind/react";
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { loginRoute } from '../utils/APIRoutes';

function Login() {

  const navigate = useNavigate();
  const toastOptions = {
    position: "bottom-right",
    autoClose: 3000,
    pauseOnHover: true,
    draggable: true,
    // theme: "light",
    theme: "dark",
  };
  const showError = (message) => {
    toast.error(message, toastOptions);
  };

  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    setValues({...values, [event.target.name]: event.target.value});
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if(handleValidation()){
      const {email, password} = values;
      const {data} = await axios.post(loginRoute, {
        email, password,
      });
      if(data.status === false){
        toast.error(data.message, toastOptions);
      }
      if (data.status === true) {
        localStorage.setItem(import.meta.env.VITE_APP_LOCALHOST_KEY,JSON.stringify(data.user));
        navigate('/');
      }
    }
  };

  const handleValidation = () => {
    const {email, password} = values;
    const isValidPassword = /^(?=.*[a-zA-Z])(?=.*\d)[A-Za-z\d]{6,}$/;
    if (email.length < 4) {
    showError("Username or Email should have at least 4 characters.");
    } else if (password.length < 6) {
      showError("Password should have at least 6 characters.");
    // } else if (!isValidPassword.test(password)) {
    //   showError("Password should have at least 6 characters, including a letter and a digit.");
    }else {
      return true;
    }
    return false;
  };

  return (
    <>
      <div className="grid grid-cols-5 m-auto overflow-hidden w-screen h-screen">
        <div className="col-span-5 md:col-span-3 flex flex-col justify-center items-center">
          <h1 className="w-[70vw] md:w-[30vw] text-4xl text-left whitespace-nowrap font-bold text-light-secondary">
            Welcome back
          </h1>
          <form onSubmit={(event) => handleSubmit(event)} className="w-[70vw] md:w-[30vw] [&>*]:my-5 ">
            <Input label="Username or Email" name="email" onChange={(e) => handleChange(e)} />
            <Input label="Password" name="password" type="password" onChange={(e) => handleChange(e)} />
            <Button variant="filled" fullWidth type="submit">
              Sign In
            </Button>
            <Button fullWidth size="sm" variant="outlined" color="blue-gray" className="flex items-center justify-between mb-0" >
                <img src="https://github.com/tb-rules10/Moodify/blob/main/assets/images/google-icon.png?raw=true" alt="metamask" className="h-6 w-6" />
                Continue with Google
                <img src="" alt="metamask" className="h-6 w-6 invisible" />
              </Button>
              <Typography variant="small" color="gray" className="mt-4 text-center gap-1 font-normal"> 
                Don&apos;t have an account? <Link to="/register" className="font-bold underline hover:text-black">Sign Up</Link>
              </Typography>
          </form>
        </div>
        <div className="md:col-span-2 md:block hidden bg-gray-500 ">
          <img
            src="https://images8.alphacoders.com/113/1136157.png"
            alt="not-again"
            className="object-cover w-full h-full"
          />
        </div>
      </div>
      <ToastContainer />
    </>
  );
}

export default Login;
