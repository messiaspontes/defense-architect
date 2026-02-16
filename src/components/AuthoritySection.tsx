import { Gavel, Building2, Search, Clock, ShieldAlert } from "lucide-react";

const areas = [
  { icon: Gavel, title: "Preventive Arrest & Habeas Corpus" },
  { icon: Building2, title: "Financial and Corporate Criminal Law" },
  { icon: Search, title: "Complex Investigations" },
  { icon: Clock, title: "Custody Hearings and Urgent Defense" },
  { icon: ShieldAlert, title: "Strategic Crisis Management" },
];

const AuthoritySection = () => {
  return (
    <section className="py-24 bg-card">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="space-y-6">
            <div className="w-16 h-px bg-primary" />
            <h2 className="text-3xl md:text-4xl font-display font-bold leading-tight">
              Defense Built on Strategy —{" "}
              <span className="text-gold-gradient italic">Not Volume</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
              Messias Pontes Advocacia operates with a focused portfolio of cases, prioritizing quality over quantity. Each defense is structured with analytical depth, procedural intelligence, and careful positioning before authorities and courts.
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
