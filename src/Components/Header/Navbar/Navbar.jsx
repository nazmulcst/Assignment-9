import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../AuthProvaider/AuthProvaider";
// import { AuthContext } from "../../AuthProvaider/AuthProvaider";

const Navbar = () => {
  // const { user, logOut } = useContext(AuthContext);
  const {user, logOut} = useContext(AuthContext)

  const handleSingOut = () => {
    logOut()
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const Links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/galleries">Gallery</NavLink>
      </li>
      <li>
        <NavLink to="/blog">Blog</NavLink>
      </li>

      <li>
        <NavLink to="/about">Contact us</NavLink>
      </li>
      <li>
        <NavLink to="/login">Login</NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-[#ffc371] my-2">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <a href=""> {Links}</a>
          </ul>
        </div>
        <h1 className="btn btn-ghost normal-case lg:text-2xl md:text-xl bg-gray-300">
          Event
        </h1>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{Links}</ul>
      </div>
      <div className="navbar-end">
        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
          <div className="w-10 rounded-full">{/* <img src={navPic} /> */}</div>
        </label>

        {user ? (
          <button onClick={handleSingOut} className="btn">
            signOut
          </button>
        ) : (
          <NavLink to="/login" onClick={handleSingOut}>
            <button className="btn">SignIn</button>
          </NavLink>
        )}
      </div>
    </div>
  );
};

export default Navbar;