import { Quote } from "lucide-react";

const SocialProofSection = () => {
  return (
    <section className="py-24 bg-card">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <div className="w-16 h-px bg-primary mx-auto" />
            <h2 className="text-3xl md:text-4xl font-display font-bold">
              Professional Trust Built Through{" "}
              <span className="text-gold-gradient italic">Results and Reputation</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { stat: "15+", label: "Years of Criminal Defense Experience" },
              { stat: "500+", label: "Complex Cases Handled" },
              { stat: "24/7", label: "Urgent Defense Availability" },
            ].map((item) => (
              <div key={item.label} className="text-center space-y-2 p-8 border border-border rounded-sm">
                <div className="text-4xl font-display font-bold text-gold-gradient">{item.stat}</div>
                <p className="text-muted-foreground text-sm">{item.label}</p>
              </div>
            ))}
          </div>

          <div className="relative max-w-2xl mx-auto text-center p-8 border border-primary/20 rounded-sm">
            <Quote className="w-8 h-8 text-primary/30 mx-auto mb-4" />
            <p className="text-lg text-foreground italic font-display leading-relaxed">
              "Strategic defense with technical precision and discretion."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;
