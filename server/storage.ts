import { type User, type InsertUser, type Service, type TeamMember, type Testimonial, type CaseStudy, type CounterStat, type ProcessStep, type HeroSlide, type AboutFeature } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  getServices(): Promise<Service[]>;
  getTeamMembers(): Promise<TeamMember[]>;
  getTestimonials(): Promise<Testimonial[]>;
  getCaseStudies(): Promise<CaseStudy[]>;
  getCounterStats(): Promise<CounterStat[]>;
  getProcessSteps(): Promise<ProcessStep[]>;
  getHeroSlides(): Promise<HeroSlide[]>;
  getAboutFeatures(): Promise<AboutFeature[]>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private services: Service[];
  private teamMembers: TeamMember[];
  private testimonials: Testimonial[];
  private caseStudies: CaseStudy[];
  private counterStats: CounterStat[];
  private processSteps: ProcessStep[];
  private heroSlides: HeroSlide[];
  private aboutFeatures: AboutFeature[];

  constructor() {
    this.users = new Map();
    
    this.services = [
      {
        id: "1",
        title: "Criminal Law",
        description: "Defense representations for various criminal charges. Investigations and evidence analysis. Bail applications and court representation.",
        icon: "shield",
      },
      {
        id: "2",
        title: "Corporate Law",
        description: "Legal advocacy for diverse business matters. Conducting in-depth analysis and reviewing evidence. Contract negotiations and compliance.",
        icon: "building",
      },
      {
        id: "3",
        title: "Family Law",
        description: "Expert defense strategies for family matters. Comprehensive evidence case analysis. Divorce, custody, and support hearings.",
        icon: "heart",
      },
      {
        id: "4",
        title: "Real Estate Law",
        description: "Representation in property matters, including detailed investigations. Assistance with transactions and title evaluations.",
        icon: "home",
      },
      {
        id: "5",
        title: "Personal Injury Law",
        description: "Professional legal defense for accident victims. Careful examination of case details and medical documentation.",
        icon: "activity",
      },
      {
        id: "6",
        title: "Health Care Policy",
        description: "Skilled advocacy for healthcare regulations. Insurance support and preparation of compliance motions.",
        icon: "heart-pulse",
      },
    ];

    this.teamMembers = [
      { id: "1", name: "Michel Phelops", role: "Chief Justice", image: "/images/team/team-1.jpg" },
      { id: "2", name: "Sarah Rahman", role: "Senior Attorney", image: "/images/team/team-2.jpg" },
      { id: "3", name: "Smith Miller", role: "Attorney", image: "/images/team/team-3.jpg" },
      { id: "4", name: "Samira Dsuza", role: "Attorney", image: "/images/team/team-4.jpg" },
      { id: "5", name: "David Chen", role: "Associate", image: "/images/team/team-5.jpg" },
    ];

    this.testimonials = [
      {
        id: "1",
        name: "Monica D'suza",
        role: "Business Owner",
        content: "I was struggling with family law for months before I found Ensaf. They not only provided me with the solution I needed, but they also educated me on how to prevent the issue from happening again. Their team is incredibly knowledgeable and patient.",
        image: "/images/testimonials/testimonial-1.jpg",
        rating: 5,
      },
      {
        id: "2",
        name: "Teresa Hamilton",
        role: "Marketing Director",
        content: "The team at Ensaf handled my corporate legal matters with exceptional professionalism. Their attention to detail and thorough understanding of business law gave me confidence throughout the entire process.",
        image: "/images/testimonials/testimonial-2.jpg",
        rating: 5,
      },
      {
        id: "3",
        name: "James Wilson",
        role: "Entrepreneur",
        content: "Outstanding legal service from start to finish. The attorneys at Ensaf were responsive, knowledgeable, and truly cared about achieving the best outcome for my case.",
        image: "/images/testimonials/testimonial-3.jpg",
        rating: 5,
      },
    ];

    this.caseStudies = [
      { id: "1", title: "Initial Consultation", category: "Family Law", image: "/images/cases/case-1.jpg" },
      { id: "2", title: "Legal Advice", category: "Divorce Cases", image: "/images/cases/case-2.jpg" },
      { id: "3", title: "Preliminary Meeting", category: "Custody Disputes", image: "/images/cases/case-3.jpg" },
      { id: "4", title: "Client Consultation", category: "Parental Rights", image: "/images/cases/case-4.jpg" },
      { id: "5", title: "Advice Session", category: "Child Support", image: "/images/cases/case-5.jpg" },
      { id: "6", title: "First Meeting", category: "Paternity Cases", image: "/images/cases/case-6.jpg" },
      { id: "7", title: "Introductory Discussion", category: "Civil Unions", image: "/images/cases/case-7.jpg" },
      { id: "8", title: "Case Consultation", category: "Marriage Contracts", image: "/images/cases/case-8.jpg" },
    ];

    this.counterStats = [
      { id: "1", value: 10, suffix: "k+", label: "Cases Done", icon: "briefcase" },
      { id: "2", value: 12, suffix: "k+", label: "Expert Attorneys", icon: "users" },
      { id: "3", value: 15, suffix: "k+", label: "Happy Clients", icon: "smile" },
      { id: "4", value: 20, suffix: "k+", label: "Awards Won", icon: "award" },
    ];

    this.processSteps = [
      {
        id: "1",
        number: 1,
        title: "Initial Consultation",
        description: "Our experienced lawyers thoroughly analyze the facts of each case. They then apply the relevant laws to provide clear guidance.",
        icon: "message-circle",
      },
      {
        id: "2",
        number: 2,
        title: "Case Evaluation",
        description: "We prioritize understanding your concerns and aligning with your goals. Your satisfaction is our top priority.",
        icon: "search",
      },
      {
        id: "3",
        number: 3,
        title: "Legal Strategy",
        description: "We develop a customized plan to protect your rights and achieve the best possible outcome for your case.",
        icon: "target",
      },
    ];

    this.heroSlides = [
      {
        id: "1",
        tagline: "Your Legal Shield",
        title: "Experienced Lawyers, Proven",
        highlightedWord: "Results",
        subtitle: "We have 1k+ Happy Clients with 4.5/5 (25k+ Reviews)",
        image: "/images/hero/hero-1.jpg",
      },
      {
        id: "2",
        tagline: "Your Guardian in Law",
        title: "Experienced Attorneys, Trusted",
        highlightedWord: "Results",
        subtitle: "Dedicated legal professionals fighting for your rights",
        image: "/images/hero/hero-2.jpg",
      },
      {
        id: "3",
        tagline: "Secure With Experience",
        title: "Committed Lawyers, Proven",
        highlightedWord: "Results",
        subtitle: "Excellence in legal practice since 1995",
        image: "/images/hero/hero-3.jpg",
      },
    ];

    this.aboutFeatures = [
      { id: "1", text: "Committed to excellence in legal practice" },
      { id: "2", text: "Act with honesty and uphold ethical principles" },
      { id: "3", text: "Road Test Preparation with 98% success" },
      { id: "4", text: "Meeting clients' needs is our priority" },
    ];
  }

  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async getServices(): Promise<Service[]> {
    return this.services;
  }

  async getTeamMembers(): Promise<TeamMember[]> {
    return this.teamMembers;
  }

  async getTestimonials(): Promise<Testimonial[]> {
    return this.testimonials;
  }

  async getCaseStudies(): Promise<CaseStudy[]> {
    return this.caseStudies;
  }

  async getCounterStats(): Promise<CounterStat[]> {
    return this.counterStats;
  }

  async getProcessSteps(): Promise<ProcessStep[]> {
    return this.processSteps;
  }

  async getHeroSlides(): Promise<HeroSlide[]> {
    return this.heroSlides;
  }

  async getAboutFeatures(): Promise<AboutFeature[]> {
    return this.aboutFeatures;
  }
}

export const storage = new MemStorage();
