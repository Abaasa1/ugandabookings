import React from "react";
import logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <div class="hidden md:grid grid-rows-1 grid-flow-col gap-4 items-center justify-center mx-auto max-w-[1000px] py-5 px-2">
        <div className="block max-w-[400px] ">
          <ul>
            <li>
              <img
                className="object-scale-down h-14"
                src={logo}
                alt="Uganda Bookings Logo"
              />
            </li>
            <li className="mt-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
              ultricies ante sed metus sagittis tincidunt. Ut finibus arcu enim,
              id pretium sapien consequat sed.
            </li>
            <li className="mt-3">All Rights Reserved</li>
          </ul>
        </div>

        <div>
          <ul className="p-4">
            <li className=" font-bold text-primary">Quick Links</li>
            <li>
              {" "}
              <Link to="/">Home</Link>
            </li>
            <li>
              {" "}
              <Link to="/sign-in">Sign In</Link>
            </li>
            <li>
              <Link to="/blogs">Blogs</Link>
            </li>
          </ul>
        </div>
        <div>
          <ul className="p-4">
            <li className=" font-bold text-primary">Company</li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/our-team">Our Team</Link>
            </li>
            <li>
              <Link to="/blogs">Blogs</Link>
            </li>
          </ul>
        </div>
        <div>
          <ul className="p-4">
            <li className=" font-bold text-primary">Resources</li>
            <li>
              <Link to="/terms-and-conditions">Terms and Conditions</Link>
            </li>
            <li>
              <Link to="/experiences">Experiences</Link>
            </li>
            <li>
              <Link to="/blogs">Blogs</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="md:hidden w-full text-center py-5 font-bold text-primary">
        <p>All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
