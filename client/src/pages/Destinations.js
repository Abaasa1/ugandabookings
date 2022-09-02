import React from "react";
import Navbar from "../components/Navbar";
import lakeVic from "../assets/images/lake-victoria.jpg";
import gorilla from "../assets/images/gorilla1.jpg";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

function Destinations() {
  const [listOfDestinations, setDestinations] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3001/destinations").then((response) => {
      setDestinations(response.data);
    });
  });
  return (
    <div>
      <Navbar />

      <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8 p-6 pb-8">
        {listOfDestinations.map((value, key) => {
          return (
            <div className="group relative">
              <div className="relative w-full min-h-80 bg-gray-200 !z-10 aspect-w-1 aspect-h-1 rounded-tr-md rounded-tl-md rounded-br-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                <img
                  src={value.imageURL}
                  alt={value.name}
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
                      {value.name}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{value.location}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Destinations;
