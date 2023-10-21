import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../AuthProvaider/AuthProvaider";

const Register = () => {
 
  const {createUser} = useContext(AuthContext)
  const [passwordError, setPasswordError] = useState("");
  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  const handleGoogleLogin = async () => {
    try {
      // Sign in with Google and display a successful alert
      await signInWithPopup(auth, provider);
      toast("Google login successful");
    } catch (error) {
      // Log any errors to the console
      console.error("Google Login error:", error);
    }
  };

  const handleRegister = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const name = e.target.name.value;

    // Password validation
    if (password.length < 6) {
      setPasswordError("Password must be at least 6 characters long.");
      return;
    }

    if (!/[A-Z]/.test(password)) {
      setPasswordError("Password must contain at least one capital letter.");
      return;
    }

    if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
      setPasswordError("Password must contain at least one special character.");
      return;
    }

    // Clear previous password error
    setPasswordError("");

    // Create user
    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        // Set success message
        toast("Registration successful!");
        // navigate("/login");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="w-full max-w-screen-md mx-auto bg-slate-900 p-4 shadow-lg">
      <h1 className="text-center text-4xl font-bold text-blue-600">
        Please Register
      </h1>
      <form onSubmit={handleRegister} className="card-body ">
        <div className="form-control mb-4">
          <label className="label text-white">
            <span>Name</span>
          </label>
          <input
            type="text"
            placeholder="your name"
            name="name"
            className="input input-bordered w-full"
            required
          />
        </div>
        <div className="form-control mb-4">
          <label className="label text-white">
            <span>Email</span>
          </label>
          <input
            type="email"
            placeholder="Email"
            name="email"
            className="input input-bordered w-full"
            required
          />
        </div>
        <div className="form-control mb-4">
          <label className="label text-white">
            <span>Password</span>
          </label>
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="input input-bordered w-full"
            required
          />
          {passwordError && <p className="text-red-600">{passwordError}</p>}
          <label className="label">
            <a href="#" className="label-text-alt link link-hover text-white">
              Forgot password?
            </a>
          </label>
        </div>
        <ToastContainer position="top-center" autoClose={1500} />
        <div className="form-control mt-6">
          <button className="btn btn-primary w-full">Register</button>
        </div>
        <p className="text-white">
          Already have an account? Please{" "}
          <Link className="text-red-600 ml-2" to="/login">
            Login
          </Link>
        </p>
        <button
          onClick={handleGoogleLogin}
          className="btn btn-outline border-t-pink-500 bg-red-500"
        >
          <FaGoogle></FaGoogle>
          Google
        </button>
      </form>
    </div>
  );
};

export default Register;
