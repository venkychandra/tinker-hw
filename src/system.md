# Design System

## Intent

Headwater Holidays (est. 1985) — experts in self-guided active travel for discerning travelers seeking authentic experiences. Primary audience: 40–60 year olds who value independence, quality, and cultural immersion over packaged tourism. They book walking and cycling holidays across Europe and beyond, expecting hand-picked hotels, award-winning routes, and local culinary experiences.

The visual language evokes the trail itself — forest green grounds, terracotta trail markers, generous photography, warm earth tones. It should feel like a well-produced travel guide: trustworthy, expert, inviting. Not a startup SaaS, not a glossy resort brochure, not mass-market tourism. The person closing the tab should feel like they were already on the trail.

**Brand voice:** Adventurous yet approachable. Professional but warm. Emphasizes personal discovery and quality experiences over luxury positioning.

**Signature element:** Trail marker accent — a terracotta highlight on interactive elements (buttons, active states, card accents) that echoes the painted blazes on European hiking routes. This fails the swap test: put it on a fintech site and it makes no sense.

**Domain vocabulary (actual Headwater terms):**
- Use: active holidays, self-guided, walking holidays, cycling holidays, hand-picked hotels, route notes, GPS navigation app, pilgrimage routes, multi-activity, e-bikes, cultural tours, tailor-made travel, fine food & wine
- Avoid: tours (use "holidays"), packages, budget travel, mass tourism, luxury (use "quality" or "hand-picked" instead)

## Content Guidelines

**Source:** All copy must align with content-library.md (`.claude/docs/content-library.md`), which contains approved messaging, CTAs, navigation structure, and terminology from www.headwater.com.

**Tagline:** "Experts in active holidays" / "We plan the routes. You enjoy discovering them."

**Messaging hierarchy:**
1. Primary: Experts in self-guided active holidays (40+ years experience)
2. Supporting: Hand-picked hotels, award-winning routes, GPS navigation, authentic local experiences, sustainable travel

**CTAs (approved):**
- Primary: "Find a Holiday", "View Trip", "Book Now", "Request a Brochure"
- Secondary: "Learn More", "See All Destinations", "Contact Us"

**Tone:**
- Adventurous yet approachable (emphasize discovery without intimidation)
- Expert and trustworthy (40+ years, ABTA/ATOL bonded)
- Warm and personal (individual experience over mass tourism)
- Key verbs: uncover, discover, explore, enjoy, experience

## Accessibility

Standard: EAA/EN 301 549
Contrast — normal text: ≥ 4.5:1 (WCAG 2.1 AA)
Contrast — large text: ≥ 3:1 (WCAG 2.1 AA)
Non-text contrast: ≥ 3:1
Target size: ≥ 24×24px (practical minimum)
Reflow: content reflows at 320px width, no horizontal scroll
Text spacing override: must tolerate 1.5× line-height, 0.12em letter-spacing, 0.16em word-spacing without loss of content
Text resize: up to 200% without loss of content or function
Lang attribute: `lang` on `<html>` element required

## Anti-Patterns

- **Generic travel blue.** The airline/OTA blue that every booking site defaults to. Our primary is forest green — the color of the trail, not the screen.
- **Stock photo grids.** No lifeless thumbnail galleries. Photography is editorial — full-scale, generous, with room to breathe.
- **Rounded-pill buttons.** SaaS startup aesthetic. Our radii are confident (4–10px), not bubbly.
- **Gradient overlays on hero images.** The lazy dark-to-transparent fade kills photography. If text needs contrast, use a dedicated text area or a subtle overlay — don't blanket the image.
- **Floating sans-serif everything.** Avoid the weightless tech-startup look. Elements feel grounded, connected to the earth tones.
- **Icon soup.** Don't over-iconify. Text labels are primary; icons support, not replace.

## Decisions Log

| Decision | Chosen | Why |
|----------|--------|-----|
| Build tool | Astro | Static HTML+CSS output, component model for gallery assembly |
| Styling | Tailwind CSS v4 | @theme replaces tokens.css, utility classes replace @scope CSS, design tokens as Tailwind theme |
| Element approach | Semantic HTML + Tailwind | Replaces custom elements (component-*) with plain HTML + utility classes |
| State display | Interactive by default | Components always include pseudo-class variants (hover, active, focus). Form components use `state` prop only for non-interactive states (error, success, disabled). No frozen specimens for interaction states — HTML is interactive, unlike Figma |
| Responsive type | `clamp()` with `cqi` in tokens | Heading/display sizes (2xl–7xl) use `clamp(floor, Xcqi, max)` so type scales fluidly with container width. No component-level responsive type classes needed. Requires `@container` ancestor. Body text (xs–xl) stays fixed |
| Grey temperature | Warm (hue ~30) | Outdoor adventure = earth tones, warm ground. Cool grey feels corporate. Saturated with orange for warmth |
| Primary color | Forest green (hue ~152) | Domain color — pine forests, alpine meadows, European trail markers. Distinct from generic travel blue |
| Accent color | Terracotta (hue ~14) | Trail marker accent — Mediterranean paths, Tuscan clay. Signature element that fails the swap test |
| Font family | Outfit | Geometric sans-serif with warm, open letterforms. Reads like a quality travel guide, not a tech product. Good x-height, many weights |
| Border radius | 4/6/10px | Confident and grounded. 6px default. Not formal (0) or playful (12+) |
| Shadow style | Firm, warm-tinted, 5 levels | Grounded depth with less blur than typical. Warm shadow color from gray-900. Matches "solid ground" feel |
| Section spacing | 48px (page-flow) + component padding | page-flow: 48px gap between sections. Component internal padding: py-12/16/20 (FeatureGrid). Creates tighter vertical rhythm suitable for marketing pages. Override per-page with `style="--section-gap: 64px"` on page-flow container if needed |
