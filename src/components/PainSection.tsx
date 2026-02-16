import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const PainSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6 lg:px-16 max-w-4xl">
        <div className="space-y-8">
          <div className="w-16 h-px bg-primary mx-auto" />
          <h2 className="text-3xl md:text-4xl font-display font-bold text-center leading-tight">
            Quando Sua Liberdade, Reputação ou Patrimônio Estão em Risco,{" "}
            <span className="text-gold-gradient italic">o Tempo É Tudo.</span>
          </h2>

          <div className="space-y-6 text-muted-foreground text-lg leading-relaxed text-center max-w-3xl mx-auto">
            <p>
              A maioria das pessoas só procura um advogado criminalista quando a situação já escalou — um inquérito policial, uma prisão preventiva ou uma intimação que chega sem aviso.
            </p>
            <p className="text-foreground font-medium">
              A decisão errada nas primeiras horas pode definir todo o caso.
            </p>
            <p>
              Este escritório atua com estratégia, discrição e profundidade técnica para proteger o que mais importa:
            </p>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-8 pt-4">
            {["Sua liberdade", "Sua estabilidade financeira", "Sua imagem pública"].map((item) => (
              <div key={item} className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-foreground font-medium">{item}</span>
              </div>
            ))}
          </div>

          <div className="text-center pt-6">
            <Button variant="hero-outline" size="lg">
              Entenda Sua Situação Jurídica Agora →
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PainSection;