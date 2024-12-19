import React from "react";

const Hero = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-5 md:gap-7 py-8 md:py-10 bg-customBlue5 px-4 md:px-0">
      <div>
        <h1 className="text-lg md:text-xl text-customBlue leading-6 font-medium font-poppins text-center">
          Find fast-growing brands, not low quality stores
        </h1>
      </div>

      <div className="relative">
        <h1 className="leading-[1.2] font-bold text-customBlue2 text-2xl md:text-5xl font-poppins text-center">
          A Store Leads Alternative,
          <br />
          <span className="text-customBlue">10X Better</span> in Every Way
        </h1>
        <div className="absolute left-0 bottom-[2.8rem] md:bottom-[3.2rem] w-[280px] md:w-[440px] h-[10px] bg-yellow-300 -z-10"></div>
      </div>

      <div className="max-w-2xl px-4 md:px-0">
        <h1 className="text-lg md:text-xl text-customBlue3 font-poppins text-center leading-7">
          Discover untapped eCommerce brands with our high-quality unsaturated leads database
        </h1>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center gap-3 md:gap-2 mt-4 w-full px-4 md:px-0">
        <input
          type="text"
          placeholder="Enter your work email"
          className="w-full md:w-96 h-12 rounded-lg px-4 py-2 text-customGray border border-customBlue shadow-xl" 
        />
        <button className="w-full md:w-auto bg-customBlue text-customWhite px-8 py-3 rounded-lg text-lg">
          Grab free leads
        </button>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center gap-4 text-center md:text-left">
        <div className="flex justify-center items-center gap-2">
          <img src="free.png" alt="" className="w-5 h-5 object-contain" />
          <p className="text-customBlue3 text-sm font-medium">
            5,000 free leads included
          </p>
        </div>
        <span className="text-customBlue3 hidden md:inline">|</span>
        <div className="flex justify-center items-center gap-2">
          <img src="credit.png" className="w-5 h-5 object-contain" />
          <p className="text-customBlue3 text-sm font-medium">
            No credit card required
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
