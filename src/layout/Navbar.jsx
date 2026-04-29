import React,{useEffect, useState} from 'react'
import Button from '../components/Button'
import {Menu , X} from "lucide-react"


 const navLinks = [
        {href: "#about" , label: "About"},
         {href: "#projects" , label: "Project"},
          {href: "#experience" , label: "Experience"},
           {href: "#testimonials" , label: "Testimonials"}
           
    ]

const Navbar = () => {
         const [isMobileMenuOpen , setIsMobileMenuOpen] = useState(false);
         const [isScrolled, setIsScrolled] = useState(false);
          const scrollToContact = () => {
      document.querySelector("#contact")?.scrollIntoView({ 
        behavior: "smooth" 
      });
    };

    useEffect(() => {
        const handleScroll = () => {
           setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => 
            window.removeEventListener("scroll", handleScroll);
        }, []);
   
  return (
   <header className="fixed top-0 left-0 w-full bg-[#F7E1D7] shadow-md z-50" >
             
      <nav  className="max-w-6xl mx-auto flex justify-between items-center p-4">

        <a href='#' className="text-xl font-bold text-gray-800" >Portfolio <span></span></a>
           <div className='hidden md:flex items-center gap-1'>
            
               <div className="hidden md:flex items-center gap-6">
                   {navLinks.map((link, index)=>( <a key = {index} href={link.href}  onClick={(e) => {
                     if (link.href === "#contact") {e.preventDefault(); scrollToContact(); }
                   }} className="text-gray-600 hover:text-black transition duration-200">{link.label}</a>)
                   
                   )}
               </div>
                    
                         <Button size='sm' className=" px-4 py-2 text-white rounded" onClick={scrollToContact}>Contactez-moi</Button>
                </div>
                <button className='md:hidden p-2 text-foreground cursor-pointer' onClick={() => setIsMobileMenuOpen((prev) => !prev)}>
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
           

      </nav>

        {isMobileMenuOpen && (
          <div className="md:hidden glass-strong animate-fade-in">
            <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
                {navLinks.map((link, index) => (
                    <a
                        key={index}
                        href={link.href}  
                         onClick={(e) => {
                            if (link.href === "#contact") { e.preventDefault(); scrollToContact(); }
                         }}
                        className="text-[#4A5759] hover:text-[#B0C4B1] transition duration-200 font-medium"
                        
                    >
                        {link.label}
                    </a>
                ))}
                <Button
                
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    scrollToContact();
                  }}
                >
                    Contactez-moi
                </Button>
            </div>
          </div>
        )}






   </header>
  )
}

export default Navbar
