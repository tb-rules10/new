/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Input, Button, Typography } from "@material-tailwind/react";
import {ToastContainer, toast} from 'react-toastify';
import axios from 'axios';
import { loginRoute } from '../utils/APIRoutes';

function Login() {

  const navigate = useNavigate();
  const toastOptions = {
    position: "bottom-right",
    autoClose: 3000,
    pauseOnHover: true,
    draggable: true,
    theme: "light",
    // theme: "dark",
  };

  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    console.log(event.target);
    console.log(values);
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
        // alert(data.message);
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
    if (email.length <= 3) {
      toast.error(
        "email should be greater than 3 characters.",
        toastOptions
      );
      return false;
    } else if (password.length < 8) {
      toast.error(
        "Password should be equal or greater than 8 characters.",
        toastOptions
      );
      return false;
    }
    return true;
  };

  return (
    <>
      <div className="grid grid-cols-5 m-auto overflow-hidden w-screen h-screen">
        <div className="col-span-5 md:col-span-3 flex flex-col justify-center items-center">
          <h1 className="w-[70vw] md:w-[30vw] text-4xl text-left whitespace-nowrap font-bold text-light-secondary">
            Welcome back
          </h1>
          <form onSubmit={(event) => handleSubmit(event)} className="w-[70vw] md:w-[30vw] [&>*]:my-5 ">
            <Input label="Email" name="email" onChange={(e) => handleChange(e)} />
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
    </>
  );
}

export default Login;
