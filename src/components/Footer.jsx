import React from "react";
import logo from "../assets/images/logo.png";

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
            <li>Home</li>
            <li>Sign In</li>
            <li>Blogs</li>
          </ul>
        </div>
        <div>
          <ul className="p-4">
            <li className=" font-bold text-primary">Company</li>
            <li>About Us</li>
            <li>Our Team</li>
            <li>Blogs</li>
          </ul>
        </div>
        <div>
          <ul className="p-4">
            <li className=" font-bold text-primary">Resources</li>
            <li>Terms and Conditions</li>
            <li>Sign Up</li>
            <li>Blogs</li>
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
