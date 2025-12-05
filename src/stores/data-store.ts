import { create } from "zustand";
import type {
  Service,
  TeamMember,
  Testimonial,
  CaseStudy,
  CounterStat,
  ProcessStep,
  HeroSlide,
  AboutFeature,
} from "@/lib/types";
import {
  heroSlides,
  aboutFeatures,
  services,
  teamMembers,
  testimonials,
  caseStudies,
  counterStats,
  processSteps,
} from "@/lib/data";

interface DataState {
  // Data
  heroSlides: HeroSlide[];
  aboutFeatures: AboutFeature[];
  services: Service[];
  teamMembers: TeamMember[];
  testimonials: Testimonial[];
  caseStudies: CaseStudy[];
  counterStats: CounterStat[];
  processSteps: ProcessStep[];

  // Loading states
  isLoading: {
    heroSlides: boolean;
    aboutFeatures: boolean;
    services: boolean;
    teamMembers: boolean;
    testimonials: boolean;
    caseStudies: boolean;
    counterStats: boolean;
    processSteps: boolean;
  };

  // Error states
  errors: {
    heroSlides: Error | null;
    aboutFeatures: Error | null;
    services: Error | null;
    teamMembers: Error | null;
    testimonials: Error | null;
    caseStudies: Error | null;
    counterStats: Error | null;
    processSteps: Error | null;
  };

  // Actions
  fetchHeroSlides: () => Promise<void>;
  fetchAboutFeatures: () => Promise<void>;
  fetchServices: () => Promise<void>;
  fetchTeamMembers: () => Promise<void>;
  fetchTestimonials: () => Promise<void>;
  fetchCaseStudies: () => Promise<void>;
  fetchCounterStats: () => Promise<void>;
  fetchProcessSteps: () => Promise<void>;
  fetchAll: () => Promise<void>;
}

