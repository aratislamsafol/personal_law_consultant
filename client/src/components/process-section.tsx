import { MessageCircle, Search, Target, AlertCircle } from "lucide-react";
import { useProcessSteps } from "@/lib/api-hooks";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { ProcessSkeleton } from "@/components/loading-skeleton";
import processBackgroundImage from "@assets/stock_images/modern_law_office_in_2acbaaf1.jpg";

const iconMap: Record<string, typeof MessageCircle> = {
  "message-circle": MessageCircle,
  search: Search,
  target: Target,
};

export function ProcessSection() {
  const { ref, isVisible } = useScrollReveal();
  const { data: processSteps, isLoading, error } = useProcessSteps();

  return (
    <section
      ref={ref}
      className={`py-20 lg:py-32 bg-background reveal-section ${isVisible ? "visible" : ""}`}
      data-testid="process-section"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="relative order-2 lg:order-1">
            <img
              src={processBackgroundImage}
              alt="Modern law office"
              className="rounded-md w-full object-cover aspect-[4/3]"
              data-testid="img-process-bg"
            />
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/10 rounded-md -z-10" />
          </div>

          <div className="order-1 lg:order-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-primary" />
              <span className="text-primary font-medium tracking-wider uppercase text-sm">
                Work Process
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-foreground leading-tight mb-12">
              Navigating the Law: Your Assurance of Peace
            </h2>

            {isLoading && <ProcessSkeleton />}

            {error && (
              <div className="flex flex-col items-center justify-center py-8 text-muted-foreground">
                <AlertCircle className="w-12 h-12 mb-4" />
                <p>Failed to load process steps.</p>
              </div>
            )}

            {processSteps && (
              <div className="space-y-8">
                {processSteps.map((step, index) => {
                  const Icon = iconMap[step.icon] || MessageCircle;
                  return (
                    <div
                      key={step.id}
                      className="relative flex gap-6"
                      data-testid={`process-step-${step.id}`}
                    >
                      {index < processSteps.length - 1 && (
                        <div className="absolute left-6 top-14 bottom-0 w-px bg-border" />
                      )}

                      <div className="flex-shrink-0 relative z-10">
                        <div className="w-12 h-12 rounded-md bg-primary flex items-center justify-center">
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                      </div>

                      <div className="flex-1 pb-2">
                        <h3 className="text-xl font-serif font-semibold text-foreground mb-2">
                          {step.title}
                        </h3>
                        <p className="text-muted-foreground">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
