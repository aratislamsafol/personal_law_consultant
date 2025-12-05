# Ensaf Law Firm Website

## Overview

This is a professional attorney/lawyer website built with a modern full-stack architecture. The application showcases legal services, team members, case studies, and testimonials through a sophisticated, trust-building design inspired by professional legal services websites. The site features an animated hero slider, statistics counters, service offerings, team carousel, process workflow, case study gallery, and client testimonials.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build Tool**
- React 18 with TypeScript for type-safe component development
- Vite as the build tool and development server for fast HMR (Hot Module Replacement)
- Wouter for lightweight client-side routing (single-page application)

**UI Component System**
- Shadcn/ui component library with Radix UI primitives for accessible, headless components
- Tailwind CSS for utility-first styling with custom design tokens
- Design follows the "new-york" style variant from Shadcn
- Custom CSS variables for theming (light/dark mode support via ThemeProvider)
- Typography system uses Playfair Display (serif) for headings and Open Sans (sans-serif) for body text

**State Management & Data Fetching**
- TanStack Query (React Query) for server state management, caching, and data synchronization
- Custom hooks pattern for API interactions (useServices, useTeamMembers, useTestimonials, etc.)
- No global client state management - relies on React Query cache and local component state

**Component Architecture**
- Page-based routing with a single Home page component
- Section-based composition (HeroSection, AboutSection, ServicesSection, etc.)
- Custom hooks for scroll-reveal animations and responsive behavior
- Loading skeleton components for each major section to improve perceived performance

**Styling Approach**
- Mobile-first responsive design with breakpoints (sm, md, lg)
- CSS custom properties for dynamic theming
- Animation system using CSS transitions and Intersection Observer for scroll-based reveals
- Custom animations for hero slider, testimonial carousel, and team member carousel

### Backend Architecture

**Server Framework**
- Express.js as the HTTP server framework
- HTTP server created with Node's native `http` module for potential WebSocket support
- Middleware stack: JSON body parsing, URL-encoded form data, request logging

**API Design Pattern**
- RESTful API endpoints following resource-based naming
- Simple GET endpoints for data retrieval (no mutations currently implemented)
- Error handling with try-catch blocks and appropriate HTTP status codes
- CORS and rate limiting configuration ready (dependencies installed but not implemented)

**Data Layer**
- In-memory storage implementation (MemStorage class) serving as a mock database
- Interface-based storage abstraction (IStorage) allows for easy database swap
- Drizzle ORM configured for PostgreSQL (schema defined but not actively used)
- Schema validation using Zod and Drizzle-Zod integration

**Development vs Production**
- Development: Vite middleware integrated into Express for HMR
- Production: Static file serving from pre-built dist/public directory
- Build process uses esbuild for server bundling and Vite for client bundling
- Selective dependency bundling to reduce cold start times

**Type Sharing**
- Shared TypeScript types between client and server via `shared/schema.ts`
- Path aliases (@shared) configured in tsconfig for clean imports
- Drizzle schema serves as source of truth for data types

### Data Storage Design

**Current Implementation**
- Mock data stored in MemStorage class with hardcoded values
- Data includes: Services, Team Members, Testimonials, Case Studies, Counter Stats, Process Steps, Hero Slides, About Features

**Database Schema (Configured but Inactive)**
- PostgreSQL with Drizzle ORM
- User authentication table defined (username/password)
- Migration setup configured via drizzle-kit
- Schema co-location with TypeScript types for type safety

**Asset Management**
- Static images stored in attached_assets directory
- Image imports use Vite's asset handling
- Local image mapping for API-returned paths (allows future CDN migration)

### External Dependencies

**UI & Styling**
- @radix-ui/* - Headless UI component primitives (accordion, dialog, dropdown, etc.)
- tailwindcss - Utility-first CSS framework
- class-variance-authority - Type-safe variant styling
- lucide-react - Icon library
- embla-carousel-react - Carousel/slider functionality

**Form & Validation**
- react-hook-form - Form state management
- zod - Schema validation
- @hookform/resolvers - Zod integration with React Hook Form

**Data Fetching**
- @tanstack/react-query - Server state management and caching

**Server**
- express - Web server framework
- drizzle-orm - TypeScript ORM for PostgreSQL
- pg - PostgreSQL client (installed but not actively used)
- connect-pg-simple - PostgreSQL session store (installed but not implemented)

**Development Tools**
- vite - Build tool and dev server
- tsx - TypeScript execution for development
- esbuild - Server bundling for production
- @replit/vite-plugin-* - Replit-specific development enhancements

**Authentication & Security (Installed but Not Implemented)**
- passport - Authentication middleware
- passport-local - Local username/password strategy
- express-session - Session management
- express-rate-limit - Rate limiting middleware

**Fonts**
- Google Fonts: Playfair Display (serif) and Open Sans (sans-serif)
- Loaded via link tags in HTML for performance