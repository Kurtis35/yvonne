import { Link } from "wouter";
import { motion } from "framer-motion";
import { 
  Phone, 
  Instagram, 
  Facebook, 
  Clock, 
  MapPin, 
  Star, 
  MessageCircle,
  Menu,
  X,
  ChevronRight
} from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const SERVICES = [
  {
    id: 1,
    name: "Luxury Braids",
    category: "Braiding",
    description: "Intricate, neat, and long-lasting box braids, knotless braids, and cornrows.",
    price: "From R450",
    image: "/images/service-braids.jpg"
  },
  {
    id: 2,
    name: "Premium Weaves",
    category: "Weaves",
    description: "Seamless sew-ins and closures using high-quality human hair bundles.",
    price: "From R800",
    image: "/images/service-weaves.jpg"
  },
  {
    id: 3,
    name: "Custom Wigs",
    category: "Wigs",
    description: "Hand-made, customized wig units including installation and styling.",
    price: "From R1200",
    image: "/images/service-wigs.jpg"
  },
  {
    id: 4,
    name: "Deep Treatment",
    category: "Treatment",
    description: "Restorative wash, deep conditioning, and scalp massage for healthy growth.",
    price: "From R250",
    image: "/images/service-treatment.jpg"
  },
  {
    id: 5,
    name: "Bridal Styling",
    category: "Styling",
    description: "Elegant up-dos and styling for weddings and special occasions.",
    price: "From R650",
    image: "/images/service-styling.jpg"
  }
];

