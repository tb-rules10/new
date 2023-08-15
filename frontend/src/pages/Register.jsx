/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Input, Button, Typography } from "@material-tailwind/react";
import {ToastContainer, toast} from 'react-toastify';
import axios from 'axios';
import { registerRoute } from '../utils/APIRoutes';
import 'react-toastify/dist/ReactToastify.css';

function Register() {

  const navigate = useNavigate();
  const toastOptions = {
    position: "bottom-right",
    autoClose: 3000,
    pauseOnHover: true,
    draggable: true,
    theme: "light",
    // theme: "dark",
  };
  const showError = (message) => {
    toast.error(message, toastOptions);
  };

  const [values, setValues] = useState({
    firstname: "",
    lastname: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (event) => {
    console.log(event.target);
    console.log(values);
    setValues({...values, [event.target.name]: event.target.value});
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if(handleValidation()){
      const {firstname, lastname, username, email, password} = values;
      const {data} = await axios.post(registerRoute, {
        firstname, lastname, username, email, password,
      });
      if(data.status === false){
        showError(data.message);
      }
      if (data.status === true) {
        localStorage.setItem(import.meta.env.VITE_LOCALHOST_KEY,JSON.stringify(data.user));
        navigate('/');
      }
    }
  };

  const handleValidation = () => {
    const { firstname, lastname, username, email, password, confirmPassword } = values;
    const isValidPassword = /^(?=.*[a-zA-Z])(?=.*\d)[A-Za-z\d]{6,}$/;
    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValidUsername = /^[a-zA-Z0-9-]+$/;
    if (password !== confirmPassword) {
      showError("Passwords do not match.");
    } else if (username.length < 4) {
      showError("Username should have at least 4 characters.");
    } else if (!isValidUsername.test(username)) {
      showError("Username should only contain letters and numbers.");
    } else if (firstname.length < 4) {
      showError("First name should have at least 4 characters.");
    } else if (lastname.length < 4) {
      showError("Last name should have at least 4 characters.");
    // } else if (!isValidPassword.test(password)) {
    //   showError("Password should have at least 6 characters, including a letter and a digit.");
    }  else if (password.length < 6) {
      showError("Password should have at least 6 characters.");
    } else if (!isValidEmail.test(email)) {
      showError("Please enter a valid email address.");
    } else {
      return true;
    }
    return false; 
  };

  return (
    <>
      <div className="grid grid-cols-5 m-auto overflow-hidden w-screen h-screen">
        <div className="col-span-5 md:col-span-3 flex flex-col justify-center items-center">
          <h1 className="w-[70vw] md:w-[50vw] text-4xl text-left whitespace-nowrap font-bold text-light-secondary">
            Create an account
          </h1>
          <form onSubmit={(event) => handleSubmit(event)} className="w-[70vw] md:w-[50vw] [&>*]:my-4 ">
            <div className="sm:flex [&>*]:my-4 sm:[&>*]:my-0 gap-3 [&>*]:min-w-0">
              <Input label="FirstName" name="firstname" onChange={(e) => handleChange(e)} />
              <Input label="LastName" name="lastname" onChange={(e) => handleChange(e)} />
            </div>
            <Input label="Email Address" name="email" onChange={(e) => handleChange(e)} />
            <Input label="Username" name="username" onChange={(e) => handleChange(e)} />
            <Input label="Password" name="password" type="password" onChange={(e) => handleChange(e)} />
            <Input label="Confirm Password" name="confirmPassword" type="password" onChange={(e) => handleChange(e)} />
            <Button variant="filled" fullWidth type="submit">
              Sign Up
            </Button>
            <Button fullWidth size="sm" variant="outlined" color="blue-gray" className="flex items-center justify-between mb-0" >
                <img src="https://github.com/tb-rules10/Moodify/blob/main/assets/images/google-icon.png?raw=true" alt="metamask" className="h-6 w-6" />
                Continue with Google
                <img src="" alt="metamask" className="h-6 w-6 invisible" />
              </Button>
              <Typography variant="small" color="gray" className="mt-4 text-center gap-1 font-normal"> 
                Already have an account? <Link to="/login" className="font-bold underline hover:text-black">Sign In</Link>
              </Typography>
          </form>
        </div>
        <div className="md:col-span-2 md:block hidden bg-gray-500 ">
          <img
            // src="https://wallpaperaccess.com/full/5673719.jpg"
            src="https://images8.alphacoders.com/113/1136157.png"
            // src=""
            // src=""
            alt="not-again"
            className="object-cover w-full h-full"
          />
        </div>
      </div>
      <ToastContainer />
    </>
  );
}

export default Register;
