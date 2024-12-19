import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Section2 from '../components/Section2'
function page() {
  return (
    <div className='bg-customBlue5 h-screen flex flex-col'>
      <Header />
      
      <Hero />
      <Section2 />
    </div>
  )
}

export default page
