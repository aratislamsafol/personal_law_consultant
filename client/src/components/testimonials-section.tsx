import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Quote, Star, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { useTestimonials } from "@/lib/api-hooks";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { TestimonialsSkeleton } from "@/components/loading-skeleton";
import testimonialImage1 from "@assets/stock_images/professional_busines_06595957.jpg";
import testimonialImage2 from "@assets/stock_images/professional_busines_338c1319.jpg";
import testimonialImage3 from "@assets/stock_images/professional_busines_4d1800af.jpg";

const localImages: Record<string, string> = {
  "/images/testimonials/testimonial-1.jpg": testimonialImage1,
  "/images/testimonials/testimonial-2.jpg": testimonialImage2,
  "/images/testimonials/testimonial-3.jpg": testimonialImage3,
};

export function TestimonialsSection() {
  const { ref, isVisible } = useScrollReveal();
  const { data: testimonials, isLoading, error } = useTestimonials();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const getImage = (apiPath: string) => localImages[apiPath] || apiPath;

  useEffect(() => {
    if (!testimonials || testimonials.length === 0) return;
    
    const timer = setInterval(() => {
      handleNext();
    }, 8000);

    return () => clearInterval(timer);
  }, [currentIndex, testimonials]);

  const handleNext = () => {
    if (isAnimating || !testimonials) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const handlePrev = () => {
    if (isAnimating || !testimonials) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const currentTestimonial = testimonials?.[currentIndex];

  return (
    <section
      ref={ref}
      className={`py-20 lg:py-32 bg-background reveal-section ${isVisible ? "visible" : ""}`}
      data-testid="testimonials-section"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-8 bg-primary" />
            <span className="text-primary font-medium tracking-wider uppercase text-sm">
              Client Testimonials
            </span>
            <div className="h-px w-8 bg-primary" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-foreground">
            What Our Clients Say
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          {isLoading && <TestimonialsSkeleton />}

          {error && (
            <div className="flex flex-col items-center justify-center py-12 text-muted-foreground">
              <AlertCircle className="w-12 h-12 mb-4" />
              <p>Failed to load testimonials.</p>
            </div>
          )}

          {currentTestimonial && (
            <>
              <div className="relative">
                <Quote className="absolute -top-4 -left-4 w-16 h-16 text-primary/20" />
                
                <div
                  key={currentTestimonial.id}
                  className={`text-center px-8 py-6 ${isAnimating ? "animate-fade-in" : ""}`}
                >
                  <div className="flex justify-center mb-6">
                    <Avatar className="w-20 h-20 border-4 border-primary/20" data-testid="img-testimonial">
                      <AvatarImage 
                        src={getImage(currentTestimonial.image)} 
                        alt={currentTestimonial.name} 
                      />
                      <AvatarFallback className="text-2xl font-serif">
                        {currentTestimonial.name.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                  </div>

                  <div className="flex justify-center gap-1 mb-6">
                    {[...Array(currentTestimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-primary fill-primary" />
                    ))}
                  </div>

                  <p className="text-lg sm:text-xl text-muted-foreground italic leading-relaxed mb-8" data-testid="text-testimonial-content">
                    "{currentTestimonial.content}"
                  </p>

                  <h4 className="font-serif font-semibold text-xl text-foreground" data-testid="text-testimonial-name">
                    {currentTestimonial.name}
                  </h4>
                  <p className="text-muted-foreground" data-testid="text-testimonial-role">
                    {currentTestimonial.role}
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-center gap-4 mt-10">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={handlePrev}
                  data-testid="button-testimonial-prev"
                >
                  <ChevronLeft className="w-5 h-5" />
                </Button>

                <div className="flex gap-2">
                  {testimonials?.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={`w-2.5 h-2.5 rounded-full transition-all ${
                        index === currentIndex
                          ? "bg-primary w-6"
                          : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                      }`}
                      data-testid={`button-testimonial-dot-${index}`}
                    />
                  ))}
                </div>

                <Button
                  variant="outline"
                  size="icon"
                  onClick={handleNext}
                  data-testid="button-testimonial-next"
                >
                  <ChevronRight className="w-5 h-5" />
                </Button>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
