import { sql } from "drizzle-orm";
import { pgTable, text, varchar, integer } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

// Service types
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

// Team member types
export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
}

// Testimonial types
export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  image: string;
  rating: number;
}

// Case study types
export interface CaseStudy {
  id: string;
  title: string;
  category: string;
  image: string;
}

// Counter stat types
export interface CounterStat {
  id: string;
  value: number;
  suffix: string;
  label: string;
  icon: string;
}

// Process step types
export interface ProcessStep {
  id: string;
  number: number;
  title: string;
  description: string;
  icon: string;
}

// Hero slide types
export interface HeroSlide {
  id: string;
  tagline: string;
  title: string;
  highlightedWord: string;
  subtitle: string;
  image: string;
}

// About feature types
export interface AboutFeature {
  id: string;
  text: string;
}
