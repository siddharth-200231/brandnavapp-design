import React from 'react'

const Section6 = () => {
  return (
    <div className='flex justify-center items-center gap-4 bg-white shadow-[0px_3px_15px_1px_rgba(54,43,43,0.15)] max-w-[80%] px-2 max-[700px]:px-0 mx-auto rounded-[10px] '>
      <div className='flex flex-col justify-center '>
        <img src="ppf.jpg" alt="" className=' rounded-full' />
      </div>
      <div className='flex flex-col gap-2 py-5 max-[700px]:py-0'>
        <div className='flex gap-3  items-center'>
            <p className='text-[18px] max-[700px]:text-[15px]  font-semibold leading-[28px] max-[700px]:leading-[20px] text-[#2F327D]'>Highly recommended if you're looking to get Ecom leads!</p>
            <div className=''>
                <img src="stars.png" alt="" className=' max-[700px]:hidden' />
            </div>
        </div>
        <p className='text-[12px] font-normal text-center max-[700px]:text-left leading-[16px] text-[#2F327D]'>
        “Helps me scrape my target audience data with ease... Low effort, amazing results. Saves a lot of time and manual work”
        </p>
        <p className='text-[12px] font-medium text-[#2F327D]'>Sairaj Matkar</p>
      </div>
    </div>
  )
}

export default Section6
