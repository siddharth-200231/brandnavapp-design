import React from "react";

const Section4 = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full px-4 md:w-3/4 mx-auto gap-6 md:gap-8 mt-4 ">
      <div className="text-center mb-6 md:mb-8 max-w-[800px]">
        <h1 className="font-semibold text-[#2B3674] text-2xl md:text-4xl font-poppins leading-tight">
          3 key differences that make BrandNav the<br className="hidden md:block" /> world's ultimate eCommerce<br className="hidden md:block" /> leads database
        </h1>
      </div>

      {/* First card */}
      <div className="bg-[#EDFAFE] rounded-2xl p-6 md:p-8 w-full flex flex-col md:flex-row gap-6 md:gap-8 shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
        <div className="flex-1 flex flex-col justify-center order-1 md:order-1">
          <h2 className="text-[#423C65] text-xl md:text-2xl font-semibold mb-3 md:mb-4">
            World's largest eCommerce and DTC only database
          </h2>
          <p className="text-gray-600 text-base md:text-lg">
            BrandNav is the most complete and up-to-date database of more than 14.5 million eCommerce leads that you can use to find your next client. BrandNav offers over 30+ filters to help users build highly segmented lists for better prospecting.
          </p>
        </div>
        <div className="flex-1 order-2 md:order-2">
          <img src="image1.png" alt="eCommerce database illustration" className="w-full object-contain max-h-[300px]" />
        </div>
      </div>

      {/* Second card */}
      <div className="bg-[#F8F9FF] rounded-2xl p-6 md:p-8 w-full flex flex-col md:flex-row gap-6 md:gap-8 shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
        <div className="flex-1 order-2 md:order-1">
          <img src="image2.png" alt="Contact information illustration" className="w-full object-contain max-h-[300px]" />
        </div>
        <div className="flex-1 flex flex-col justify-center order-1 md:order-2">
          <h2 className="text-[#423C65] text-xl md:text-2xl font-semibold mb-3 md:mb-4">
            Decision-makers contact information
          </h2>
          <p className="text-gray-600 text-base md:text-lg">
            BrandNav allows you to find up-to-date verified contact information of the decision makers in your leads list. BrandNav Enricher gives you access to multiple data points. Here are some of the data points you get with BrandNav: Name, Job Title, Work Email, Phone Number, Social Media URLs and much more.
          </p>
        </div>
      </div>

      {/* Third card */}
      <div className="bg-[#F0FBF8] rounded-2xl p-6 md:p-8 w-full flex flex-col md:flex-row gap-6 md:gap-8 shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
        <div className="flex-1 flex flex-col justify-center order-1 md:order-1">
          <h2 className="text-[#423C65] text-xl md:text-2xl font-semibold mb-3 md:mb-4">
            Start for free
          </h2>
          <p className="text-gray-600 text-base md:text-lg">
            BrandNav Screener has a free plan that you can start with and then upgrade to a paid account as your needs grow. BrandNav offers subscription packages for any budget, starting from only $19/month.
          </p>
        </div>
        <div className="flex-1 flex items-center order-2 md:order-2">
          <img src="image3.png" alt="Start for free illustration" className="w-full object-contain max-h-[300px]" />
        </div>
      </div>
    </div>
  );
};

export default Section4;
