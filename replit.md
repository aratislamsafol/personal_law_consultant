# Ensaf Law Firm

## Overview

Ensaf Law Firm is a modern law firm website built with React and TypeScript. The application showcases legal services, attorney profiles, case studies, and client testimonials with a premium, professional design inspired by high-end consulting firms. The site features a multi-page architecture with interactive components, animations, and a responsive layout optimized for both desktop and mobile devices.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build System**
- React 18 with TypeScript for type-safe component development
- Vite as the build tool and development server for fast HMR (Hot Module Replacement)
- Wouter for client-side routing (lightweight alternative to React Router)

**State Management & Data Fetching**
- TanStack Query (React Query) v5 for server state management
- Query client configured with infinite stale time and no automatic refetching
- Currently uses static mock data from `src/lib/data.ts` (backend integration ready)

**UI Component System**
- Shadcn UI (New York style variant) as the base component library
- Radix UI primitives for accessible, unstyled components (dialogs, dropdowns, menus, etc.)
- Custom component compositions in `src/components/ui/` directory
- Class Variance Authority (CVA) for type-safe component variant management

**Styling Approach**
- Tailwind CSS v3 for utility-first styling
- CSS custom properties for theming (light/dark mode support via HSL color system)
- Design system defined in `tailwind.config.ts` with custom color palette based on neutral tones
- Typography hierarchy uses Playfair Display (serif) for headings and Open Sans (sans-serif) for body text
- Custom animations and hover effects defined in `src/index.css`

**Component Organization**
- Page components in `src/pages/` (home, about, services, blog, cases, contact, not-found)
- Reusable section components in `src/components/` (hero, about, services, testimonials, etc.)
- Shared UI primitives in `src/components/ui/`
- Header and Footer as layout components

### Design System

**Color Architecture**
- Primary color: Golden/amber (#D4AF37 equivalent) for brand emphasis
- Neutral color scheme for backgrounds and text (0% saturation grays)
- HSL-based color system with CSS variables for theme flexibility
- Separate color tokens for cards, popovers, and sidebar components

**Spacing & Layout**
- Consistent spacing scale using Tailwind's default units (4, 6, 8, 12, 16, 20, 24, 32)
- Max-width containers: 7xl for full sections, 4xl for text-heavy content
- Section padding: py-20 to py-32 on desktop, py-12 to py-16 on mobile

**Interactive Elements**
- Scroll-reveal animations using IntersectionObserver (custom hook: `useScrollReveal`)
- Carousel/slider functionality using Embla Carousel React
- Animated counters with useEffect-based incremental counting
- Smooth scroll behavior for navigation

### Type System

**Type Definitions** (`src/lib/types.ts`)
- Service, TeamMember, Testimonial, CaseStudy
- CounterStat, ProcessStep, HeroSlide, AboutFeature
- All interfaces use string IDs and structured data fields

**Data Flow**
- Custom React Query hooks in `src/lib/api-hooks.ts` (useHeroSlides, useServices, useTeamMembers, etc.)
- Static data exports from `src/lib/data.ts` serving as mock API responses
- Type-safe image imports using Vite's asset handling

### Asset Management

**Image Strategy**
- Local stock images stored in `src/assets/stock_images/`
- Image imports at component level for type safety and bundling optimization
- Mapping objects to convert API paths to local imports (e.g., `localImages` records)
- Lazy loading patterns for images with proper aspect ratios

### Form Handling

**Contact Forms**
- React Hook Form for form state management
- Zod schema validation via @hookform/resolvers
- Toast notifications for user feedback (Shadcn toast component)
- Form submission states (loading, success, error) with visual indicators

### Theme System

**Theme Provider** (`src/components/theme-provider.tsx`)
- Context-based theme management (light/dark/system)
- localStorage persistence with configurable storage key
- CSS class-based theme switching on document root
- Theme toggle component with animated icon transitions

### Routing Structure

**Pages**
- `/` - Home (multi-section landing page)
- `/about` - About page with team, values, and milestones
- `/services` - Service listings with detailed descriptions
- `/blog` - Blog posts with category filtering
- `/cases` - Case studies with modal details
- `/contact` - Contact form with office information
- 404 - Not found fallback

### Development Configuration

**TypeScript Setup**
- Strict mode enabled for type safety
- Path aliases: `@/` → `./client/src/`, `@shared/` → `./shared/`
- ESNext module system with bundler resolution
- Incremental compilation with build info caching

**Vite Configuration**
- React plugin for JSX transformation
- Path resolution for `@` and `@assets` aliases
- Strict file system access controls (deny dotfiles)
- Separate Replit config for host/port settings (0.0.0.0:5000)

## External Dependencies

**UI & Component Libraries**
- Radix UI suite (20+ component primitives)
- Shadcn UI component collection
- Embla Carousel React for carousels
- Lucide React for icons

**State & Data Management**
- TanStack React Query v5 for async state
- React Hook Form for form handling
- Zod for schema validation
- drizzle-zod for potential database schema integration

**Styling & Utilities**
- Tailwind CSS v3 with PostCSS
- clsx and tailwind-merge (via cn utility)
- class-variance-authority for variant props
- date-fns for date formatting

**Backend Preparation**
- Express framework (in dependencies)
- Drizzle ORM v0.39 (configured but not actively used)
- connect-pg-simple for potential session storage
- Note: Backend integration points exist but currently use mock data

**Font Integration**
- Google Fonts: Playfair Display and Open Sans
- Preconnected to fonts.googleapis.com and fonts.gstatic.com for performance