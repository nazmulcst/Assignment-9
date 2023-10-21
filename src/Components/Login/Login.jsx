import { ToastContainer, toast } from "react-toastify";
import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../AuthProvaider/AuthProvaider";

const Login = () => {
  // Initialize Firebase authentication and Google provider
  const auth = getAuth();
  const provider = new GoogleAuthProvider();

  // Get signIn function from AuthContext
  // const { signIn } = useContext(AuthContext);
const {signIn} = useContext(AuthContext)

  // State to hold login errors
  const [error, setError] = useState(null);

  // Get navigation functions and location
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  // Handle Google login
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

  // Handle email/password login
  const handleLogin = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
      // Sign in with email and password
      const result = await signIn(email, password);
      console.log(result.user);

      // Display a successful alert and navigate to the specified location
      toast("Email login successful");
      navigate(from, { replace: true });
    } catch (error) {
      // Log any errors to the console and set an error message
      console.error("Login error:", error);
      setError("Invalid email or password");
    }
  };

  return (
    <div className="w-full max-w-screen-md mx-auto bg-slate-900 p-4 shadow-lg">
      <h1 className="text-center text-4xl font-bold text-blue-600">
        Please Login
      </h1>
      {error && <p className="text-red-500">{error}</p>}
      <form onSubmit={handleLogin} className="card-body">
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
          <label className="label">
            <Link to="#" className="label-text-alt link link-hover text-white">
              Forgot password?
            </Link>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary w-full">Login</button>
        </div>
        <p className="text-white">
          Don't have an account? Please{" "}
          <Link className="text-red-600 ml-3" to="/register">
            Register
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
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default Login;