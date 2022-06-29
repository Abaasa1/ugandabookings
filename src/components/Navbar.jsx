import React, { useState } from "react";
import logo from "../assets/images/logo.png";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  const handleNavBarClick = () => {
    setNav(!nav);
  };
  return (
    <div className="text-primary flex text-center justify-center drop-shadow-md w-full items-center content-center  mx-auto  bg-white ">
      <div className="big-screen w-full text-center justify-center hidden md:flex">
        <ul className="flex items-center">
          <li className="p-4">
            <Link to="/">Home</Link>
          </li>
          <li className="p-4">
            <Link to="/about">About</Link>
          </li>
        </ul>
        <div className="flex h-24">
          <Link to="/" className="object-scale-down flex h-24">
            <img
              className="object-scale-down"
              src={logo}
              alt="Uganda Bookings Logo"
            />
          </Link>
        </div>
        <ul className="flex items-center">
          <li className="p-4">
            <Link to="/contact-us">Contact Us</Link>
          </li>
          <li className="p-4">
            <Link to="/sign-up">Sign Up</Link>
          </li>
        </ul>
      </div>
      <div className="w-full flex text-left   md:hidden">
        <div className="flex h-16 columns-3xl">
          <img
            className="object-scale-down "
            src={logo}
            alt="Uganda Bookings Logo"
          />
        </div>
        <div
          className="w-full text-right items-center self-center block md:hidden"
          onClick={handleNav}
        >
          {!nav ? (
            <AiOutlineMenu
              size={20}
              className="justify-end justify-items-end items-end text-right "
            />
          ) : (
            <AiOutlineClose
              size={20}
              className="justify-end justify-items-end items-end text-right "
            />
          )}
        </div>
        <div
          className={
            !nav
              ? "fixed left-[-100%] ease-out duration-[800]"
              : "fixed left-0 top-0 w-[60%] min-h-screen bg-primary text-white border-r border-r-white ease-in-out duration-500"
          }
        >
          <ul className="pt-24 uppercase p-4">
            <li className="p-4 border-b border-white-600">
              <Link to="/" onClick={handleNavBarClick}>
                Home
              </Link>
            </li>
            <li className="p-4 border-b border-white-600">
              <Link to="/about" onClick={handleNavBarClick}>
                About
              </Link>
            </li>
            <li className="p-4 border-b border-white-600">
              <Link to="/contact-us" onClick={handleNavBarClick}>
                Contact Us
              </Link>
            </li>
            <li className="p-4 border-b border-white-600">
              <Link to="/sign-up" onClick={handleNavBarClick}>
                Sign Up
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
