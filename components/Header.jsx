import React from 'react'

const Header = () => {
  return (
    <div className='py-4 px-4 sm:px-6 md:px-12 lg:px-24 z-50 shadow-[0_4px_4px_rgba(0,0,0,0.25)] bg-white'>
      <div className='flex items-center tracking-tight'>
        <img src='vector.png' alt='logo' className='h-6 w-6'/>
        <h2 className='text-customBlack font-medium text-xl font-poppins tracking-tight'>BrandNav</h2>
      </div>
    </div>
  )
}

export default Header
