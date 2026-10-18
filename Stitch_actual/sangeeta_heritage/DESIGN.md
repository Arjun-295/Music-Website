---
name: Sangeeta Heritage
colors:
  surface: '#fff8f6'
  surface-dim: '#ecd5cd'
  surface-bright: '#fff8f6'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#fff1ec'
  surface-container: '#ffe9e2'
  surface-container-high: '#fae3db'
  surface-container-highest: '#f4ded6'
  on-surface: '#251914'
  on-surface-variant: '#43474a'
  inverse-surface: '#3b2d28'
  inverse-on-surface: '#ffede7'
  outline: '#74777b'
  outline-variant: '#c4c7ca'
  surface-tint: '#556067'
  primary: '#556067'
  on-primary: '#ffffff'
  primary-container: '#d5e0e8'
  on-primary-container: '#59636a'
  inverse-primary: '#bdc8d0'
  secondary: '#695c54'
  on-secondary: '#ffffff'
  secondary-container: '#efdcd2'
  on-secondary-container: '#6e6058'
  tertiary: '#745850'
  on-tertiary: '#ffffff'
  tertiary-container: '#fbd6cc'
  on-tertiary-container: '#775b53'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d9e4ec'
  primary-fixed-dim: '#bdc8d0'
  on-primary-fixed: '#131d23'
  on-primary-fixed-variant: '#3e484f'
  secondary-fixed: '#f2dfd5'
  secondary-fixed-dim: '#d5c3b9'
  on-secondary-fixed: '#231a14'
  on-secondary-fixed-variant: '#51443d'
  tertiary-fixed: '#ffdbd0'
  tertiary-fixed-dim: '#e2bfb5'
  on-tertiary-fixed: '#2a1711'
  on-tertiary-fixed-variant: '#5a4139'
  background: '#fff8f6'
  on-background: '#251914'
  surface-variant: '#f4ded6'
typography:
  display-lg:
    fontFamily: Playfair Display
    fontSize: 56px
    fontWeight: '600'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 40px
    fontWeight: '600'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '500'
    lineHeight: '1.3'
  headline-sm:
    fontFamily: Playfair Display
    fontSize: 24px
    fontWeight: '500'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1'
    letterSpacing: 0.05em
  caption:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '400'
    lineHeight: '1.4'
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  container-max: 1280px
  gutter: 24px
  margin-desktop: 64px
  margin-mobile: 20px
  section-gap: 120px
---

## Brand & Style
The design system is anchored in a philosophy of "Modern Devotion." It targets a global audience seeking the discipline of Carnatic music through a lens of premium, serene accessibility. The aesthetic is **High-End Minimalist** with a **Tactile** warmth, moving away from typical institutional austerity toward a "homely luxury" feel. 

The emotional response should be one of immediate calm and creative invitation. By combining heavy whitespace with traditional motifs (Veena strings, Kolams) used as subtle structural elements rather than loud decorations, the system bridges the gap between ancient art and contemporary digital standards.

## Colors
The palette is a curated selection of "earth and sky" tones, designed to be low-stimulation and high-legibility. 

- **Vanilla Cream (#F8F3ED)** acts as the canvas, providing a softer, more organic feel than pure white.
- **Walnut Brown (#64544E)** is the sole color for typography, ensuring soft contrast that reduces eye strain while maintaining professional authority.
- **Dusty Blue and Eucalyptus Green** are used for interactive states, representing air and nature, providing a cooling effect against the warmer peach and coral accents.
- **Muted Coral** is reserved strictly for milestones, badges, and traditional motifs to signify importance without urgency.

## Typography
The typographic hierarchy relies on the tension between the editorial elegance of **Playfair Display** and the functional clarity of **Inter**. 

Headlines should use optical sizing where possible to maintain the delicate serifs. Body text is set with generous line height (1.6) to enhance the "serene" quality and facilitate long-form reading about musical theory or history. Labels and small metadata use increased letter spacing and uppercase styling to provide a modern, systematic counterpoint to the traditional serif headlines.

## Layout & Spacing
This design system utilizes a **Fixed Grid** for desktop (12 columns) and a **Fluid Grid** for mobile (4 columns). 

The spacing philosophy is "Atmospheric." Sections are separated by large vertical gaps (120px+) to allow the brand's motifs to breathe. Content blocks should prioritize asymmetrical layouts to mimic the rhythmic complexity of Carnatic music. Use the "Veena string" motif (thin 1px walnut brown lines) as horizontal dividers between major thematic sections.

## Elevation & Depth
Depth is created through **Tonal Layering** rather than traditional shadows. 
- **Level 0 (Base):** Vanilla Cream background.
- **Level 1 (Cards):** Blush Peach surfaces with no border. 
- **Level 2 (Active/Floating):** Use an "Ambient Shadow"—a very large blur (32px), low opacity (8%) shadow tinted with Walnut Brown (#64544E) to make elements feel like they are gently resting on the page.

Avoid hard borders. Instead, use slight shifts in background hue or the "highlight_wash" gradient to denote container boundaries.

## Shapes
The shape language is defined by **Large, Organic Radii**. All interactive containers and image masks use the `rounded-lg` (1rem) or `rounded-xl` (1.5rem) tokens to maintain the "soft and homely" aesthetic. 

Traditional motifs, such as the Lotus or Kolam, should be treated as geometric abstractions. For example, use a semi-circle mask for instructor photos to evoke the shape of a temple arch or the base of a Veena.

## Components
### Buttons
- **Primary:** Dusty Blue background, Walnut Brown text. No border. Large padding (16px 32px).
- **Secondary:** Transparent background, 1.5px Walnut Brown border.
- **Hover State:** Transition to Eucalyptus Green with a slight "lift" (move -2px).

### Cards & Containers
Cards use the Blush Peach background. For course cards, include a "Lotus" watermark motif in the bottom right corner at 10% opacity Walnut Brown.

### Input Fields
Soft Vanilla Cream background with a 1px Walnut Brown bottom-border only. This mimics the "strings" motif and keeps the form feeling lightweight.

### Lists & Dividers
Use the "Kolam" pattern as a center-aligned divider between list items or blog sections. Lists should have generous leading and use a small Muted Coral dot as a bullet point.

### Progress Indicators (Music/Learning)
Use thin Walnut Brown lines for the track, with a Dusty Blue "bead" (circle) to indicate the current position, referencing the beads of a mala or instrument tuning pegs.