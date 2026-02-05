import { Link } from "wouter";
import { Menu, X, Phone, Calendar } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Gallery", href: "#gallery" },
    { name: "Contact", href: "#contact" },
  ];

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    if (id === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass-nav py-3" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link 
          href="/" 
          className={`font-display font-bold text-2xl md:text-3xl tracking-tight transition-colors ${
            isScrolled ? "text-foreground" : "text-foreground md:text-white" // White text on hero when top
          }`}
        >
          Yvonne<span className="text-primary">.</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.href)}
              className={`text-sm font-medium hover:text-primary transition-colors ${
                isScrolled ? "text-foreground" : "text-white/90 hover:text-white"
              }`}
            >
              {link.name}
            </button>
          ))}
          <Button 
            className="bg-primary hover:bg-primary/90 text-white rounded-full px-6 shadow-lg shadow-primary/20"
            onClick={() => scrollToSection("#contact")}
          >
            Book Now
          </Button>
        </div>

        {/* Mobile Nav */}
        <div className="md:hidden flex items-center gap-4">
          <a href="tel:0676578757" className={`p-2 rounded-full ${isScrolled ? "bg-primary/10 text-primary" : "bg-white/20 text-white"}`}>
            <Phone className="w-5 h-5" />
          </a>
          
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className={isScrolled ? "text-foreground" : "text-white"}>
                <Menu className="w-6 h-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] bg-background/95 backdrop-blur-xl border-l border-border/50">
              <div className="flex flex-col gap-8 mt-10">
                <div className="flex flex-col gap-4">
                  {navLinks.map((link) => (
                    <button
                      key={link.name}
                      onClick={() => scrollToSection(link.href)}
                      className="text-2xl font-display font-medium text-left hover:text-primary transition-colors"
                    >
                      {link.name}
                    </button>
                  ))}
                </div>
                <div className="h-px bg-border/50" />
                <div className="flex flex-col gap-4">
                  <Button className="w-full bg-primary text-white rounded-full py-6 text-lg" onClick={() => scrollToSection("#contact")}>
                    Book Appointment
                  </Button>
                  <a href="tel:0676578757" className="w-full">
                    <Button variant="outline" className="w-full rounded-full py-6 text-lg border-foreground/10">
                      Call Now
                    </Button>
                  </a>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
