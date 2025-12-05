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
} from "./types";
import {
  heroSlides,
  aboutFeatures,
  services,
  teamMembers,
  testimonials,
  caseStudies,
  counterStats,
  processSteps,
} from "./data";

export function useHeroSlides() {
  return useQuery<HeroSlide[]>({
    queryKey: ["hero-slides"],
    queryFn: () => Promise.resolve(heroSlides),
  });
}

export function useAboutFeatures() {
  return useQuery<AboutFeature[]>({
    queryKey: ["about-features"],
    queryFn: () => Promise.resolve(aboutFeatures),
  });
}

export function useServices() {
  return useQuery<Service[]>({
    queryKey: ["services"],
    queryFn: () => Promise.resolve(services),
  });
}

export function useTeamMembers() {
  return useQuery<TeamMember[]>({
    queryKey: ["team"],
    queryFn: () => Promise.resolve(teamMembers),
  });
}

export function useTestimonials() {
  return useQuery<Testimonial[]>({
    queryKey: ["testimonials"],
    queryFn: () => Promise.resolve(testimonials),
  });
}

export function useCaseStudies() {
  return useQuery<CaseStudy[]>({
    queryKey: ["case-studies"],
    queryFn: () => Promise.resolve(caseStudies),
  });
}

export function useCounterStats() {
  return useQuery<CounterStat[]>({
    queryKey: ["stats"],
    queryFn: () => Promise.resolve(counterStats),
  });
}

export function useProcessSteps() {
  return useQuery<ProcessStep[]>({
    queryKey: ["process-steps"],
    queryFn: () => Promise.resolve(processSteps),
  });
}
