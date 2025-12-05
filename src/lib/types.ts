// Type definitions for the frontend application

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  image: string;
  rating: number;
}

export interface CaseStudy {
  id: string;
  title: string;
  category: string;
  image: string;
}

export interface CounterStat {
  id: string;
  value: number;
  suffix: string;
  label: string;
  icon: string;
}

export interface ProcessStep {
  id: string;
  number: number;
  title: string;
  description: string;
  icon: string;
}

export interface HeroSlide {
  id: string;
  tagline: string;
  title: string;
  highlightedWord: string;
  subtitle: string;
  image: string;
}

export interface AboutFeature {
  id: string;
  text: string;
}

