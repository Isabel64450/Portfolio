import React from 'react'
import Hero from '@/sections/Hero'
import Experience from '@/sections/Experience'
import Projects from '@/sections/Projects'
import Contact from '@/sections/Contact'
import Testimonial from '@/sections/Testimonial'
import About from '@/sections/About'
import Navbar from '@/layout/Navbar'
import Footer from './layout/Footer'

function App() {
  return (
    <div className='min-h-screen overflow-x-hidden'>
      <Navbar/>
      <main>
          <Hero/>
          <About/>
          
          <Projects/>
          <Experience/>
          
          <Testimonial/>
          <Contact/>
          <Footer/>
      </main>
    </div>
  )
}

export default App
