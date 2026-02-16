import HeroSection from "@/components/HeroSection";
import PainSection from "@/components/PainSection";
import AuthoritySection from "@/components/AuthoritySection";
import ProcessSection from "@/components/ProcessSection";
import ObjectionSection from "@/components/ObjectionSection";
import FinalCTASection from "@/components/FinalCTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <PainSection />
      <AuthoritySection />
      <ProcessSection />
      <ObjectionSection />
      <FinalCTASection />
      <Footer />
    </main>
  );
};

export default Index;