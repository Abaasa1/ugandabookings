import React from "react";

const Hero = () => {
  return (
    <div className="bg-primary text-secondary w-full h-screen mt-[-96px] overflow-hidden">
      <h1 className=" font-extrabold text-6xl pt-[200px] pl-[10%]">
        Explore the Pearl <br></br>of Africa
      </h1>
      <p className="pt-2 pl-[10%] text-[1.25rem]">
        Experience the beauty and the breathtaking scenes unique <br></br>to the
        pearl of Africa.
      </p>
      <div className="w-full align-bottom mt-[125px]">
        <div className="bg-secondary w-[800px] h-[138px] rounded-t-lg mx-auto align-bottom items-end justify-end ">
          <div class="flex items-center py-2">
            <input
              class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
              type="text"
              placeholder="Jane Doe"
              aria-label="Full name"
            />
            <button
              class="flex-shrink-0 !bg-primary text-sm text-white py-3 px-5 rounded-lg"
              type="button"
            >
              Search{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
