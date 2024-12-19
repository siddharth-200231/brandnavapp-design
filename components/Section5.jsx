import React from 'react'

const Section5 = () => {
  return (
    <div className='flex flex-col items-center gap-3 pb-10 '>
      <button className="w-auto bg-customBlue text-customWhite rounded-lg shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
        <h1 className='py-2 px-6 text-lg'>
          Grab free leads
        </h1>
      </button>
      <div className="flex flex-col md:flex-row justify-center items-center gap-2 text-center md:text-left">
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
  )
}

export default Section5
