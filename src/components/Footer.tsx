import { Scale } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-16 bg-background border-t border-border">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="flex flex-col md:flex-row justify-between items-start gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Scale className="w-6 h-6 text-primary" />
                <span className="font-display font-bold text-xl text-foreground">Messias Pontes</span>
              </div>
              <p className="text-muted-foreground text-sm">
                Criminal Defense Practice
              </p>
              <p className="text-muted-foreground text-sm">
                Rio de Janeiro — Brazil
              </p>
            </div>

            <div className="space-y-3 text-sm text-muted-foreground">
              <p className="font-medium text-foreground">Professional Contact</p>
              <p>contato@messiaspontes.adv.br</p>
              <p>+55 (21) 9xxxx-xxxx</p>
            </div>
          </div>

          <div className="border-t border-border pt-8">
            <p className="text-xs text-muted-foreground leading-relaxed max-w-2xl">
              <strong>Ethical Legal Disclaimer:</strong> Legal services do not guarantee specific results. Each case depends on its own circumstances. This website is for informational purposes only and does not constitute legal advice. All communications are protected by attorney-client privilege.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
