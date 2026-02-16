import { Scale, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-16 bg-background border-t border-border">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="max-w-5xl mx-auto space-y-10">
          <div className="flex flex-col md:flex-row justify-between items-start gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Scale className="w-6 h-6 text-primary" />
                <span className="font-display font-bold text-xl text-foreground">Messias Pontes</span>
              </div>
              <p className="text-muted-foreground text-sm">
                Advocacia Criminal
              </p>
              <p className="text-primary text-sm font-medium">
                Atendimento virtual 24 horas por dia em todo o Brasil.
              </p>
            </div>

            <div className="space-y-6 text-sm text-muted-foreground">
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-foreground">Rio de Janeiro</p>
                    <p>Av. Rio Branco, nº 131, sala 1703, Centro, Rio de Janeiro/RJ, CEP 20040-006</p>
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-foreground">São Paulo</p>
                    <p>Alameda Santos, nº 771, Cj. 61, Jardim Paulista, São Paulo/SP, CEP 01419-001</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-border pt-8">
            <p className="text-xs text-muted-foreground leading-relaxed max-w-3xl">
              <strong>Aviso Legal:</strong> Os serviços jurídicos não garantem resultados específicos. Cada caso depende de suas próprias circunstâncias. Este site tem finalidade informativa e não constitui aconselhamento jurídico. Todas as comunicações são protegidas pelo sigilo profissional advogado-cliente.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;