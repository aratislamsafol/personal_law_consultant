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

import heroImage1 from "@assets/stock_images/professional_lawyer__eba13785.jpg";
import heroImage2 from "@assets/stock_images/professional_lawyer__d92a2da9.jpg";
import heroImage3 from "@assets/stock_images/professional_lawyer__e5b52d84.jpg";
import aboutImage1 from "@assets/stock_images/attorney_lawyer_meet_7b9f60e8.jpg";
import aboutImage2 from "@assets/stock_images/attorney_lawyer_meet_586a7e16.jpg";
import aboutImage3 from "@assets/stock_images/modern_law_office_in_7183b75a.jpg";
import processImg from "@assets/stock_images/modern_law_office_in_2acbaaf1.jpg";
import teamMale1 from "@assets/stock_images/professional_busines_7419220b.jpg";
import teamMale2 from "@assets/stock_images/professional_busines_fc37abbc.jpg";
import teamMale3 from "@assets/stock_images/professional_busines_ef023e6f.jpg";
import teamFemale1 from "@assets/stock_images/professional_busines_ad9bd69a.jpg";
import teamFemale2 from "@assets/stock_images/professional_busines_4557f13e.jpg";
import caseImage1 from "@assets/stock_images/legal_document_contr_031d5c56.jpg";
import caseImage2 from "@assets/stock_images/legal_document_contr_1539d387.jpg";
import caseImage3 from "@assets/stock_images/legal_document_contr_edabb1e7.jpg";
import caseImage4 from "@assets/stock_images/legal_document_contr_9920fabe.jpg";
import testimonialImage1 from "@assets/stock_images/professional_busines_06595957.jpg";
import testimonialImage2 from "@assets/stock_images/professional_busines_338c1319.jpg";
import testimonialImage3 from "@assets/stock_images/professional_busines_4d1800af.jpg";

export const heroSlides: HeroSlide[] = [
  {
    id: "1",
    tagline: "Your Legal Shield",
    title: "Experienced Lawyers, Proven",
    highlightedWord: "Results",
    subtitle: "We have 1k+ Happy Clients with 4.5/5 (25k+ Reviews)",
    image: heroImage1,
  },
  {
    id: "2",
    tagline: "Your Guardian in Law",
    title: "Experienced Attorneys, Trusted",
    highlightedWord: "Results",
    subtitle: "Dedicated legal professionals fighting for your rights",
    image: heroImage2,
  },
  {
    id: "3",
    tagline: "Secure With Experience",
    title: "Committed Lawyers, Proven",
    highlightedWord: "Results",
    subtitle: "Excellence in legal practice since 1995",
    image: heroImage3,
  },
];

export const aboutFeatures: AboutFeature[] = [
  { id: "1", text: "Committed to excellence in legal practice" },
  { id: "2", text: "Act with honesty and uphold ethical principles" },
  { id: "3", text: "Road Test Preparation with 98% success" },
  { id: "4", text: "Meeting clients' needs is our priority" },
];

export const aboutImages = {
  main: aboutImage1,
  secondary: aboutImage2,
  tertiary: aboutImage3,
};

export const counterStats: CounterStat[] = [
  { id: "1", value: 10, suffix: "k+", label: "Cases Done", icon: "briefcase" },
  { id: "2", value: 12, suffix: "k+", label: "Expert Attorneys", icon: "users" },
  { id: "3", value: 15, suffix: "k+", label: "Happy Clients", icon: "smile" },
  { id: "4", value: 20, suffix: "k+", label: "Awards Won", icon: "award" },
];

export const services: Service[] = [
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

export const teamMembers: TeamMember[] = [
  { id: "1", name: "Michel Phelops", role: "Chief Justice", image: teamMale1 },
  { id: "2", name: "Sarah Rahman", role: "Senior Attorney", image: teamFemale1 },
  { id: "3", name: "Smith Miller", role: "Attorney", image: teamMale2 },
  { id: "4", name: "Samira Dsuza", role: "Attorney", image: teamFemale2 },
  { id: "5", name: "David Chen", role: "Associate", image: teamMale3 },
];

export const processSteps: ProcessStep[] = [
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

export const processBackgroundImage = processImg;

export const caseStudies: CaseStudy[] = [
  { id: "1", title: "Initial Consultation", category: "Family Law", image: caseImage1 },
  { id: "2", title: "Legal Advice", category: "Divorce Cases", image: caseImage2 },
  { id: "3", title: "Preliminary Meeting", category: "Custody Disputes", image: caseImage3 },
  { id: "4", title: "Client Consultation", category: "Parental Rights", image: caseImage4 },
  { id: "5", title: "Advice Session", category: "Child Support", image: aboutImage1 },
  { id: "6", title: "First Meeting", category: "Paternity Cases", image: aboutImage2 },
  { id: "7", title: "Introductory Discussion", category: "Civil Unions", image: aboutImage3 },
  { id: "8", title: "Case Consultation", category: "Marriage Contracts", image: caseImage1 },
];

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Monica D'suza",
    role: "Business Owner",
    content: "I was struggling with family law for months before I found Ensaf. They not only provided me with the solution I needed, but they also educated me on how to prevent the issue from happening again. Their team is incredibly knowledgeable and patient, and they always go the extra mile to ensure customer satisfaction.",
    image: testimonialImage1,
    rating: 5,
  },
  {
    id: "2",
    name: "Teresa Hamilton",
    role: "Marketing Director",
    content: "The team at Ensaf handled my corporate legal matters with exceptional professionalism. Their attention to detail and thorough understanding of business law gave me confidence throughout the entire process. I highly recommend their services to anyone seeking quality legal representation.",
    image: testimonialImage2,
    rating: 5,
  },
  {
    id: "3",
    name: "James Wilson",
    role: "Entrepreneur",
    content: "Outstanding legal service from start to finish. The attorneys at Ensaf were responsive, knowledgeable, and truly cared about achieving the best outcome for my case. They explained complex legal concepts in simple terms and kept me informed every step of the way.",
    image: testimonialImage3,
    rating: 5,
  },
];

export const brandLogos = [
  { id: "1", name: "Legal Corp", initials: "LC" },
  { id: "2", name: "Justice Partners", initials: "JP" },
  { id: "3", name: "Law Alliance", initials: "LA" },
  { id: "4", name: "Advocate Pro", initials: "AP" },
  { id: "5", name: "Rights First", initials: "RF" },
];
