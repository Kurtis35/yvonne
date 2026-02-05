import { Instagram, Facebook, MapPin, Phone, Clock } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#1A1A1A] text-white pt-24 pb-12 rounded-t-[3rem] mt-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <h2 className="font-display text-4xl font-bold">Yvonne<span className="text-primary">.</span></h2>
            <p className="text-white/60 leading-relaxed max-w-xs">
              Experience the pinnacle of hair care and styling in Nomzamo. Luxury, elegance, and confidence in every strand.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-display text-xl font-semibold mb-6">Services</h3>
            <ul className="space-y-4 text-white/60">
              <li><a href="#services" className="hover:text-primary transition-colors">Professional Braiding</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Custom Wigs & Weaves</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Hair Treatments</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Bridal Styling</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Natural Hair Care</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-display text-xl font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4 text-white/60">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-1" />
                <span>12 Michael St, Nomzamo,<br />Cape Town, 7140</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <a href="tel:0676578757" className="hover:text-white transition-colors">067 657 8757</a>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-primary shrink-0" />
                <span>Open Mon - Sat: 9am - 7pm</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-display text-xl font-semibold mb-6">Find Us</h3>
            <div className="h-48 rounded-xl overflow-hidden bg-white/5">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.673834273822!2d18.8687289!3d-34.1132177!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcdb5f47a177353%3A0x6735939223707833!2s12%20Michael%20St%2C%20Nomzamo%2C%20Cape%20Town%2C%207140%2C%20South%20Africa!5e0!3m2!1sen!2sus!4v1709669675203!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/40">
          <p>&copy; {new Date().getFullYear()} Yvonne Hair Salon. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
