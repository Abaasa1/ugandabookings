import React from "react";
import ugandaPicTwo from "../assets/images/uganda2.jpeg";
import logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";
import { AiOutlineArrowRight, AiOutlineMail } from "react-icons/ai";
import { FaRegEnvelope } from "react-icons/fa";

export default function SignUp() {
  return (
    <div>
      <div className="w-full md:hidden">
        <div className=" w-[100%] justify-self-center p-5">
          <div className=" w-[100%] text-center mt-[1.75rem]">
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
              <a href="/" className="text-primary font-semibold">
                <p className=" float-left text-[1rem] mt-3 pr-1">Back Home</p>

                <AiOutlineArrowRight className="float-right mt-4" />
              </a>
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
            <div className=" input-group">
              <label className=" block text-left ">Full name</label>
              <i class="fa fa-users text-primary"></i>{" "}
              <input
                name="fname"
                type="text"
                placeholder="Enter your full name"
                className="w-[80%] border-b border-primary pl-2 font-normal text-left text-primary focus:text-primary focus:bg-white focus:border-blue-600 focus:outline-none"
              />
            </div>
            <div className=" input-group">
              <label className=" block text-left ">Email</label>
              <i class="fa fa-envelope text-primary !font-light"></i>
              <input
                name="email"
                type="Email"
                placeholder="Enter your email"
                className="w-[80%] border-b border-primary pl-2 font-normal text-left text-primary focus:text-primary focus:bg-white focus:border-blue-600 focus:outline-none"
              />
            </div>

            <div className=" input-group">
              <label className=" block text-left ">Username</label>
              <i class="fa fa-user text-primary !font-light"></i>
              <input
                name="username"
                type="text"
                placeholder="Enter your username"
                className="w-[80%] border-b border-primary pl-2 font-normal text-left text-primary focus:text-primary focus:bg-white focus:border-blue-600 focus:outline-none"
              />
            </div>
            <div className=" input-group">
              <label className=" block text-left ">Password</label>
              <i class="fa-solid fa-lock text-primary "></i>
              <input
                name="password"
                type="password"
                placeholder="Enter your password"
                className="w-[80%] border-b border-primary pl-2 font-normal text-left text-primary focus:text-primary focus:bg-white focus:border-blue-600 focus:outline-none"
              />
              <div className=" input-group align-middle w-[100%] justify-center items-center mx-auto">
                <button
                  className="w-[50%] mt-4 ml-[4rem] !bg-primary rounded-lg text-white p-2 text-center align-middle justify-center"
                  type="submit"
                >
                  Register
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="hidden md:grid md:grid-cols-2 md:gap-4 md:h-[100vh]  md:p-4">
        <div className=" w-[60%] justify-self-center">
          <div className=" w-[100%] text-center mt-[1.75rem]">
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
              <a href="/" className="text-primary font-semibold">
                <p className=" float-left text-[1rem] mt-3 pr-1">Back Home</p>

                <AiOutlineArrowRight className="float-right mt-4" />
              </a>
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
            <div className=" input-group">
              <label className=" block text-left ">Full name</label>
              <i class="fa fa-users text-primary"></i>{" "}
              <input
                name="fname"
                type="text"
                placeholder="Enter your full name"
                className="w-[80%] border-b border-primary pl-2 font-normal text-left text-primary focus:text-primary focus:bg-white focus:border-blue-600 focus:outline-none"
              />
            </div>
            <div className=" input-group">
              <label className=" block text-left ">Email</label>
              <i class="fa fa-envelope text-primary !font-light"></i>
              <input
                name="email"
                type="Email"
                placeholder="Enter your email"
                className="w-[80%] border-b border-primary pl-2 font-normal text-left text-primary focus:text-primary focus:bg-white focus:border-blue-600 focus:outline-none"
              />
            </div>

            <div className=" input-group">
              <label className=" block text-left ">Username</label>
              <i class="fa fa-user text-primary !font-light"></i>
              <input
                name="username"
                type="text"
                placeholder="Enter your username"
                className="w-[80%] border-b border-primary pl-2 font-normal text-left text-primary focus:text-primary focus:bg-white focus:border-blue-600 focus:outline-none"
              />
            </div>
            <div className=" input-group">
              <label className=" block text-left ">Password</label>
              <i class="fa-solid fa-lock text-primary "></i>
              <input
                name="password"
                type="password"
                placeholder="Enter your password"
                className="w-[80%] border-b border-primary pl-2 font-normal text-left text-primary focus:text-primary focus:bg-white focus:border-blue-600 focus:outline-none"
              />
              <div className=" input-group align-middle w-[100%] justify-center items-center mx-auto">
                <button
                  className="w-[50%] mt-4 ml-[4rem] !bg-primary rounded-lg text-white p-2 text-center align-middle justify-center"
                  type="submit"
                >
                  Register
                </button>
              </div>
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
    </div>
  );
}
