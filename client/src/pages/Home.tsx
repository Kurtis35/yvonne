import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ServiceCard } from "@/components/ServiceCard";
import { BookingForm } from "@/components/BookingForm";
import { useServices } from "@/hooks/use-services";
import { useReviews } from "@/hooks/use-reviews";
import { Button } from "@/components/ui/button";
import { Phone, Star, MessageCircle } from "lucide-react";

// Animation variants
const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Home() {
  const { data: services, isLoading: isLoadingServices } = useServices();
  const { data: reviews } = useReviews();

  // Group services by category if needed, or just display them
  const featuredServices = services || [];

  return (
    <div className="min-h-screen bg-background font-body text-foreground overflow-x-hidden">
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          {/* Using Unsplash image for luxury salon interior */}
          {/* descriptive comment: Luxury modern salon interior with soft lighting and elegant decor */}
          <img 
            src="https://images.unsplash.com/photo-1600948836101-f9ffda59d250?q=80&w=2036&auto=format&fit=crop" 
            alt="Luxury Salon Interior" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px]" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        </div>

        <div className="container relative z-10 px-4 md:px-6 text-center text-white mt-16">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-block px-4 py-1.5 rounded-full border border-white/20 bg-white/10 backdrop-blur-md text-sm font-medium tracking-widest uppercase mb-6"
          >
            Nomzamo's Premier Luxury Salon
          </motion.span>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
          >
            Where Beauty <br />
            <span className="text-primary italic">Begins</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed font-light"
          >
            Experience world-class hair styling, treatments, and beauty care tailored to enhance your confidence and natural elegance.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button 
              className="w-full sm:w-auto min-w-[180px] h-14 rounded-full bg-primary hover:bg-primary/90 text-white text-lg font-medium shadow-xl shadow-primary/30 transition-all hover:scale-105"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Book Appointment
            </Button>
            <a href="tel:0676578757" className="w-full sm:w-auto">
              <Button 
                variant="outline" 
                className="w-full sm:w-auto min-w-[180px] h-14 rounded-full border-white/30 text-white bg-white/5 backdrop-blur-sm hover:bg-white hover:text-black text-lg font-medium transition-all"
              >
                Call Now
              </Button>
            </a>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50"
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-white/0 via-white/50 to-white/0" />
        </motion.div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-secondary/20 skew-x-12 transform origin-top-right -z-10" />
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="lg:w-1/2 relative"
            >
              <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl">
                {/* descriptive comment: Close up portrait of beautiful african woman with intricate braids */}
                <img 
                  src="https://images.unsplash.com/photo-1584297091622-af8e55da216b?q=80&w=1000&auto=format&fit=crop" 
                  alt="Beautiful Styling" 
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 w-2/3 h-2/3 border-2 border-primary/30 rounded-[3rem] -z-10" />
              <div className="absolute -top-8 -left-8 w-32 h-32 bg-secondary rounded-full blur-3xl -z-10" />
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="lg:w-1/2"
            >
              <span className="text-primary font-bold tracking-wider uppercase text-sm mb-4 block">About Yvonne</span>
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">Redefining African <br />Luxury & Elegance</h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                At Yvonne Hair Salon, we believe your hair is your crowning glory. Located in the heart of Nomzamo, we bring high-end salon experiences to our community. 
                Our expert stylists specialize in protective styling, modern wigs, and hair health, ensuring you leave not just looking beautiful, but feeling empowered.
              </p>
              
              <div className="grid grid-cols-2 gap-8 mb-10">
                <div>
                  <h4 className="font-display text-3xl font-bold text-foreground mb-1">5+</h4>
                  <p className="text-sm text-muted-foreground">Years Experience</p>
                </div>
                <div>
                  <h4 className="font-display text-3xl font-bold text-foreground mb-1">1k+</h4>
                  <p className="text-sm text-muted-foreground">Happy Clients</p>
                </div>
              </div>

              <div className="flex gap-4">
                <Button variant="outline" className="rounded-full px-8 border-foreground/10 hover:bg-foreground hover:text-white transition-colors">
                  Read Our Story
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section id="services" className="py-24 bg-secondary/30 relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-primary font-bold tracking-wider uppercase text-sm mb-4 block">Our Expertise</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">Premium Services</h2>
            <p className="text-muted-foreground">From intricate braiding to custom wigs, explore our range of professional hair services designed for the modern woman.</p>
          </div>

          {isLoadingServices ? (
            <div className="flex justify-center items-center py-20">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredServices.map((service, index) => (
                <ServiceCard key={service.id} service={service} index={index} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* REVIEWS SECTION */}
      <section className="py-24 bg-foreground text-white overflow-hidden relative">
        {/* Background decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-20 left-20 w-64 h-64 rounded-full bg-primary blur-[100px]" />
          <div className="absolute bottom-20 right-20 w-80 h-80 rounded-full bg-blue-500 blur-[120px]" />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <span className="text-primary font-bold tracking-wider uppercase text-sm mb-4 block">Testimonials</span>
              <h2 className="font-display text-4xl md:text-5xl font-bold">Client Love</h2>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/10">
              <div className="flex gap-1 text-yellow-400">
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
              </div>
              <span className="font-medium ml-2">5.0 Rating</span>
              <span className="text-white/50 text-sm">(9 Reviews)</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews?.slice(0, 3).map((review, i) => (
              <motion.div
                key={review.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors"
              >
                <div className="flex gap-1 text-primary mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-white/80 leading-relaxed mb-6 italic">"{review.comment}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-primary to-purple-500 flex items-center justify-center font-bold text-white">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-medium">{review.name}</h4>
                    <span className="text-xs text-white/40">{review.date}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT & BOOKING SECTION */}
      <section id="contact" className="py-24 relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-primary font-bold tracking-wider uppercase text-sm mb-4 block">Get in Touch</span>
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">Ready for your transformation?</h2>
              <p className="text-muted-foreground text-lg mb-8">
                Whether you know exactly what you want or need a consultation, we're here to help you look your absolute best.
              </p>

              <div className="space-y-6 mb-10">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-primary shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Call Us</h4>
                    <p className="text-muted-foreground mb-1">Mon-Sat from 9am to 7pm</p>
                    <a href="tel:0676578757" className="text-xl font-display font-bold hover:text-primary transition-colors">067 657 8757</a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-primary shrink-0">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">WhatsApp Us</h4>
                    <p className="text-muted-foreground mb-1">Quick responses for bookings</p>
                    <a 
                      href="https://wa.me/27676578757" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-xl font-display font-bold hover:text-primary transition-colors"
                    >
                      Chat on WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <BookingForm />
          </div>
        </div>
      </section>

      <Footer />

      {/* Sticky WhatsApp Button */}
      <a
        href="https://wa.me/27676578757"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 flex items-center gap-2 group"
      >
        <MessageCircle className="w-6 h-6" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 font-medium whitespace-nowrap">
          Book on WhatsApp
        </span>
      </a>
    </div>
  );
}
