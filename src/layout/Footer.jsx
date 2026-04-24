import { Heart } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

const socialLinks = [
  { icon: FaGithub, href: "#", label: "FaGithub" },
  { icon: FaLinkedin, href: "#", label: "FaLinkedin" },

];

const footerLinks = [
  { href: "#about", label: "A propos" },
  { href: "#projects", label: "Projets" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
      <footer className="py-12 border-t border-border">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
   
            <div className="text-center md:text-left">
              <a href="#" className="text-xl font-bold tracking-tight">
                Isabel64450<span className="text-primary">.</span>
              </a>
              <p className="text-sm text-muted-foreground mt-2">
                © {currentYear} Isabel64450. Tous droit réservé
              </p>
            </div>
         
            <nav className="flex flex-wrap justify-center gap-6">
              {footerLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
           
            <div className=" flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  aria-label={social.label}
                >
                  <social.icon />
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    );
}
export default Footer