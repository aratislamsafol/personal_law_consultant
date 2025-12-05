import { ArrowRight, Shield, Building, Heart, Home, Activity, HeartPulse, AlertCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useServices } from "@/lib/api-hooks";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { ServicesSkeleton } from "@/components/loading-skeleton";

const iconMap: Record<string, typeof Shield> = {
  shield: Shield,
  building: Building,
  heart: Heart,
  home: Home,
  activity: Activity,
  "heart-pulse": HeartPulse,
};

export function ServicesSection() {
  const { ref, isVisible } = useScrollReveal();
  const { data: services, isLoading, error } = useServices();

  return (
    <section
      ref={ref}
      className={`py-20 lg:py-32 bg-background reveal-section ${isVisible ? "visible" : ""}`}
      data-testid="services-section"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-8 bg-primary" />
            <span className="text-primary font-medium tracking-wider uppercase text-sm">
              What We Do
            </span>
            <div className="h-px w-8 bg-primary" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-foreground">
            Legal Services We Offer
          </h2>
        </div>

        {isLoading && <ServicesSkeleton />}

        {error && (
          <div className="flex flex-col items-center justify-center py-12 text-muted-foreground">
            <AlertCircle className="w-12 h-12 mb-4" />
            <p>Failed to load services. Please try again later.</p>
          </div>
        )}

        {services && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {services.map((service, index) => {
              const Icon = iconMap[service.icon] || Shield;
              return (
                <Card
                  key={service.id}
                  className="group relative overflow-visible border-border/50 hover:border-primary/30 transition-all duration-300"
                  style={{ animationDelay: `${index * 100}ms` }}
                  data-testid={`card-service-${service.id}`}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-md" />
                  
                  <CardContent className="p-6 lg:p-8 relative">
                    <div className="w-14 h-14 rounded-md bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                      <Icon className="w-7 h-7 text-primary" />
                    </div>

                    <h3 className="text-xl font-serif font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>

                    <p className="text-muted-foreground mb-4 line-clamp-3">
                      {service.description}
                    </p>

                    <button 
                      className="flex items-center gap-2 text-primary font-medium text-sm group/btn"
                      data-testid={`button-service-${service.id}`}
                    >
                      Read More
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
