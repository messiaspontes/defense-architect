import { Button } from "@/components/ui/button";
import { Lock } from "lucide-react";

const FinalCTASection = () => {
  return (
    <section className="py-24 bg-card relative overflow-hidden">
      <div className="absolute inset-0 bg-navy-radial opacity-50" />
      
      <div className="relative container mx-auto px-6 lg:px-16">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <div className="w-16 h-px bg-primary mx-auto" />
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold leading-tight">
            Cada Decisão Que Você Toma Agora Pode{" "}
            <span className="text-gold-gradient italic">Influenciar o Resultado Depois.</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Se você está enfrentando uma acusação criminal, investigação ou situação jurídica urgente, o melhor momento para agir é antes que o processo defina sua narrativa.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
            <Button variant="hero" size="lg" className="text-base px-8 py-6">
              <Lock className="w-4 h-4 mr-2" />
              Solicitar Consulta Confidencial
            </Button>
            <Button variant="hero-outline" size="lg" className="text-base px-8 py-6">
              WhatsApp — Linha Direta
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;