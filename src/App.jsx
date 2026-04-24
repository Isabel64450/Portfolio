import React from 'react'
import Hero from '@/sections/Hero'
import Experience from '@/sections/Experience'
import Projects from '@/sections/Projects'
import Contact from '@/sections/Contact'
import Testimonial from '@/sections/Testimonial'
import About from '@/sections/About'
import Navbar from '@/layout/Navbar'

function App() {
  return (
    <div className='min-h-screen overflow-x-hidden'>
      <Navbar/>
      <main>
          <Hero/>
          <Experience/>
          <Projects/>
          <Contact/>
          <Testimonial/>
          <About/>
      </main>
    </div>
  )
}

export default App
