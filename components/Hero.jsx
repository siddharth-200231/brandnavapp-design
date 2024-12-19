import React from "react";

const Hero = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-6 p-11 bg-customBlue5">
      <div>
        <h1 className="text-xl text-customBlue leading-6 font-medium font-poppins text-center">
          Find fast-growing brands, not low quality stores
        </h1>
      </div>

      <div className="px-1 py-1">
        <h1 className="leading-10 font-bold text-customBlue2 text-5xl font-poppins text-center">
          A Store Leads Alternative,
          <span className="text-customBlue">10X Better</span> in Every Way
        </h1>
      </div>
      <div>
        <h1 className="text-customBlue3 text-lg font-poppins text-center leading-6">
          Discover untapped eCommerce brands with our high-quality unsaturated
          leads database
        </h1>
      </div>

      <div className="flex justify-center items-center gap-1">
        <input
          type="text"
          placeholder="Enter your Work email"
          className="w-96 h-11 rounded-md px-4 py-2 text-customGray border border-customBlue"
        />
        <button className="bg-customBlue text-customWhite px-4 py-2 rounded-md">
          Grab Free loads
        </button>
      </div>
      <div className="flex justify-center items-center gap-1">
        <div className="flex justify-center items-center gap-1">
          <img src="free.png" alt="" className="w-4 h-4 object-contain" />
          <p className="text-customBlue3 text-sm font-medium">
            5,000 free leads included
          </p>{" "}
        </div>{" "}
        |
        <div className="flex justify-center items-center gap-1">
          <img src="credit.png" className="w-4 h-4 object-contain" />
          <p className="text-customBlue3 text-sm font-medium">
            No credit card required
          </p>
        </div>{" "}
      </div>
    </div>
  );
};

export default Hero;
