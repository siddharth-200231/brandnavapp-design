import React from 'react'

const Section6 = () => {
  return (
    <div className='flex justify-around items-center  bg-white shadow-[0px_3px_15px_1px_rgba(54,43,43,0.15)] gap-2 max-w-[94%] px-4 mx-auto rounded-[15px] py-3'>
      <div>
        <img 
          src="/ppf.jpg" 
          alt="" 
          className='rounded-full w-[5.5rem] max-[700px]:w-[15rem] '
        />
      </div>
      
      <div className='flex flex-col gap-[2px]'>
        <p className='text-[14px] font-semibold leading-[20px] max-[700px]:leading-[16px] text-[#2F327D]'>
          Highly recommended if you're looking to get Ecom leads!
        </p>
        <p className='text-[11px] font-normal leading-[12px] text-[#696984]'>
          "Helps me scrape my target audience data with ease... Low effort, amazing results. Saves a lot of time and manual work"
        </p>
        <p className='text-[11px] font-medium text-[#2F327D]'>
          Sairaj Matkar
        </p>
      </div>
    </div>
  )
}

export default Section6
