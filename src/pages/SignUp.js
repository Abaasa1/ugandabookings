import React from "react";
import ugandaPicTwo from "../assets/images/uganda2.jpeg";
import logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";
import { AiOutlineArrowRight } from "react-icons/ai";

export default function SignUp() {
  return (
    <div className="grid grid-cols-2 gap-4 h-[100vh]  p-4 ">
      <div className=" w-[80%] justify-self-center">
        <div className=" w-[100%] text-center">
          <Link to="/" className=" h-14 mx-auto inline-block text-center">
            <img
              className="object-scale-down h-14 mx-auto"
              src={logo}
              alt="Uganda Bookings Logo"
            />
          </Link>
          <div></div>
          <p className=" float-left text-[1.5rem]">Sign Up</p>
          <div className="float-right">
            <p className=" float-left text-[1rem] mt-3 pr-1">Back Home</p>

            <AiOutlineArrowRight className="float-right mt-4" />
          </div>
        </div>
        <div className=" clear-both"></div>
        <br></br>

        <div>
          <p>
            If you already have an account you can{" "}
            <a href="/sign-in" className="text-primary font-bold">
              Login Here
            </a>
          </p>
        </div>
        <form class="mt-8 space-y-6" action="#" method="POST">
          <div className="">
            <label className=" block text-left ">Email</label>
            <i class="fa fa-facebook"></i>
            <input
              name="email"
              type="Email"
              placeholder="Enter your email"
              className="w-[80%] border-b border-primary text-left focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            />
          </div>
        </form>
      </div>
      <div className=" bg-[rgba(30,68,137,1)]  rounded-lg">
        <img
          src={ugandaPicTwo}
          className="h-[100%] rounded-lg mix-blend-overlay"
          alt="The beauty of Kampala City by night"
        />
      </div>
    </div>
  );
}
