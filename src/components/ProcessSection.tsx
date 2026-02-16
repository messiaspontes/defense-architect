const steps = [
  {
    number: "01",
    title: "Confidential Analysis",
    description: "Initial review of facts, risks, and procedural stage.",
  },
  {
    number: "02",
    title: "Strategic Positioning",
    description: "Definition of defense thesis and immediate legal measures.",
  },
  {
    number: "03",
    title: "Controlled Communication",
    description: "Guidance on what to say — and what not to say — to authorities.",
  },
  {
    number: "04",
    title: "Continuous Defense Monitoring",
    description: "Procedural follow-up and risk mitigation.",
  },
];

const ProcessSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="max-w-5xl mx-auto space-y-16">
          <div className="text-center space-y-4">
            <div className="w-16 h-px bg-primary mx-auto" />
            <h2 className="text-3xl md:text-4xl font-display font-bold">
              What Happens After{" "}
              <span className="text-gold-gradient italic">You Contact Us</span>
            </h2>
          </div>

          {/* Horizontal timeline */}
          <div className="relative">
            {/* Line */}
            <div className="hidden md:block absolute top-8 left-0 right-0 h-px bg-border" />
            <div className="hidden md:block absolute top-8 left-0 w-1/4 h-px bg-gradient-to-r from-primary to-primary/0" />

            <div className="grid md:grid-cols-4 gap-8">
              {steps.map((step) => (
                <div key={step.number} className="relative space-y-4">
                  {/* Dot */}
                  <div className="relative z-10 w-16 h-16 rounded-full border border-primary/30 bg-background flex items-center justify-center">
                    <span className="text-primary font-display font-bold text-lg">{step.number}</span>
                  </div>
                  <h3 className="font-display font-semibold text-foreground text-lg">{step.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
