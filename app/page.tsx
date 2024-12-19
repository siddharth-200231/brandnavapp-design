import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
function page() {
  return (
    <div className='bg-customBlue5 h-screen flex flex-col'>
      <Header />
      <div> <Hero /></div>
     
    </div>
  )
}

export default page
