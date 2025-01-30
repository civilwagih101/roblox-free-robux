import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { TrustBadges } from "@/components/TrustBadges";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <Features />
      <TrustBadges />
    </main>
  );
};

export default Index;