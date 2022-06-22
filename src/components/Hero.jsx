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
      <div className="w-full align-bottom mt-[75px]">
        <div className="bg-secondary w-[800px] h-[138px] rounded-t-lg mx-auto align-bottom items-end justify-end "></div>
      </div>
    </div>
  );
};

export default Hero;
