import React from 'react'

const Section3 = () => {
  return (
    <div className='flex flex-col justify-center items-center p-4 sm:p-7 w-full sm:w-[90%] md:w-[85%] lg:w-3/4 mx-auto'>
      <div className='flex flex-col justify-center items-center bg-white rounded-[8px] p-4 sm:p-6 md:p-8 w-full drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]'>
        <div className='font-poppins font-medium tracking-wide text-customGray2 mb-4 sm:mb-6 text-center text-sm sm:text-base'>
          Modern companies are using BrandNav
        </div>
        <div className='grid grid-cols-2 sm:grid-cols-3 md:flex md:flex-row justify-center items-center gap-6 sm:gap-8 md:gap-12'>
          <img src="./sentry.png" alt="Sentry Ecom" className='grayscale opacity-70 w-auto h-auto max-h-8 sm:max-h-10' />
          <img src="./xlr.png" alt="XLR Media" className='grayscale opacity-70 w-auto h-auto max-h-8 sm:max-h-10' />
          <img src="./outreach.png" alt="Outreach Clerk" className='grayscale opacity-70 w-auto h-auto max-h-8 sm:max-h-10' />
          <img src="./og.png" alt="OG" className='grayscale opacity-70 w-auto h-auto max-h-8 sm:max-h-10' />
          <img src="./acexmedia.png" alt="Acexmedia" className='grayscale opacity-70 w-auto h-auto max-h-8 sm:max-h-10' />
        </div>
      </div>
    </div>
  )
}

export default Section3
