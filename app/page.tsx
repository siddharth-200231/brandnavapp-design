import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Section2 from '../components/Section2'
import Section3 from '../components/Section3'
import Section4 from '../components/Section4' 
import Section5 from '../components/Section5'
function page() {
  return (
    <div className='bg-customBlue5 h-screen flex flex-col '>
      <Header />
      <Hero />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
    </div>
  )
}

export default page
