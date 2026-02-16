import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const PainSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6 lg:px-16 max-w-4xl">
        <div className="space-y-8">
          <div className="w-16 h-px bg-primary mx-auto" />
          <h2 className="text-3xl md:text-4xl font-display font-bold text-center leading-tight">
            When Your Freedom, Reputation or Assets Are at Risk,{" "}
            <span className="text-gold-gradient italic">Timing Is Everything.</span>
          </h2>

          <div className="space-y-6 text-muted-foreground text-lg leading-relaxed text-center max-w-3xl mx-auto">
            <p>
              Most people only look for a criminal lawyer when the situation has already escalated — a police investigation, a preventive arrest, or a summons that arrives without warning.
            </p>
            <p className="text-foreground font-medium">
              The wrong decision in the first hours can define the entire case.
            </p>
            <p>
              This office acts with strategy, discretion, and technical depth to protect what matters most:
            </p>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-8 pt-4">
            {["Your liberty", "Your financial stability", "Your public image"].map((item) => (
              <div key={item} className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-foreground font-medium">{item}</span>
              </div>
            ))}
          </div>

          <div className="text-center pt-6">
            <Button variant="hero-outline" size="lg">
              Understand Your Legal Position Now →
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PainSection;