const REVIEWS = [
  {
    id: 1,
    name: "Thando M.",
    rating: 5,
    comment: "Absolutely stunning service! Yvonne is a magician with braids. My hair has never looked this good.",
    date: "2 weeks ago"
  },
  {
    id: 2,
    name: "Jessica P.",
    rating: 5,
    comment: "The most professional salon in Nomzamo. The atmosphere is so relaxing and premium.",
    date: "1 month ago"
  },
  {
    id: 3,
    name: "Lerato K.",
    rating: 5,
    comment: "Worth every cent. I felt like a queen leaving the salon. The rose gold interior is beautiful!",
    date: "3 weeks ago"
  }
];

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#1A1A1A] font-sans selection:bg-[#B76E79]/20">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-[#FDFBF7]/80 backdrop-blur-md border-b border-[#E6D2C4]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-serif font-bold tracking-tight text-[#1A1A1A]">
                YVONNE <span className="text-[#B76E79]">HAIR</span>
              </span>
            </div>
            
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {["Home", "Services", "About", "Reviews", "Contact"].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="text-sm font-medium hover:text-[#B76E79] transition-colors"
                  >
                    {item}
                  </button>
                ))}
                <Button 
                  onClick={() => window.open('https://wa.me/27676578757', '_blank')}
                  className="bg-[#B76E79] hover:bg-[#A65D68] text-white rounded-full px-6"
                >
                  Book Now
                </Button>
              </div>
            </div>

            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2">
                {isMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-[#FDFBF7] border-b border-[#E6D2C4]/30 px-4 pt-2 pb-6 space-y-2"
          >
            {["Home", "Services", "About", "Reviews", "Contact"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="block w-full text-left px-3 py-2 text-base font-medium"
              >
                {item}
              </button>
            ))}
            <Button 
              onClick={() => window.open('https://wa.me/27676578757', '_blank')}
              className="w-full bg-[#B76E79] text-white mt-4"
            >
              Book Now
            </Button>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/hero-salon.jpg" 
            alt="Luxury Salon" 
            className="w-full h-full object-cover brightness-50"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-[#FDFBF7]" />
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Badge className="mb-6 bg-[#B76E79]/20 text-[#B76E79] border-[#B76E79]/30 backdrop-blur-sm px-4 py-1 rounded-full uppercase tracking-widest text-xs">
              Luxury Hair Experience
            </Badge>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-6 leading-tight">
              Where Beauty <span className="italic">Begins</span>
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
              Step into a world of elegance and African luxury. Nomzamo's premier destination for confidence-boosting hair transformations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                onClick={() => window.open('https://wa.me/27676578757', '_blank')}
                className="bg-[#B76E79] hover:bg-[#A65D68] text-white text-lg px-10 h-14 rounded-full shadow-lg"
              >
                Book Appointment
              </Button>
              <Button 
                size="lg"
                variant="outline"
                onClick={() => window.location.href = 'tel:0676578757'}
                className="bg-white/10 hover:bg-white/20 text-white border-white/30 text-lg px-10 h-14 rounded-full backdrop-blur-sm shadow-lg"
              >
                Call Now
              </Button>
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50"
        >
          <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent mx-auto" />
        </motion.div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">Our Services</h2>
          <div className="w-24 h-1 bg-[#B76E79] mx-auto mb-6 rounded-full" />
          <p className="text-[#1A1A1A]/60 max-w-2xl mx-auto text-lg">
            Experience the finest in hair care and styling, tailored specifically for you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden border-none bg-white shadow-sm hover:shadow-xl transition-all duration-300 group rounded-2xl">
                <div className="relative h-72 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
                  <div className="absolute bottom-4 left-4">
                    <Badge className="bg-white/90 text-[#1A1A1A] backdrop-blur-sm">
                      {service.category}
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-8">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-serif font-bold">{service.name}</h3>
                    <span className="text-[#B76E79] font-bold text-lg">{service.price}</span>
                  </div>
                  <p className="text-[#1A1A1A]/60 leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <Button 
                    variant="ghost" 
                    className="p-0 hover:bg-transparent text-[#B76E79] group flex items-center"
                    onClick={() => window.open('https://wa.me/27676578757', '_blank')}
                  >
                    Learn More <ChevronRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-[#E6D2C4]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
                <img src="/images/hero-salon.jpg" alt="Salon Interior" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-10 -right-10 w-64 h-64 rounded-2xl overflow-hidden shadow-2xl hidden md:block border-8 border-[#FDFBF7]">
                <img src="/images/service-styling.jpg" alt="Styling" className="w-full h-full object-cover" />
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8">Elevating Beauty in <span className="text-[#B76E79]">Nomzamo</span></h2>
              <div className="space-y-6 text-lg text-[#1A1A1A]/70 font-light leading-relaxed">
                <p>
                  Yvonne Hair Salon is more than just a styling destination; it's a sanctuary where African heritage meets modern luxury. Located in the heart of Nomzamo, Cape Town, we pride ourselves on delivering exceptional hair care that boosts your confidence.
                </p>
                <p>
                  Our expert stylists are dedicated to the art of hair, specializing in everything from traditional braiding to the latest in wig customization and restorative treatments. We use only premium products to ensure your hair remains healthy, vibrant, and beautiful.
                </p>
              </div>
              <div className="mt-12 grid grid-cols-3 gap-8">
                <div>
                  <div className="text-3xl font-serif font-bold text-[#B76E79]">10+</div>
                  <div className="text-sm text-[#1A1A1A]/50 uppercase tracking-wider">Years Experience</div>
                </div>
                <div>
                  <div className="text-3xl font-serif font-bold text-[#B76E79]">5k+</div>
                  <div className="text-sm text-[#1A1A1A]/50 uppercase tracking-wider">Happy Clients</div>
                </div>
                <div>
                  <div className="text-3xl font-serif font-bold text-[#B76E79]">100%</div>
                  <div className="text-sm text-[#1A1A1A]/50 uppercase tracking-wider">Satisfaction</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">Client Love</h2>
          <div className="flex justify-center items-center gap-2 mb-6 text-[#B76E79]">
            {[...Array(5)].map((_, i) => <Star key={i} className="fill-current w-6 h-6" />)}
            <span className="text-[#1A1A1A] font-bold ml-2">5.0 (9 Reviews)</span>
          </div>
          <p className="text-[#1A1A1A]/60 max-w-2xl mx-auto text-lg italic font-light">
            "Your hair is the crown you never take off. We make sure it shines."
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {REVIEWS.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border border-[#E6D2C4]/30 bg-white/50 backdrop-blur-sm p-8 rounded-2xl hover:bg-white transition-colors">
                <div className="flex gap-1 text-[#B76E79] mb-6">
                  {[...Array(review.rating)].map((_, i) => <Star key={i} className="fill-current w-4 h-4" />)}
                </div>
                <p className="text-lg text-[#1A1A1A]/80 mb-8 font-light italic leading-relaxed">
                  "{review.comment}"
                </p>
                <div className="mt-auto pt-6 border-t border-[#E6D2C4]/20 flex justify-between items-center">
                  <span className="font-bold">{review.name}</span>
                  <span className="text-sm text-[#1A1A1A]/40">{review.date}</span>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-[#1A1A1A] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl font-serif font-bold mb-12">Visit Our <span className="text-[#B76E79]">Sanctuary</span></h2>
              <div className="space-y-10">
                <div className="flex items-start gap-6 group">
                  <div className="w-12 h-12 rounded-full bg-[#B76E79]/10 flex items-center justify-center text-[#B76E79] group-hover:bg-[#B76E79] group-hover:text-white transition-colors duration-300">
                    <MapPin />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Location</h4>
                    <p className="text-white/60 font-light text-lg">12 Michael St, Nomzamo, Cape Town, 7140</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-6 group">
                  <div className="w-12 h-12 rounded-full bg-[#B76E79]/10 flex items-center justify-center text-[#B76E79] group-hover:bg-[#B76E79] group-hover:text-white transition-colors duration-300">
                    <Phone />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Call Us</h4>
                    <p className="text-white/60 font-light text-lg">067 657 8757</p>
                  </div>
                </div>

                <div className="flex items-start gap-6 group">
                  <div className="w-12 h-12 rounded-full bg-[#B76E79]/10 flex items-center justify-center text-[#B76E79] group-hover:bg-[#B76E79] group-hover:text-white transition-colors duration-300">
                    <Clock />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Hours</h4>
                    <p className="text-white/60 font-light text-lg">Mon - Sat: 8:00 AM - 7:00 PM</p>
                    <p className="text-white/60 font-light text-lg">Sun: Closed</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 flex gap-4">
                <Button 
                  size="icon" 
                  variant="outline" 
                  className="rounded-full border-white/20 hover:bg-[#B76E79] hover:border-[#B76E79]"
                >
                  <Instagram className="w-5 h-5" />
                </Button>
                <Button 
                  size="icon" 
                  variant="outline" 
                  className="rounded-full border-white/20 hover:bg-[#B76E79] hover:border-[#B76E79]"
                >
                  <Facebook className="w-5 h-5" />
                </Button>
              </div>
            </div>

            <div className="h-[500px] rounded-2xl overflow-hidden shadow-2xl grayscale hover:grayscale-0 transition-all duration-700 ring-1 ring-white/10">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.619253483034!2d18.868739176313174!3d-34.1206660731301!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcc0288863f847f%3A0xcf7f2b3e8e7a688b!2s12%20Michael%20St%2C%20Nomzamo%2C%20Cape%20Town%2C%207140!5e0!3m2!1sen!2sza!4v1700000000000!5m2!1sen!2sza" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-black text-white/30 text-center border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-sm uppercase tracking-widest font-medium mb-4">Yvonne Hair Salon &copy; {new Date().getFullYear()}</p>
          <p className="text-xs font-light">Crafted for Elegance, Beauty, and Confidence.</p>
        </div>
      </footer>

      {/* Floating Action Buttons */}
      <div className="fixed bottom-8 right-8 flex flex-col gap-4 z-50">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => window.open('https://wa.me/27676578757', '_blank')}
          className="w-14 h-14 bg-[#25D366] text-white rounded-full shadow-2xl flex items-center justify-center"
        >
          <MessageCircle className="w-7 h-7" />
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => window.location.href = 'tel:0676578757'}
          className="md:hidden w-14 h-14 bg-[#B76E79] text-white rounded-full shadow-2xl flex items-center justify-center"
        >
          <Phone className="w-6 h-6" />
        </motion.button>
      </div>
    </div>
  );
}
