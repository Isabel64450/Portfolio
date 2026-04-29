import React from 'react'
import  Button  from "../components/Button";
import { ArrowRight, ChevronDown, Download } from "lucide-react";
import  AnimatedBorderButton  from "../components/AnimatedBorderButton";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
const skills = [
    
    "JavaScript",
    "React",
    "React Native",
    "Node.js",
    
    "MongoDB",
    "HTML5",
    "CSS3",
    "Tailwind CSS",
    "Next.js",
    "Express.js",
    "Figma",
    "Git",
    "Docker",
    "Github Actions",
    "Python",
    "SQL",
    "Machine learning",
    "PHP",
];

const positions = [...Array(20)].map(() => ({
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    animationDuration: `${15 + Math.random() * 20}s`,
    animationDelay: `${Math.random() * 5}s`,
}));

const Hero = () => {
       const scrollToContact = () => {
         document.querySelector("#contact")?.scrollIntoView({
          behavior: "smooth"
        });
};
  return (
     <section className="relative min-h-screen flex items-center overflow-hidden">
        
        <div className="absolute inset-0">
          <img
            src=" "
            alt="Image de fond style github"
            className="w-full h-full object-cover opacity-40"
          />
          
        </div>
   
        <div className="absoute inset-0 overflow-hidden pointer-events-none">
          {positions.map((pos, index) => (
            <div
              key={index}
              className="absolute w-5 h-5 rotate-45 opacity-50"
              style={{
                backgroundColor: "#B0C4B1",
                top: pos.top,
                left: pos.left,
                animation: `slow-drift ${pos.animationDuration} ease-in-out infinite`,
                animationDelay: pos.animationDelay,
              }}
            />
          ))}
        </div>
       
        <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
          
            <div className="space-y-8">
              <div className="animate-fade-in">
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
                  <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                  Software
                </span>
              </div>
           
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight animate-fade-in animation-delay-100">
                  Développeuse et conceptrice d’applications, orientée data{" "}
                  <span className="text-primary glow-text">Fullstack </span>
                  
                  <span className="font-serif italic font-normal text-[#EDAFB8]">
                    et les défis web.
                  </span>
                </h1>
                <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-600">
                  Développeuse web ful-stack, passionnée par la data et les nouveles technologies, je suis
                  actuelement en formation Concepteur Développeur d’Applications (CDA).
                </p>
              </div>
            
              <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-300">
                <Button
                  onClick={scrollToContact}
                  size="lg"
                  className="animate-fade-in animation-delay-800 rounded-full"
                >
                  Contactez-moi <ArrowRight className="w-5 h-5" />
                </Button>
                <AnimatedBorderButton onClick={() => window.open("/cv.pdf", "_blank")}>
                  <Download className="w-5 h-5"/>
                  Download CV
                </AnimatedBorderButton>
              </div>
           
              <div className="flex items-center gap-4 animate-fade-in animation-delay-400">
                <span className="text-sm text-muted-foreground">
                  Suivez-moi :{" "}
                </span>
                {[
                  { icon: FaGithub, href: "https://github.com/Isabel64450"},
                  {
                    icon: FaLinkedin,
                    href: "https://www.linkedin.com/in/maria-dumas",
                  },
               
                ].map((social, i) => (
                  <a
                    key={i}
                    href={social.href}
                    className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300"
                  >
                    {<social.icon className="w-5 h-5" />}
                  </a>
                ))}
              </div>
            </div>
          
            <div className="relative animate-fade-in animation-delay-300">
             
              <div className="relative max-w-md mx-auto">
                <div
                  className="absolute inset-0 rounded-3xl bg-linear-to-br
                                from-primary/30 via-transparent to primary/10
                                blur-2xl animate-pulse"
                />
                <div className="relative glass rounded-3xl p-2 glow-border">
                  <img
                    src="projectImages/Frida.png"
                    alt="photo de profil"
                    className="w-full aspect-[4/5] object-cover rounded-2xl"
                  />
                 
                  <div className="absolute -bottom-10 -right-4 glass rounded-xl px-4 py-3 animate-float">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-[#B0C4B1] rounded-full animate-pulse" />
                      <span className="text-sm font-medium">
                        Disponible pour de nouvelles opportunités
                      </span>
                    </div>
                  </div>
                 
                  
                </div>
              </div>
            </div>
          </div>
         
          <div className="mt-20 animate-fade-in animation-delay-600">
            <p className="text-sm text-muted-foreground mb-6 text-center">
                Technologie pratiqués
            </p>
            <div className="relative overflow-hidden">
              <div className="flex animate-marquee">
                {[...skills, ...skills].map((skill, id) => (
                <div key={id} className="shrink-0 px-8 py-4 ">
                    <span className="text-xl font-semibold text-muted-foreground/50 hover:text-secondary-foreground transition-colors">
                        {skill}
                    </span>
                </div>
              ))}
              </div>
            </div>
          </div>
        </div>
       
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 
                        animate-fade-in animation-delay-800">
            <a 
                href="#about"
                className="flex flex-col items-center gap-2 text-secondary-foreground
                           hover:text-primary transition-colors"
            >
                <span className="text-xs uppercase tracking-wider">Scroll</span>
                <ChevronDown className="w-6 h-6 animate-bounce" />
            </a>
        </div>
      </section>
  )
}

export default Hero
