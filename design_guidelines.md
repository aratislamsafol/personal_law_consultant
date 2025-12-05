# Ensaf Law Firm - Design Guidelines

## Design Approach
**Reference-Based + Premium Professional Services**
Drawing inspiration from high-end consulting firms (McKinsey, Bain) combined with leading law firms' digital presence. Emphasizes authority through restrained elegance, strategic whitespace, and refined typography. Navy and gold accent palette (specified by client) will be implemented in development phase.

## Typography System
- **Primary Font**: Serif typeface (Playfair Display or Merriweather) for headlines - conveys tradition and authority
- **Secondary Font**: Clean sans-serif (Inter or Source Sans Pro) for body text - ensures readability
- **Hierarchy**: 
  - Hero headlines: text-5xl to text-7xl, font-bold
  - Section headers: text-3xl to text-4xl, font-semibold
  - Subheadings: text-xl to text-2xl
  - Body: text-base to text-lg, generous line-height (leading-relaxed)
  - Legal disclaimers/fine print: text-sm

## Layout System
**Spacing Primitives**: Use Tailwind units of 4, 6, 8, 12, 16, 20, 24, 32
- Consistent section padding: py-20 to py-32 (desktop), py-12 to py-16 (mobile)
- Component spacing: gap-8 for cards, gap-12 for major sections
- Container: max-w-7xl for full sections, max-w-4xl for text-heavy content

## Page-Specific Components

### Homepage
**Hero Section** (full viewport height)
- Large hero image (see Images section)
- Centered headline + subheadline overlaid on image
- Primary CTA button with blurred background (backdrop-blur-md)
- Trust indicator bar below fold: "25+ Years Experience | 500+ Cases Won | Certified Specialists"

**Services Overview** (3-column grid on desktop)
- Six practice area cards with icons
- Each card: icon, title, 2-sentence description, "Learn More" link
- Stagger card heights slightly for visual interest

**Why Choose Us** (2-column split)
- Left: Compelling headline + 3-4 key differentiators with checkmark icons
- Right: Professional team photo or office image

**Recent Victories** (horizontal scroll carousel)
- 4-5 case study preview cards
- Each card: case type badge, headline result, client testimonial quote, case details link

**Attorney Spotlight** (3-column grid)
- Featured attorneys with professional headshots
- Name, title, specialization, brief bio
- LinkedIn integration

**Client Testimonials** (masonry grid layout, 2-3 columns)
- Quote cards with client name, case type, star ratings
- Mix of text-only and photo testimonials

**CTA Section**
- Centered headline "Schedule Your Free Consultation"
- Dual CTA buttons: "Book Appointment" + "Call Now: [phone]"
- Office hours and response time indicators

### About Page
**Leadership Section**
- Full-width hero image of founding partners
- Mission statement in large, centered typography
- Timeline component showing firm milestones (vertical on mobile, horizontal on desktop)

**Our Team** (4-column grid on desktop, filterable by practice area)
- Attorney cards with hover effects revealing full bio modal
- Professional headshots, credentials, bar admissions

**Values & Approach** (alternating 2-column layouts)
- Image + text sections explaining firm philosophy
- Pull quotes highlighting key principles

### Services Page
**Practice Areas Hub**
- Brief intro paragraph
- 6-8 detailed service cards (2-column grid)
- Each card: icon, practice area name, detailed description, relevant case types, CTA
- Sidebar: Quick contact form + phone number prominence

**Individual Service Detail Pages**
- Hero section with practice area name
- Breadcrumb navigation
- Overview + Process flow diagram
- FAQ accordion
- Related case studies
- Contact form specific to practice area

### Blog
**Blog Listing** (masonry grid)
- Featured post: large card with image spanning 2 columns
- Standard posts: image thumbnail, title, excerpt, author, date, read time
- Category filters (sidebar or top bar)
- Search functionality

**Blog Post Detail**
- Hero image (optional per post)
- Article header: title, author bio card, publish date, category tags
- Content: max-w-prose for optimal reading
- Related articles at bottom (3-column grid)
- Newsletter signup embedded mid-article

### Case Studies
**Case Studies Grid** (3-column)
- Filter by practice area, year, outcome
- Preview cards: case name, practice area badge, key result metric, thumbnail

**Case Study Detail**
- Challenge/Approach/Result sections with clear visual separation
- Metrics callout boxes (cases won, settlements achieved, etc.)
- Client testimonial integration
- Related cases

### Contact Page
**Contact Hero**
- Office location image or map integration
- Headline: "Get Expert Legal Counsel Today"

**Multi-Column Contact Layout** (2-column on desktop)
- Left: Comprehensive contact form (name, email, phone, practice area dropdown, message, file upload for documents)
- Right: Office information cards (address, phone, email, hours), embedded Google Map, alternative contact methods

**Office Locations** (if multiple)
- Cards with address, phone, directions link, office image

## Images Specifications

**Homepage Hero**: Sophisticated law office interior or cityscape view through office windows (professional, modern). Full-width, 80vh minimum height.

**About Page**: Founding partners professional portrait (authentic, approachable), office space showcasing professionalism

**Services**: Practice area-specific stock images (courtroom, contract signing, consultation meeting) - use sparingly, only where they enhance understanding

**Team Photos**: Professional headshots against neutral backgrounds (consistency critical)

**Blog**: Featured images for articles (1200x630 minimum)

**Contact**: Office exterior or reception area establishing physical presence

## Key Design Principles
- **Authority Through Restraint**: Generous whitespace, limited animation, classical typography
- **Scannable Hierarchy**: Clear visual weight progression, strategic use of rules/dividers
- **Trust Signals**: Certifications, bar associations, awards prominently but tastefully displayed
- **Accessibility**: High contrast ratios, clear CTAs, keyboard navigation throughout
- **Mobile-First**: Stack all multi-column layouts to single column on mobile, maintain touch-friendly target sizes (min 44px)