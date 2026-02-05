import { motion } from "framer-motion";
import { type Service } from "@shared/schema";
import { ArrowRight, Scissors, Sparkles, User, Palette, Crown } from "lucide-react";

const icons: Record<string, any> = {
  "Braiding": Crown,
  "Weaves": User,
  "Wigs": Sparkles,
  "Treatment": Palette,
  "Styling": Scissors,
};

export function ServiceCard({ service, index }: { service: Service; index: number }) {
  const Icon = icons[service.category] || Sparkles;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group relative bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl hover:shadow-primary/10 transition-all duration-500 border border-border/40"
    >
      <div className="aspect-[4/3] overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10 opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
        
        {service.imageUrl ? (
          <img
            src={service.imageUrl}
            alt={service.name}
            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
          />
        ) : (
          <div className="w-full h-full bg-secondary/30 flex items-center justify-center">
            <Icon className="w-16 h-16 text-primary/40" />
          </div>
        )}
        
        <div className="absolute top-4 right-4 z-20 bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase text-foreground shadow-sm">
          {service.category}
        </div>
      </div>

      <div className="p-8 relative">
        <h3 className="font-display text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
          {service.name}
        </h3>
        <p className="text-muted-foreground text-sm mb-6 line-clamp-2">
          {service.description}
        </p>
        
        <div className="flex items-center justify-between pt-4 border-t border-border/50">
          <span className="font-display font-semibold text-lg text-primary">
            {service.price}
          </span>
          <button className="w-10 h-10 rounded-full bg-secondary/50 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300">
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}