export const useDataStore = create<DataState>((set, get) => ({
  // Initial data
  heroSlides: [],
  aboutFeatures: [],
  services: [],
  teamMembers: [],
  testimonials: [],
  caseStudies: [],
  counterStats: [],
  processSteps: [],

  // Initial loading states
  isLoading: {
    heroSlides: false,
    aboutFeatures: false,
    services: false,
    teamMembers: false,
    testimonials: false,
    caseStudies: false,
    counterStats: false,
    processSteps: false,
  },

  // Initial error states
  errors: {
    heroSlides: null,
    aboutFeatures: null,
    services: null,
    teamMembers: null,
    testimonials: null,
    caseStudies: null,
    counterStats: null,
    processSteps: null,
  },

  // Fetch functions
  fetchHeroSlides: async () => {
    set((state) => ({
      isLoading: { ...state.isLoading, heroSlides: true },
      errors: { ...state.errors, heroSlides: null },
    }));

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 100));
      set({
        heroSlides,
        isLoading: { ...get().isLoading, heroSlides: false },
        errors: { ...get().errors, heroSlides: null },
      });
    } catch (error) {
      set((state) => ({
        isLoading: { ...state.isLoading, heroSlides: false },
        errors: { ...state.errors, heroSlides: error as Error },
      }));
    }
  },

  fetchAboutFeatures: async () => {
    set((state) => ({
      isLoading: { ...state.isLoading, aboutFeatures: true },
      errors: { ...state.errors, aboutFeatures: null },
    }));

    try {
      await new Promise((resolve) => setTimeout(resolve, 100));
      set({
        aboutFeatures,
        isLoading: { ...get().isLoading, aboutFeatures: false },
        errors: { ...get().errors, aboutFeatures: null },
      });
    } catch (error) {
      set((state) => ({
        isLoading: { ...state.isLoading, aboutFeatures: false },
        errors: { ...state.errors, aboutFeatures: error as Error },
      }));
    }
  },

  fetchServices: async () => {
    set((state) => ({
      isLoading: { ...state.isLoading, services: true },
      errors: { ...state.errors, services: null },
    }));

    try {
      await new Promise((resolve) => setTimeout(resolve, 100));
      set({
        services,
        isLoading: { ...get().isLoading, services: false },
        errors: { ...get().errors, services: null },
      });
    } catch (error) {
      set((state) => ({
        isLoading: { ...state.isLoading, services: false },
        errors: { ...state.errors, services: error as Error },
      }));
    }
  },

  fetchTeamMembers: async () => {
    set((state) => ({
      isLoading: { ...state.isLoading, teamMembers: true },
      errors: { ...state.errors, teamMembers: null },
    }));

    try {
      await new Promise((resolve) => setTimeout(resolve, 100));
      set({
        teamMembers,
        isLoading: { ...get().isLoading, teamMembers: false },
        errors: { ...get().errors, teamMembers: null },
      });
    } catch (error) {
      set((state) => ({
        isLoading: { ...state.isLoading, teamMembers: false },
        errors: { ...state.errors, teamMembers: error as Error },
      }));
    }
  },

  fetchTestimonials: async () => {
    set((state) => ({
      isLoading: { ...state.isLoading, testimonials: true },
      errors: { ...state.errors, testimonials: null },
    }));

    try {
      await new Promise((resolve) => setTimeout(resolve, 100));
      set({
        testimonials,
        isLoading: { ...get().isLoading, testimonials: false },
        errors: { ...get().errors, testimonials: null },
      });
    } catch (error) {
      set((state) => ({
        isLoading: { ...state.isLoading, testimonials: false },
        errors: { ...state.errors, testimonials: error as Error },
      }));
    }
  },

  fetchCaseStudies: async () => {
    set((state) => ({
      isLoading: { ...state.isLoading, caseStudies: true },
      errors: { ...state.errors, caseStudies: null },
    }));

    try {
      await new Promise((resolve) => setTimeout(resolve, 100));
      set({
        caseStudies,
        isLoading: { ...get().isLoading, caseStudies: false },
        errors: { ...get().errors, caseStudies: null },
      });
    } catch (error) {
      set((state) => ({
        isLoading: { ...state.isLoading, caseStudies: false },
        errors: { ...state.errors, caseStudies: error as Error },
      }));
    }
  },

  fetchCounterStats: async () => {
    set((state) => ({
      isLoading: { ...state.isLoading, counterStats: true },
      errors: { ...state.errors, counterStats: null },
    }));

    try {
      await new Promise((resolve) => setTimeout(resolve, 100));
      set({
        counterStats,
        isLoading: { ...get().isLoading, counterStats: false },
        errors: { ...get().errors, counterStats: null },
      });
    } catch (error) {
      set((state) => ({
        isLoading: { ...state.isLoading, counterStats: false },
        errors: { ...state.errors, counterStats: error as Error },
      }));
    }
  },

  fetchProcessSteps: async () => {
    set((state) => ({
      isLoading: { ...state.isLoading, processSteps: true },
      errors: { ...state.errors, processSteps: null },
    }));

    try {
      await new Promise((resolve) => setTimeout(resolve, 100));
      set({
        processSteps,
        isLoading: { ...get().isLoading, processSteps: false },
        errors: { ...get().errors, processSteps: null },
      });
    } catch (error) {
      set((state) => ({
        isLoading: { ...state.isLoading, processSteps: false },
        errors: { ...state.errors, processSteps: error as Error },
      }));
    }
  },

  fetchAll: async () => {
    const {
      fetchHeroSlides,
      fetchAboutFeatures,
      fetchServices,
      fetchTeamMembers,
      fetchTestimonials,
      fetchCaseStudies,
      fetchCounterStats,
      fetchProcessSteps,
    } = get();

    await Promise.all([
      fetchHeroSlides(),
      fetchAboutFeatures(),
      fetchServices(),
      fetchTeamMembers(),
      fetchTestimonials(),
      fetchCaseStudies(),
      fetchCounterStats(),
      fetchProcessSteps(),
    ]);
  },
}));

