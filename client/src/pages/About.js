import React from "react";
import Navbar from "../components/Navbar";
import { MdOutlineParagliding } from "react-icons/md";
import { FaMapMarkedAlt, FaHotel } from "react-icons/fa";
import { BiDrink } from "react-icons/bi";

export default function About() {
  return (
    <div>
      <Navbar />
      <div className="w-[100%] h-[250px]">
        <img
          src="/images/lake-victoria.jpg"
          className="w-full  h-full object-cover"
        ></img>
        <h3 className="text-white drop-shadow-lg text-[2.5rem] font-medium mx-auto text-center mt-[-70px]">
          About Us
        </h3>
      </div>
      <div className="w-[70vw] mx-auto grid grid-cols-2 p-7">
        <div className="grid grid-cols-2">
          <div className="p-2">
            <MdOutlineParagliding className="text-primary text-[5rem] mx-auto" />
            We offer exciting adventures for you and the family.
          </div>
          <div className="p-2">
            <FaMapMarkedAlt className="text-primary text-[5rem] mx-auto " />
            Tour and explore gems in Uganda that even the locals do not know
            about.
          </div>
          <div className="p-2">
            <FaHotel className="text-primary text-[5rem] mx-auto" />
            Stay in the finest hotels in the whole of Uganda.
          </div>
          <div className="p-2">
            <BiDrink className="text-primary text-[5rem] mx-auto" />
            Make every stay in Uganda fun and exciting by going on adventures
            with us.
          </div>
        </div>
        <div className="ml-[2rem] my-auto pl-6">
          <img
            src="/images/logo.png"
            className="w-full object-scale-down"
          ></img>
          Online Booking Platform for those coming to Uganda. We provide a
          platform to book your stay with the best hotels or experience an
          adventure in the Pearl of Africa like never before.
        </div>
      </div>
      <div className="w-full bg-primary p-11 grid grid-cols-2">
        <div className="">
          <img src="/images/teamwork.jpeg" className="w-[40rem]"></img>
        </div>
        <div className="text-secondary p-10 my-auto">
          <p className=" font-bold text-[3rem]">
            {" "}
            Our team is dedicated to making your stay a wonderful memory.
          </p>
        </div>
      </div>
    </div>
  );
}
