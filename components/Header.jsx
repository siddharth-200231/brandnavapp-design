import React from 'react'

const Header = () => {
  return (
    <div className='py-4 px-4 sm:px-6 md:px-12 lg:px-24'>
      <div className='flex items-center tracking-tight'>
        <img src='vector.png' alt='logo' className='h-5 w-5 sm:h-6 sm:w-6'/>
        <h2 className='text-customBlack font-semibold text-lg sm:text-xl font-poppins tracking-tight ml-2'>
          Brand<span className='text-blue-600'>Nav</span>
        </h2>
      </div>
    </div>
  )
}

export default Header
