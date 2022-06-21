import React, { useState } from "react";
import logo from "../assets/images/logo.png";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className="text-primary flex text-center justify-center drop-shadow-md w-full items-center content-center  mx-auto  bg-white ">
      <div className="big-screen w-full text-center justify-center hidden md:flex">
        <ul className="flex items-center">
          <li className="p-4">Home</li>
          <li className="p-4">About</li>
        </ul>
        <div className="flex h-24">
          <img
            className="object-scale-down"
            src={logo}
            alt="Uganda Bookings Logo"
          />
        </div>
        <ul className="flex items-center">
          <li className="p-4">Contact Us</li>
          <li className="p-4">Sign Up</li>
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
            <AiOutlineClose
              size={20}
              className="justify-end justify-items-end items-end text-right "
            />
          ) : (
            <AiOutlineMenu
              size={20}
              className="justify-end justify-items-end items-end text-right "
            />
          )}
        </div>
        <div
          className={
            !nav
              ? "fixed left-0 top-0 w-[60%] min-h-screen bg-primary text-white border-r border-r-white ease-in-out duration-500"
              : "fixed left-[-100%] ease-out duration-[800]"
          }
        >
          <ul className="pt-24 uppercase p-4">
            <li className="p-4 border-b border-white-600">Home</li>
            <li className="p-4 border-b border-white-600">About</li>
            <li className="p-4 border-b border-white-600">Contact Us</li>
            <li className="p-4 border-b border-white-600">Sign Up</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
