import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-lawyer.jpg";
import { Shield, Eye, Scale } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/message/IYN4KJNS3TGXM1";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-navy-radial overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      
      <div className="container mx-auto px-6 lg:px-16 grid lg:grid-cols-[1fr_auto] gap-12 items-center py-20">
        <div className="space-y-8 animate-fade-up relative z-10">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight text-foreground">
              Defesa criminal estratégica para quem{" "}
              <span className="text-gold-gradient italic">só tem uma chance</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl">
              Investigações, prisões, acusações complexas ou crimes financeiros exigem estratégia jurídica imediata e precisa — não improvisação.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              <Button variant="hero" size="lg" className="text-base px-8 py-6 w-full sm:w-auto">
                👉 Falar com um advogado criminalista
              </Button>
            </a>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              <Button variant="hero-outline" size="lg" className="text-base px-8 py-6 w-full sm:w-auto">
                Fale com o Escritório Agora
              </Button>
            </a>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 pt-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Shield className="w-4 h-4 text-primary" />
              <span>Especialista em Defesa Criminal</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Eye className="w-4 h-4 text-primary" />
              <span>Atuação Discreta e Estratégica</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Scale className="w-4 h-4 text-primary" />
              <span>Casos de Alta Complexidade</span>
            </div>
          </div>
        </div>

        <div className="hidden lg:flex justify-end animate-fade-in flex-shrink-0" style={{ animationDelay: "0.3s" }}>
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-b from-primary/20 to-transparent rounded-sm blur-sm" />
            <img
              src={heroImage}
              alt="Messias Pontes — Advogado Criminalista"
              className="relative w-72 xl:w-80 object-cover rounded-sm shadow-2xl"
            />
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
