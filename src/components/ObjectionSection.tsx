import { CheckCircle, XCircle } from "lucide-react";

const ObjectionSection = () => {
  const suitable = [
    "Valoriza planejamento jurídico estratégico",
    "Precisa de defesa criminal urgente ou complexa",
    "Prefere comunicação direta com o advogado",
  ];

  const notIdeal = [
    "Procura serviços jurídicos em grande volume",
    "Prioriza baixo custo sobre defesa estratégica",
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <div className="w-16 h-px bg-primary mx-auto" />
            <h2 className="text-3xl md:text-4xl font-display font-bold">
              Este É o Escritório{" "}
              <span className="text-gold-gradient italic">Certo para Você?</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 border border-primary/20 rounded-sm space-y-6">
              <h3 className="font-display font-semibold text-foreground text-lg">Este escritório pode ser ideal se você:</h3>
              <div className="space-y-4">
                {suitable.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-secondary-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-8 border border-border rounded-sm space-y-6">
              <h3 className="font-display font-semibold text-muted-foreground text-lg">Este escritório pode não ser ideal se:</h3>
              <div className="space-y-4">
                {notIdeal.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ObjectionSection;