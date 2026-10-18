---
name: Carnatic Serenity
colors:
  surface: '#fbf9f6'
  surface-dim: '#dbdad7'
  surface-bright: '#fbf9f6'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f5f3f0'
  surface-container: '#efeeeb'
  surface-container-high: '#eae8e5'
  surface-container-highest: '#e4e2df'
  on-surface: '#1b1c1a'
  on-surface-variant: '#4f4447'
  inverse-surface: '#30312f'
  inverse-on-surface: '#f2f0ed'
  outline: '#807477'
  outline-variant: '#d2c3c6'
  surface-tint: '#745660'
  primary: '#745660'
  on-primary: '#ffffff'
  primary-container: '#efc8d3'
  on-primary-container: '#70525b'
  inverse-primary: '#e3bdc7'
  secondary: '#51606a'
  on-secondary: '#ffffff'
  secondary-container: '#d5e5f0'
  on-secondary-container: '#576670'
  tertiary: '#735a31'
  on-tertiary: '#ffffff'
  tertiary-container: '#efcd9a'
  on-tertiary-container: '#6e562d'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffd9e3'
  primary-fixed-dim: '#e3bdc7'
  on-primary-fixed: '#2b151d'
  on-primary-fixed-variant: '#5b3f48'
  secondary-fixed: '#d5e5f0'
  secondary-fixed-dim: '#b9c9d3'
  on-secondary-fixed: '#0e1d25'
  on-secondary-fixed-variant: '#3a4952'
  tertiary-fixed: '#ffdeac'
  tertiary-fixed-dim: '#e3c290'
  on-tertiary-fixed: '#281900'
  on-tertiary-fixed-variant: '#59431c'
  background: '#fbf9f6'
  on-background: '#1b1c1a'
  surface-variant: '#e4e2df'
  blush-pink: '#F7D6D0'
  misty-sky: '#C9DDEB'
  warm-cream: '#F6F1EB'
  rosewood: '#7A5C58'
  cocoa-text: '#4A3B38'
  charcoal-text: '#5E5652'
typography:
  display-lg:
    fontFamily: Playfair Display
    fontSize: 56px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 40px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.3'
  headline-sm:
    fontFamily: Playfair Display
    fontSize: 24px
    fontWeight: '600'
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
    fontWeight: '500'
    lineHeight: '1.2'
    letterSpacing: 0.05em
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1.2'
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  section-gap-desktop: 120px
  section-gap-mobile: 64px
  container-max-width: 1200px
  gutter: 24px
  margin-mobile: 20px
---

## Brand & Style

This design system embodies the soul of Carnatic music—an art form defined by mathematical precision and emotive grace. The brand personality is **Serene, Artistic, and Timeless**. It seeks to bridge the gap between ancient South Indian traditions and modern educational accessibility.

The visual style is a sophisticated blend of **Minimalism** and **Subtle Glassmorphism**. By utilizing generous whitespace and a soft, airy color palette, the UI evokes the feeling of a quiet morning concert in a sunlit hall. Traditional motifs like Kolams and Veena strings are integrated not as clutter, but as delicate structural elements, ensuring the interface feels culturally rooted yet technologically forward.

## Colors

The color strategy for this design system is inspired by the natural elements of a classical Indian performance: the lotus, the morning sky, and the rich wood of the Veena.

- **Primary (Lotus Pink):** Used for key brand moments and active states. It represents the blooming of knowledge.
- **Secondary (Powder Blue):** Provides a cooling contrast to the pink tones, used for secondary actions and background variations.
- **Surface (Ivory/Cream):** The foundation of the design system. Pure white is avoided in favor of Ivory to reduce eye strain and provide a warmer, more "paper-like" feel.
- **Accents (Muted Gold & Rosewood):** Reserved for delicate ornaments, borders, and call-to-action highlights. 
- **Typography:** Text uses Deep Cocoa Brown instead of pure black to maintain the organic, traditional warmth of the palette.

## Typography

Typography in this design system creates a rhythmic hierarchy. **Playfair Display** provides a lyrical, high-contrast serif look for headings, mimicking the fluid curves of Carnatic notation. It should be used with ample line height to ensure elegance.

**Inter** is the functional counterpart, chosen for its exceptional readability at small sizes. By using a modern sans-serif for body copy, the design remains grounded and accessible. Use **Label-SM** for metadata and navigational breadcrumbs, often paired with Muted Gold or Rosewood colors to draw subtle attention.

## Layout & Spacing

The layout philosophy follows a **Fixed-Fluid Hybrid Grid**. Content is housed within a maximum 1200px container to maintain a focused, editorial feel on large displays. 

- **The 8px Rhythm:** All padding and margins are multiples of 8px to ensure mathematical harmony.
- **Generous Breathing Room:** High-level sections use a 120px vertical gap to allow each "composition" (content block) to be viewed in isolation, preventing cognitive overwhelm.
- **Mobile Reflow:** On mobile devices, the 12-column grid collapses to a single column with 20px outer margins. Glassmorphic cards should extend nearly to the edge to maximize touch targets.

## Elevation & Depth

This design system uses **Tonal Layering** and **Subtle Glassmorphism** to convey depth without the use of heavy shadows.

- **Surface Levels:** The primary background is Ivory White. Secondary content (like cards or sidebars) uses Warm Cream or a semi-transparent Powder Blue.
- **Glassmorphism:** Elements like navigation bars and modal overlays use a 12px backdrop-blur with a 60% opacity fill of Blush Pink or Ivory. This creates a "frosted lens" effect that feels ethereal.
- **Shadows:** Use only "Ambient Shadows"—soft, extremely diffused shadows (Blur: 30px, Opacity: 4%) with a slight hint of Rosewood Brown in the shadow tint to keep them feeling organic rather than digital.

## Shapes

The shape language is organic and soft. While the base roundedness is defined as `2` (0.5rem), significant containers like **Cards and Modals** specifically utilize a **20px (1.25rem)** corner radius to emphasize a friendly, welcoming atmosphere.

**Decorative Accents:**
- **Separators:** Use thin (1px) horizontal lines in Muted Gold, punctuated in the center by a simplified, geometric Lotus or Kolam-inspired dot pattern.
- **Veena Strings:** Vertically oriented pages may use thin, grouped Rosewood-colored lines in the margins to guide the user's eye downward, mimicking the strings of a musical instrument.

## Components

### Buttons
Primary buttons use a solid Lotus Pink fill with Deep Cocoa text. They feature a generous 32px horizontal padding and a 20px corner radius. Secondary buttons use a ghost style with a 1px Muted Gold border.

### Cards
Cards are the primary content vessel. They should be styled with a Warm Cream background or a subtle glassmorphic blur if placed over a colored background. The 20px rounded corners are mandatory. Add a 1px inset border in a lighter shade of the card's background to define the edges sharply.

### Input Fields
Inputs use a minimal approach: a simple bottom border in Rosewood Brown. When focused, the border thickens slightly and a soft Blush Pink glow appears behind the text.

### Chips & Tags
Used for musical genres or instrument categories. These should be pill-shaped with a Powder Blue background and Deep Cocoa text, using the `label-sm` typography.

### Specialized Separator
A "Swaralaya Separator" is a custom component consisting of three horizontal lines of varying widths, evocative of a musical staff, often used to transition between major narrative sections.