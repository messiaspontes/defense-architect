import { Gavel, Building2, Pill, Users, ShieldAlert } from "lucide-react";

const areas = [
  { icon: Gavel, title: "Direito Penal Geral" },
  { icon: Building2, title: "Crimes Financeiros e Tributários" },
  { icon: Pill, title: "Lei de Tráfico de Drogas" },
  { icon: Users, title: "Organização Criminosa" },
  { icon: ShieldAlert, title: "Lei Maria da Penha" },
];

const AuthoritySection = () => {
  return (
    <section className="py-24 bg-card">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="space-y-6">
            <div className="w-16 h-px bg-primary" />
            <h2 className="text-3xl md:text-4xl font-display font-bold leading-tight">
              Defesa Construída com Estratégia —{" "}
              <span className="text-gold-gradient italic">Não com Volume</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
              Messias Pontes Advocacia opera com um portfólio restrito de casos, priorizando qualidade sobre quantidade. Cada defesa é estruturada com profundidade analítica, inteligência processual e posicionamento criterioso perante autoridades e tribunais.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {areas.map(({ icon: Icon, title }) => (
              <div
                key={title}
                className="group p-6 border border-border rounded-sm bg-background/50 hover:border-primary/40 transition-all duration-300"
              >
                <Icon className="w-6 h-6 text-primary mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="font-display font-semibold text-foreground">{title}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthoritySection;