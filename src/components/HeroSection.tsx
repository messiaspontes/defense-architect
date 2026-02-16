import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-lawyer.jpg";
import { Shield, Eye, Scale } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-navy-radial overflow-hidden">
      {/* Subtle gold line accent */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      
      <div className="container mx-auto px-6 lg:px-16 grid lg:grid-cols-2 gap-12 items-center py-20">
        {/* Left: Copy */}
        <div className="space-y-8 animate-fade-up">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight text-foreground">
              Strategic Criminal Defense for Those Who{" "}
              <span className="text-gold-gradient italic">Can't Afford Mistakes</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl">
              Investigations, arrests, complex accusations or financial crimes demand immediate, precise legal strategy — not improvisation.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="hero" size="lg" className="text-base px-8 py-6">
              👉 Request Confidential Legal Assessment
            </Button>
            <Button variant="hero-outline" size="lg" className="text-base px-8 py-6">
              Speak to the Office Now
            </Button>
          </div>

          {/* Trust signals */}
          <div className="flex flex-col sm:flex-row gap-6 pt-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Shield className="w-4 h-4 text-primary" />
              <span>Criminal Defense Specialist</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Eye className="w-4 h-4 text-primary" />
              <span>Discreet & Strategic</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Scale className="w-4 h-4 text-primary" />
              <span>High-Complexity Cases</span>
            </div>
          </div>
        </div>

        {/* Right: Portrait */}
        <div className="hidden lg:flex justify-end animate-fade-in" style={{ animationDelay: "0.3s" }}>
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-b from-primary/20 to-transparent rounded-sm blur-sm" />
            <img
              src={heroImage}
              alt="Messias Pontes — Criminal Defense Attorney"
              className="relative w-full max-w-md object-cover rounded-sm shadow-2xl"
            />
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
