import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import lakeVic from "../assets/images/lake-victoria.jpg";
import gorilla from "../assets/images/gorilla1.jpg";

const Body = () => {
  return (
    <div>
      <div className="w-full">
        <div className="w-[70vw] justify-center mx-auto text-primary font-semibold py-[3rem]">
          <div className="w=full justify-self-end self-end justify-end items-end">
            <p className=" float-left text-[1.5rem]">Featured Destinations</p>
            <div className="float-right">
              <p className=" float-left text-[1rem] mt-3 pr-1">View</p>

              <AiOutlineArrowRight className="float-right mt-4" />
            </div>
            <div className=" clear-both"></div>
          </div>
          <div class="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
            <div class="group relative">
              <div class="relative w-full min-h-80 bg-gray-200 !z-10 aspect-w-1 aspect-h-1 rounded-tr-md rounded-tl-md rounded-br-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                <img
                  src={lakeVic}
                  alt="Bey Resort, Lake Victoria"
                  class="w-full h-full object-center object-cover lg:w-full lg:h-full z-10"
                />
              </div>
              <div class="mt-[-44px] w-[40%] bg-white flex justify-between !z-50 relative">
                <div>
                  <h3 class="text-sm text-black font-semibold">
                    <a href="#">
                      <span aria-hidden="true" class="absolute inset-0"></span>
                      Bey Resort
                    </a>
                  </h3>
                  <p class="mt-1 text-sm text-gray-500">Lake Victoria</p>
                </div>
              </div>
            </div>
            <div class="group relative">
              <div class="relative w-full min-h-80 bg-gray-200 !z-10 aspect-w-1 aspect-h-1 rounded-tr-md rounded-tl-md rounded-br-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                <img
                  src={gorilla}
                  alt="Gorilla Tours and Travels"
                  class="w-full h-full object-center object-cover lg:w-full lg:h-full z-10"
                />
              </div>
              <div class="mt-[-44px] w-[40%] bg-white flex justify-between !z-50 relative">
                <div>
                  <h3 class="text-sm text-black font-semibold">
                    <a href="#">
                      <span aria-hidden="true" class="absolute inset-0"></span>
                      Bey Resort
                    </a>
                  </h3>
                  <p class="mt-1 text-sm text-gray-500">Lake Victoria</p>
                </div>
              </div>
            </div>
            <div class="group relative">
              <div class=" relative w-full min-h-80 bg-gray-200 !z-10 aspect-w-1 aspect-h-1 rounded-tr-md rounded-tl-md rounded-br-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                <img
                  src={lakeVic}
                  alt="Bey Resort, Lake Victoria"
                  class="w-full h-full object-center object-cover lg:w-full lg:h-full !z-10"
                />
              </div>
              <div class="mt-[-44px] w-[40%] bg-white flex justify-between !z-50 relative">
                <div>
                  <h3 class="text-sm text-black font-semibold">
                    <a href="#">
                      <span aria-hidden="true" class="absolute inset-0"></span>
                      Bey Resort
                    </a>
                  </h3>
                  <p class="mt-1 text-sm text-gray-500">Lake Victoria</p>
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
              <p className=" float-left text-[1rem] mt-3 pr-1">View</p>

              <AiOutlineArrowRight className="float-right mt-4" />
            </div>
            <div className=" clear-both"></div>
          </div>
          <div class="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
            <div class="group relative">
              <div class="relative w-full min-h-80 bg-gray-200 !z-10 aspect-w-1 aspect-h-1 rounded-tr-md rounded-tl-md rounded-br-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                <img
                  src={lakeVic}
                  alt="Bey Resort, Lake Victoria"
                  class="w-full h-full object-center object-cover lg:w-full lg:h-full z-10"
                />
              </div>
              <div class="mt-[-44px] w-[40%] bg-white flex justify-between !z-50 relative">
                <div>
                  <h3 class="text-sm text-black font-semibold">
                    <a href="#">
                      <span aria-hidden="true" class="absolute inset-0"></span>
                      Bey Resort
                    </a>
                  </h3>
                  <p class="mt-1 text-sm text-gray-500">Lake Victoria</p>
                </div>
              </div>
            </div>
            <div class="group relative">
              <div class="relative w-full min-h-80 bg-gray-200 !z-10 aspect-w-1 aspect-h-1 rounded-tr-md rounded-tl-md rounded-br-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                <img
                  src={gorilla}
                  alt="Gorilla Tours and Travels"
                  class="w-full h-full object-center object-cover lg:w-full lg:h-full z-10"
                />
              </div>
              <div class="mt-[-44px] w-[40%] bg-white flex justify-between !z-50 relative">
                <div>
                  <h3 class="text-sm text-black font-semibold">
                    <a href="#">
                      <span aria-hidden="true" class="absolute inset-0"></span>
                      Bey Resort
                    </a>
                  </h3>
                  <p class="mt-1 text-sm text-gray-500">Lake Victoria</p>
                </div>
              </div>
            </div>
            <div class="group relative">
              <div class=" relative w-full min-h-80 bg-gray-200 !z-10 aspect-w-1 aspect-h-1 rounded-tr-md rounded-tl-md rounded-br-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                <img
                  src={lakeVic}
                  alt="Bey Resort, Lake Victoria"
                  class="w-full h-full object-center object-cover lg:w-full lg:h-full !z-10"
                />
              </div>
              <div class="mt-[-44px] w-[40%] bg-white flex justify-between !z-50 relative">
                <div>
                  <h3 class="text-sm text-black font-semibold">
                    <a href="#">
                      <span aria-hidden="true" class="absolute inset-0"></span>
                      Bey Resort
                    </a>
                  </h3>
                  <p class="mt-1 text-sm text-gray-500">Lake Victoria</p>
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
