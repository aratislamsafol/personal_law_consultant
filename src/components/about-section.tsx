import { useEffect } from "react";
import { Check, ArrowRight, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useDataStore } from "@/stores/data-store";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { AboutSkeleton } from "@/components/loading-skeleton";
import aboutImage1 from "@assets/stock_images/attorney_lawyer_meet_7b9f60e8.jpg";
import aboutImage2 from "@assets/stock_images/attorney_lawyer_meet_586a7e16.jpg";
import aboutImage3 from "@assets/stock_images/modern_law_office_in_7183b75a.jpg";

const aboutImages = {
  main: aboutImage1,
  secondary: aboutImage2,
  tertiary: aboutImage3,
};

export function AboutSection() {
  const { ref, isVisible } = useScrollReveal();
  const { aboutFeatures, isLoading, errors, fetchAboutFeatures } = useDataStore();
  
  const isLoadingAbout = isLoading.aboutFeatures;
  const error = errors.aboutFeatures;

  useEffect(() => {
    if (aboutFeatures.length === 0) {
      fetchAboutFeatures();
    }
  }, [aboutFeatures.length, fetchAboutFeatures]);

  return (
    <section 
      ref={ref}
      className={`py-20 lg:py-32 bg-background reveal-section ${isVisible ? "visible" : ""}`}
      data-testid="about-section"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="relative">
            <div className="relative">
              <div className="relative z-10">
                <img
                  src={aboutImages.main}
                  alt="Legal team meeting"
                  className="rounded-md w-full max-w-md object-cover aspect-[4/3]"
                  data-testid="img-about-main"
                />
              </div>
              
              <div className="absolute -bottom-8 -right-8 z-20 hidden md:block">
                <img
                  src={aboutImages.secondary}
                  alt="Attorney consultation"
                  className="rounded-md w-48 h-64 object-cover border-4 border-background shadow-xl"
                  data-testid="img-about-secondary"
                />
              </div>

              <div className="absolute -top-4 -right-4 hidden lg:block">
                <img
                  src={aboutImages.tertiary}
                  alt="Law office"
                  className="rounded-md w-32 h-40 object-cover border-4 border-background shadow-lg"
                  data-testid="img-about-tertiary"
                />
              </div>

              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-primary/10 rounded-md -z-10" />
              <div className="absolute -top-4 right-16 w-16 h-16 bg-primary/10 rounded-md -z-10" />
            </div>
          </div>

          <div className="lg:pl-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-primary" />
              <span className="text-primary font-medium tracking-wider uppercase text-sm">
                About Us
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-foreground leading-tight mb-6">
              A Legacy of Legal Excellence
            </h2>

            <p className="text-muted-foreground text-lg mb-8">
              Our team of experienced attorneys has a diverse range of expertise, 
              covering a wide spectrum of legal areas. We specialize in corporate law, 
              family law, criminal defense, and much more, ensuring comprehensive 
              legal solutions for all your needs.
            </p>

            {isLoadingAbout && <AboutSkeleton />}

            {error && (
              <div className="flex items-center gap-2 text-muted-foreground mb-8">
                <AlertCircle className="w-5 h-5" />
                <p>Failed to load features.</p>
              </div>
            )}

            {aboutFeatures && (
              <ul className="space-y-4 mb-8">
                {aboutFeatures.map((feature) => (
                  <li key={feature.id} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                      <Check className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-foreground">{feature.text}</span>
                  </li>
                ))}
              </ul>
            )}

            <Button className="gap-2" data-testid="button-about-more">
              More About Us
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
