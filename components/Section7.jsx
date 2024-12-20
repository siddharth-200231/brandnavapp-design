import React from 'react'

const Section7 = () => {
  return (
    <div className='bg-gradient-to-r from-[#240036] to-[#003252] max-w-[95%] mx-auto py-5 px-16 max-[700px]:px-5 rounded-[8px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)]'>
      <div className=' flex flex-col items-center justify-center gap-3 text-center  w-full'>
        <p className='text-[38px] leading-[60px] md:text-[42px] md:leading-[60px] 
          max-[700px]:text-[32px] max-[700px]:leading-[40px] 
          max-[500px]:text-[28px] max-[500px]:leading-[34px] 
          font-semibold text-white'>
          Ready to close more deals for your business?
        </p>
        <p className='text-[24px] leading-[30px] md:text-[28px] md:leading-[34px]
          max-[700px]:text-[22px] max-[700px]:leading-[28px]
          max-[500px]:text-[20px] max-[500px]:leading-[26px]
          font-light text-gray-300 mb-3'>
          Join the thousands of business that made the switch to BrandNav!
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-3  mb-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-[370px] sm:w-96 h-[44px] rounded-lg px-4 bg-white text-gray-700 focus:outline-none max-[700px]:w-[216px]  "
          />
          <button className="w-[216px] h-[44px] sm:w-auto bg-[#0066FF] text-white px-8 py-3 rounded-lg text-[16px] font-medium hover:bg-blue-600 transition-colors ">
            Grab free leads
          </button>
        </div>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 max-[700px]:gap-3 text-[14px]  text-white text-sm">
          <div className="flex items-center gap-2 ">
            <img src="free.png" alt="" className="w-5 h-5" />
            <span>5,000 free leads included</span>
          </div>
          <span className="hidden sm:block text-gray-400">|</span>
          <div className="flex items-center gap-2">
            <img src="credit.png" alt="" className="w-5 h-5" />
            <span>No credit card required</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Section7
