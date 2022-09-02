import { React, useEffect, useState } from "react";
import ugandaPicTwo from "../assets/images/uganda2.jpeg";
import logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";
import { AiOutlineArrowRight, AiOutlineMail } from "react-icons/ai";
import { FaRegEnvelope } from "react-icons/fa";
import Navbar from "../components/Navbar";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ContactUs() {
  function sendEmail(e) {
    e.preventDefault();
    //console.log("here we are");
    emailjs
      .sendForm(
        "service_lu57ols",
        "template_yg7g2f9",
        e.target,
        "user_Pe2rkTabqsB9qaxNzczeM"
      )
      .then((res) => {
        //console.log(res);
        // console.log("we are clearing form");
        //document.getElementById("contactForm").reset();
        const inputFields = document.getElementsByClassName("contactfield");
        for (let i = 0; i < inputFields.length; i++) {
          // inputFields[i].style.backgroundColor = "red";
          //console.log(inputFields[i].value);
          inputFields[i].value = "";
        }

        toast.success("Thank you for contacting us!", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: false,
          progress: undefined,
        });
      })
      .catch((err) => {
        console.log(err);

        toast.error("Something went wrong! Please try again later", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: false,
          progress: undefined,
        });
      });
  }

  return (
    <div>
      <Navbar />
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <div className="w-full md:hidden">
        <div className=" w-[100%] justify-self-center p-5">
          <div className=" w-[100%] text-center mt-[1.75rem]">
            <p className=" float-left text-[1.5rem]">Contact Us</p>
          </div>
          <div className=" clear-both"></div>
          <br></br>

          <div>
            <p>
              We are always here to help! Contact us today if you have any
              questions or queries.
            </p>
          </div>
          <form
            id="contactForm"
            onSubmit={sendEmail}
            className="mt-8 space-y-6"
          >
            <div className=" input-group">
              <label className=" block text-left ">Full name</label>
              <i className="fa fa-users text-primary"></i>{" "}
              <input
                name="name"
                type="text"
                placeholder="Enter your full name"
                className="contactfield w-[80%] border-b border-primary pl-2 font-normal text-left text-primary focus:text-primary focus:bg-white focus:border-blue-600 focus:outline-none"
              />
            </div>
            <div className=" input-group">
              <label className=" block text-left ">Email</label>
              <i className="fa fa-envelope text-primary !font-light"></i>
              <input
                name="email"
                type="Email"
                placeholder="Enter your email"
                className="contactfield w-[80%] border-b border-primary pl-2 font-normal text-left text-primary focus:text-primary focus:bg-white focus:border-blue-600 focus:outline-none"
              />
            </div>

            <div className=" input-group">
              <label className=" block text-left ">Message</label>
              <textarea
                name="message"
                className="contactfield w-[80%] border-b border-primary pl-2 font-normal text-left text-primary focus:text-primary focus:bg-white focus:border-blue-600 focus:outline-none"
              ></textarea>
            </div>
            <div className=" input-group">
              <div className=" input-group align-middle w-[100%] justify-center items-center mx-auto">
                <input
                  className=" w-[50%] mt-4 ml-[4rem] !bg-primary cursor-pointer rounded-lg text-white p-2 text-center align-middle justify-center"
                  type="submit"
                  value="Send Message"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="hidden md:grid md:grid-cols-2 md:gap-4 md:h-[100vh]  md:p-4">
        <div className=" w-[60%] justify-self-center">
          <div className=" w-[100%] text-center mt-[1.75rem]">
            <p className=" text-center text-[2rem] text-primary font-semibold">
              Contact Us
            </p>
          </div>
          <div className=" clear-both"></div>
          <br></br>

          <div>
            <p>
              We are always here to help! Contact us today if you have any
              questions or queries.
            </p>
          </div>
          <form
            id="contactForm"
            onSubmit={sendEmail}
            className="mt-8 space-y-6"
          >
            <div className=" input-group">
              <label className=" block text-left ">Full name</label>
              <i className="fa fa-users text-primary"></i>{" "}
              <input
                name="name"
                type="text"
                placeholder="Enter your full name"
                className="contactfield w-[80%] border-b border-primary pl-2 font-normal text-left text-primary focus:text-primary focus:bg-white focus:border-blue-600 focus:outline-none"
              />
            </div>
            <div className=" input-group">
              <label className=" block text-left ">Email</label>
              <i className="fa fa-envelope text-primary !font-light"></i>
              <input
                name="email"
                type="Email"
                placeholder="Enter your email"
                className="contactfield w-[80%] border-b border-primary pl-2 font-normal text-left text-primary focus:text-primary focus:bg-white focus:border-blue-600 focus:outline-none"
              />
            </div>

            <div className=" input-group">
              <label className=" block text-left ">Message</label>
              <textarea
                name="message"
                className="contactfield w-[80%] border-b border-primary pl-2 font-normal text-left text-primary focus:text-primary focus:bg-white focus:border-blue-600 focus:outline-none"
              ></textarea>
            </div>

            <div className=" input-group">
              <div className=" input-group align-middle w-[100%] justify-center items-center mx-auto">
                <input
                  className="w-[50%] mt-4 ml-[4rem] !bg-primary cursor-pointer rounded-lg text-white p-2 text-center align-middle justify-center"
                  type="submit"
                  value="Send Message"
                />
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

export default ContactUs;
