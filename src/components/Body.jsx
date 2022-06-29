import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import lakeVic from "../assets/images/lake-victoria.jpg";
import gorilla from "../assets/images/gorilla1.jpg";
import { Link } from "react-router-dom";

const Body = () => {
  return (
    <div>
      <div className="w-full">
        <div className="w-[70vw] justify-center mx-auto text-primary font-semibold py-[3rem]">
          <div className="w=full justify-self-end self-end justify-end items-end">
            <p className=" float-left text-[1.5rem]">Featured Destinations</p>
            <div className="float-right">
              <Link to="/destinations">
                <p className=" float-left text-[1rem] mt-3 pr-1">View</p>

                <AiOutlineArrowRight className="float-right mt-4" />
              </Link>
            </div>
            <div className=" clear-both"></div>
          </div>
          <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
            <div className="group relative">
              <div className="relative w-full min-h-80 bg-gray-200 !z-10 aspect-w-1 aspect-h-1 rounded-tr-md rounded-tl-md rounded-br-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                <img
                  src={lakeVic}
                  alt="Bey Resort, Lake Victoria"
                  className="w-full h-full object-center object-cover lg:w-full lg:h-full z-10"
                />
              </div>
              <div className="mt-[-44px] w-[40%] bg-white flex justify-between !z-50 relative">
                <div>
                  <h3 className="text-sm text-black font-semibold">
                    <a href="#">
                      <span
                        aria-hidden="true"
                        className="absolute inset-0"
                      ></span>
                      Bey Resort
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">Lake Victoria</p>
                </div>
              </div>
            </div>
            <div className="group relative">
              <div className="relative w-full min-h-80 bg-gray-200 !z-10 aspect-w-1 aspect-h-1 rounded-tr-md rounded-tl-md rounded-br-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                <img
                  src={gorilla}
                  alt="Gorilla Tours and Travels"
                  className="w-full h-full object-center object-cover lg:w-full lg:h-full z-10"
                />
              </div>
              <div className="mt-[-44px] w-[40%] bg-white flex justify-between !z-50 relative">
                <div>
                  <h3 className="text-sm text-black font-semibold">
                    <a href="#">
                      <span
                        aria-hidden="true"
                        className="absolute inset-0"
                      ></span>
                      Bey Resort
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">Lake Victoria</p>
                </div>
              </div>
            </div>
            <div className="group relative">
              <div className=" relative w-full min-h-80 bg-gray-200 !z-10 aspect-w-1 aspect-h-1 rounded-tr-md rounded-tl-md rounded-br-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                <img
                  src={lakeVic}
                  alt="Bey Resort, Lake Victoria"
                  className="w-full h-full object-center object-cover lg:w-full lg:h-full !z-10"
                />
              </div>
              <div className="mt-[-44px] w-[40%] bg-white flex justify-between !z-50 relative">
                <div>
                  <h3 className="text-sm text-black font-semibold">
                    <a href="#">
                      <span
                        aria-hidden="true"
                        className="absolute inset-0"
                      ></span>
                      Bey Resort
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">Lake Victoria</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full p-[100px] text-secondary bg-firstimage bg-cover bg-center justify-center text-center items-center">
        <p className="text-5xl font-bold">
          We provide the best rates in<br></br> the country
        </p>
      </div>
      <div className="w-full">
        <div className="w-[70vw] justify-center mx-auto text-primary font-semibold py-[3rem]">
          <div className="w=full justify-self-end self-end justify-end items-end">
            <p className=" float-left text-[1.5rem]">Featured Experiences</p>
            <div className="float-right">
              <Link to="/experiences">
                <p className=" float-left text-[1rem] mt-3 pr-1">View</p>

                <AiOutlineArrowRight className="float-right mt-4" />
              </Link>
            </div>
            <div className=" clear-both"></div>
          </div>
          <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
            <div className="group relative">
              <div className="relative w-full min-h-80 bg-gray-200 !z-10 aspect-w-1 aspect-h-1 rounded-tr-md rounded-tl-md rounded-br-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                <img
                  src={lakeVic}
                  alt="Bey Resort, Lake Victoria"
                  className="w-full h-full object-center object-cover lg:w-full lg:h-full z-10"
                />
              </div>
              <div className="mt-[-44px] w-[40%] bg-white flex justify-between !z-50 relative">
                <div>
                  <h3 className="text-sm text-black font-semibold">
                    <a href="#">
                      <span
                        aria-hidden="true"
                        className="absolute inset-0"
                      ></span>
                      Bey Resort
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">Lake Victoria</p>
                </div>
              </div>
            </div>
            <div className="group relative">
              <div className="relative w-full min-h-80 bg-gray-200 !z-10 aspect-w-1 aspect-h-1 rounded-tr-md rounded-tl-md rounded-br-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                <img
                  src={gorilla}
                  alt="Gorilla Tours and Travels"
                  className="w-full h-full object-center object-cover lg:w-full lg:h-full z-10"
                />
              </div>
              <div className="mt-[-44px] w-[40%] bg-white flex justify-between !z-50 relative">
                <div>
                  <h3 className="text-sm text-black font-semibold">
                    <a href="#">
                      <span
                        aria-hidden="true"
                        className="absolute inset-0"
                      ></span>
                      Bey Resort
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">Lake Victoria</p>
                </div>
              </div>
            </div>
            <div className="group relative">
              <div className=" relative w-full min-h-80 bg-gray-200 !z-10 aspect-w-1 aspect-h-1 rounded-tr-md rounded-tl-md rounded-br-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                <img
                  src={lakeVic}
                  alt="Bey Resort, Lake Victoria"
                  className="w-full h-full object-center object-cover lg:w-full lg:h-full !z-10"
                />
              </div>
              <div className="mt-[-44px] w-[40%] bg-white flex justify-between !z-50 relative">
                <div>
                  <h3 className="text-sm text-black font-semibold">
                    <a href="#">
                      <span
                        aria-hidden="true"
                        className="absolute inset-0"
                      ></span>
                      Bey Resort
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">Lake Victoria</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full p-[100px] text-secondary bg-firstimage bg-cover bg-center justify-center text-center items-center">
        <p className="text-5xl font-bold">
          Are you a hotel owner?<br></br>
          Sign Up Today
        </p>
      </div>
    </div>
  );
};

export default Body;
