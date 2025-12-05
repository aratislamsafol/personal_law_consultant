import { useQuery } from "@tanstack/react-query";
import type { 
  Service, 
  TeamMember, 
  Testimonial, 
  CaseStudy, 
  CounterStat, 
  ProcessStep,
  HeroSlide,
  AboutFeature
} from "@shared/schema";

export function useHeroSlides() {
  return useQuery<HeroSlide[]>({
    queryKey: ["/api/hero-slides"],
  });
}

export function useAboutFeatures() {
  return useQuery<AboutFeature[]>({
    queryKey: ["/api/about-features"],
  });
}

export function useServices() {
  return useQuery<Service[]>({
    queryKey: ["/api/services"],
  });
}

export function useTeamMembers() {
  return useQuery<TeamMember[]>({
    queryKey: ["/api/team"],
  });
}

export function useTestimonials() {
  return useQuery<Testimonial[]>({
    queryKey: ["/api/testimonials"],
  });
}

export function useCaseStudies() {
  return useQuery<CaseStudy[]>({
    queryKey: ["/api/case-studies"],
  });
}

export function useCounterStats() {
  return useQuery<CounterStat[]>({
    queryKey: ["/api/stats"],
  });
}

export function useProcessSteps() {
  return useQuery<ProcessStep[]>({
    queryKey: ["/api/process-steps"],
  });
}
