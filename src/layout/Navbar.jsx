import React from 'react'
import Button from '../components/Button'
import {Menu} from "lucide-react"

const Navbar = () => {
    const navLinks = [
        {href: "#about" , label: "About"},
         {href: "#projects" , label: "Project"},
          {href: "#experience" , label: "Experience"},
           {href: "#testimonials" , label: "Testimonials"}

    ]
  return (
   <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
             
      <nav  className="max-w-6xl mx-auto flex justify-between items-center p-4">

        <a className="text-xl font-bold text-gray-800" >Portfolio <span></span></a>
           <div className='hidden md:flex items-center gap-1'>
            
               <div className="flex gap-6">
                   {navLinks.map((link, index)=>( <a key = {index} href={link.label} className="text-gray-600 hover:text-black transition duration-200">{link.label}</a>)
                   
                   )}
               </div>
                     <div className='hidden md:block'>
                         <Button size='sm' className=" hidden md:block px-4 py-2 text-white rounded">Contactez-moi</Button>

                     </div>

                <button className='md:hidden p-2 text-foreground'>
                    <Menu/>
                </button>
           </div>

      </nav>
   </header>
  )
}

export default Navbar
