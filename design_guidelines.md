# Design Guidelines: Attorney/Lawyer Professional Website

## Design Approach
**Reference-Based Design**: Drawing inspiration from professional legal services websites with emphasis on credibility, authority, and trust-building through sophisticated visual design.

## Typography System

**Primary Font**: Serif font family (Playfair Display, Lora, or similar) for headings - conveys authority and tradition
**Secondary Font**: Clean sans-serif (Inter, Open Sans) for body text - ensures readability

**Hierarchy**:
- Hero Headlines: 48-64px (mobile: 32-40px), bold weight
- Section Headings: 36-48px (mobile: 28-32px), semi-bold
- Subsection Titles: 24-32px (mobile: 20-24px)
- Body Text: 16-18px, regular weight
- Small Text/Labels: 14px

## Layout System

**Spacing**: Use Tailwind units of 4, 8, 12, 16, 20, and 24 for consistent vertical and horizontal rhythm
- Section padding: py-20 lg:py-32
- Container max-width: max-w-7xl
- Component gaps: gap-8 lg:gap-12

**Grid Systems**:
- Services: 3-column grid (lg:grid-cols-3, md:grid-cols-2, base: grid-cols-1)
- Team Members: Horizontal scrolling carousel
- Case Studies: 4-column masonry grid (lg:grid-cols-4, md:grid-cols-2)
- Statistics: 4-column even distribution

## Component Library

### Hero Slider
- Full-height viewport sections (min-h-screen)
- Rotating 3-slide carousel with auto-advance and manual navigation
- Each slide contains: decorative icon, tagline, main headline, split decorative text element, client statistics badges, CTA button, and full-bleed background image
- Scroll indicator icon at bottom center
- Buttons use blurred backdrop backgrounds (backdrop-blur-md bg-white/10)

### Statistics Counter Section
- 4 animated counters in horizontal row
- Icon above number, label below
- Numbers display with "k+" suffix
- Animate on scroll into view

### About Section
- Asymmetric 2-column layout
- Left: Large primary image with smaller overlapping images
- Right: Section label, headline, description, bulleted list with checkmarks, CTA button
- Decorative shape overlays positioned absolutely

### Service Cards
- 6 cards in 3-column responsive grid
- Each card: decorative background pattern, custom SVG icon, title, description excerpt, "Read More" link
- Subtle hover elevation and scale effect

### Team Carousel
- Horizontal scrolling card layout
- Each card: professional headshot, name, role/title
- Duplicate slides for infinite scroll effect
- Smooth auto-scroll with pause on hover

### Work Process Timeline
- Large background image on left (60% width)
- 3-step vertical timeline on right (40% width)
- Each step: numbered icon, title, description
- Connecting line between steps

### Case Studies Gallery
- 8-item masonry grid layout
- Image with overlay on hover
- Title and category tag visible on hover
- Lightbox functionality for full view

### Testimonials Slider
- Centered carousel design
- Large quote icon decoration
- Client photo (circular), name, title/role
- Review text in italics
- Navigation dots below

### Brand Logos Marquee
- Infinite horizontal scroll
- 5-6 partner/certification logos
- Grayscale with opacity, full color on hover

## Images

**Hero Sections** (3 slides):
- Slide 1: Professional courtroom or law office interior, slightly dimmed
- Slide 2: Attorney consulting with client in modern office
- Slide 3: Legal books and scales of justice setup
- All images: 1920x1080px minimum, landscape orientation

**About Section**:
- Primary: Team meeting or office exterior (800x600px)
- Secondary overlays: Individual attorney portraits (400x500px each)

**Service Cards**: Custom SVG icons for each practice area (scales of justice, briefcase, family figures, building, medical cross, handshake)

**Team Members**: Professional headshots, 400x500px, consistent lighting and background

**Process Background**: Modern law office environment, 1200x800px

**Case Studies**: 8 diverse legal-themed images representing different practice areas, 600x400px

**Testimonial Avatars**: Client headshots (circular crop), 100x100px

**Brand Logos**: Partner firm logos or legal certifications, SVG format preferred

## Decorative Elements

- Curved shape overlays in sections (SVG paths)
- Subtle diagonal line patterns in backgrounds
- Gold accent lines/borders for separation
- Elegant corner flourishes on cards

## Animations

**Use sparingly**:
- Hero slide transitions: Smooth fade (2s duration)
- Counter animations: Count-up on scroll into view
- Team carousel: Auto-scroll (slow, smooth)
- Hover effects: Subtle scale (1.02-1.05) and shadow depth
- Scroll-triggered fades: Section content appears on scroll

## Accessibility

- Maintain WCAG AA contrast ratios throughout
- Ensure all interactive elements have visible focus states
- Provide pause controls for carousels
- Alt text for all images
- Semantic HTML structure with proper heading hierarchy