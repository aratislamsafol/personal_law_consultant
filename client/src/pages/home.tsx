import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import { CounterSection } from "@/components/counter-section";
import { ServicesSection } from "@/components/services-section";
import { TeamSection } from "@/components/team-section";
import { ProcessSection } from "@/components/process-section";
import { BrandMarquee } from "@/components/brand-marquee";
import { CaseStudiesSection } from "@/components/case-studies-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen" data-testid="page-home">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <CounterSection />
        <ServicesSection />
        <TeamSection />
        <ProcessSection />
        <BrandMarquee />
        <CaseStudiesSection />
        <TestimonialsSection />
      </main>
      <Footer />
    </div>
  );
}
