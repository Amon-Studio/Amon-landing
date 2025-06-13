
import { useEffect } from "react";
import ParticleBackground from "@/components/ParticleBackground";

const Home = () => {
  useEffect(() => {
    document.title = "Amon Studio - Premium iOS App Development";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Amon Studio creates premium iOS applications with exceptional design and performance.');
    }
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center pt-16">
      <ParticleBackground />
      
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="space-y-8 animate-fade-in">
          <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tight">
            <span className="block text-gradient glow-effect animate-pulse-glow">
              AMON
            </span>
            <span className="block text-gradient glow-effect animate-pulse-glow" style={{ animationDelay: '0.5s' }}>
              STUDIO
            </span>
          </h1>
          
          <div className="space-y-4 animate-float" style={{ animationDelay: '1s' }}>
            <p className="text-xl md:text-2xl text-muted-foreground font-light max-w-3xl mx-auto leading-relaxed">
              Crafting exceptional iOS experiences with precision, innovation, and uncompromising quality.
            </p>
            
            <div className="flex flex-wrap justify-center gap-2 text-sm text-muted-foreground/80">
              <span className="px-3 py-1 bg-accent/30 rounded-full border border-border/30">iOS Development</span>
              <span className="px-3 py-1 bg-accent/30 rounded-full border border-border/30">Premium Design</span>
              <span className="px-3 py-1 bg-accent/30 rounded-full border border-border/30">Swift Excellence</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </div>
  );
};

export default Home;
