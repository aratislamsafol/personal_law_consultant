import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star, Users, ChevronDown, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useDataStore } from "@/stores/data-store";
import { HeroSkeleton } from "@/components/loading-skeleton";
import heroImage1 from "@assets/stock_images/professional_lawyer__eba13785.jpg";
import heroImage2 from "@assets/stock_images/professional_lawyer__d92a2da9.jpg";
import heroImage3 from "@assets/stock_images/professional_lawyer__e5b52d84.jpg";

const localImages: Record<string, string> = {
  "/images/hero/hero-1.jpg": heroImage1,
  "/images/hero/hero-2.jpg": heroImage2,
  "/images/hero/hero-3.jpg": heroImage3,
};

export function HeroSection() {
  const { heroSlides, isLoading, errors, fetchHeroSlides } = useDataStore();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  
  const isLoadingHero = isLoading.heroSlides;
  const error = errors.heroSlides;

  useEffect(() => {
    if (heroSlides.length === 0) {
      fetchHeroSlides();
    }
  }, [heroSlides.length, fetchHeroSlides]);

  const getImage = (apiPath: string) => localImages[apiPath] || apiPath;

  useEffect(() => {
    if (!heroSlides || heroSlides.length === 0) return;
    
    const timer = setInterval(() => {
      handleNextSlide();
    }, 6000);

    return () => clearInterval(timer);
  }, [currentSlide, heroSlides]);

  const handleNextSlide = () => {
    if (isAnimating || !heroSlides) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    setTimeout(() => setIsAnimating(false), 1000);
  };

  const handlePrevSlide = () => {
    if (isAnimating || !heroSlides) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
    setTimeout(() => setIsAnimating(false), 1000);
  };

  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  if (isLoadingHero) {
    return <HeroSkeleton />;
  }

  if (error) {
    return (
      <section className="h-screen flex items-center justify-center bg-muted" data-testid="hero-section-error">
        <div className="flex flex-col items-center text-muted-foreground">
          <AlertCircle className="w-16 h-16 mb-4" />
          <p className="text-lg">Failed to load hero content. Please refresh the page.</p>
        </div>
      </section>
    );
  }

  if (!heroSlides || heroSlides.length === 0) {
    return null;
  }

  return (
    <section className="relative h-screen overflow-hidden" data-testid="hero-section">
      {heroSlides.map((slide, index) => (
        <div
          key={slide.id}
          className={`hero-slide ${index === currentSlide ? "active" : ""}`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${getImage(slide.image)})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
          
          <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
            <div className={`max-w-2xl ${index === currentSlide ? "animate-slide-up" : ""}`}>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-md bg-primary/20 border border-primary/30 flex items-center justify-center">
                  <div className="w-4 h-4 rounded-sm bg-primary" />
                </div>
                <span className="text-primary font-medium tracking-wider uppercase text-sm">
                  {slide.tagline}
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-white leading-tight mb-4">
                {slide.title}
                <br />
                <span className="gradient-text">{slide.highlightedWord}</span>
              </h1>

              <p className="text-white/70 text-lg mb-8">
                {slide.subtitle}
              </p>

              <div className="flex flex-wrap items-center gap-6 mb-8">
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-md px-4 py-2 border border-white/10">
                  <Users className="w-5 h-5 text-primary" />
                  <span className="text-white font-semibold">1k+</span>
                  <span className="text-white/70 text-sm">Happy Clients</span>
                </div>
                
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-md px-4 py-2 border border-white/10">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-primary fill-primary" />
                    ))}
                  </div>
                  <span className="text-white font-semibold">4.5/5</span>
                  <span className="text-white/70 text-sm">(25k+ Reviews)</span>
                </div>
              </div>

              <Button size="lg" className="text-base px-8" data-testid="button-hero-contact">
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      ))}

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-4 z-20">
        <Button
          variant="outline"
          size="icon"
          onClick={handlePrevSlide}
          className="bg-white/10 border-white/20 text-white hover:bg-white/20"
          data-testid="button-hero-prev"
        >
          <ChevronLeft className="w-5 h-5" />
        </Button>

        <div className="flex gap-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentSlide
                  ? "bg-primary w-8"
                  : "bg-white/40 hover:bg-white/60"
              }`}
              data-testid={`button-hero-dot-${index}`}
            />
          ))}
        </div>

        <Button
          variant="outline"
          size="icon"
          onClick={handleNextSlide}
          className="bg-white/10 border-white/20 text-white hover:bg-white/20"
          data-testid="button-hero-next"
        >
          <ChevronRight className="w-5 h-5" />
        </Button>
      </div>

      <button
        onClick={scrollToContent}
        className="absolute bottom-24 left-1/2 -translate-x-1/2 z-20 text-white/60 hover:text-white transition-colors animate-scroll-indicator"
        data-testid="button-scroll-down"
      >
        <ChevronDown className="w-8 h-8" />
      </button>
    </section>
  );
}
