# Imagery Guidelines

Guidelines for photography and visual assets based on Headwater Holidays brand.

**To complete:** Visit www.headwater.com and document their actual photography style by filling in the sections below.

---

## Photography Style

### Subject Matter
**Document what Headwater photographs:**
- [ ] Landscapes (mountains, valleys, coastlines, countryside)
- [ ] People (solo travelers, couples, groups, ages shown)
- [ ] Activities (walking, cycling, dining, cultural experiences)
- [ ] Accommodations (hotels, exteriors, interiors, amenities)
- [ ] Food & wine (table settings, regional dishes, wine)
- [ ] Cultural elements (architecture, towns, local scenes)

### Composition Preferences
**Analyze their hero images and card photos:**
- Perspective: Wide landscape shots vs close-ups vs medium shots
- Focal points: People in environment vs pure landscape vs cultural details
- Framing: Centered vs rule of thirds vs leading lines
- Depth: Foreground/background layering or flat compositions

### Color Treatment
- [ ] Natural/realistic colors
- [ ] Slightly saturated
- [ ] Desaturated/muted
- [ ] Warm tones emphasized
- [ ] Cool tones emphasized
- [ ] High contrast or soft contrast

### People in Photos
- [ ] People present: Yes / No / Sometimes
- [ ] If yes: Age range shown (align with 40-60 target audience?)
- [ ] Style: Candid action shots vs posed vs back-to-camera
- [ ] What are they doing: Walking trails, cycling, dining, exploring towns
- [ ] Group size: Solo, couples, small groups

### Mood & Atmosphere
- Aspirational or relatable
- Serene/peaceful or energetic/active
- Intimate moments or grand vistas
- Morning/golden hour lighting preferences

---

## Image Ratios & Sizes

### Hero Images
**Typical aspect ratio:** _____ (e.g., 16:9, 21:9, 3:2)
**Minimum width:** _____ px

### Card/Thumbnail Images
**Aspect ratio:** _____ (e.g., 4:3, 3:2, 1:1)
**Sizes needed:**
- Thumbnail: _____ x _____ px
- Standard: _____ x _____ px
- Large: _____ x _____ px

### Testimonial/Profile Photos
**Format:** Square / Portrait / Circle crop
**Size:** _____ x _____ px

### Feature Icons
**Style:** Line icons / Filled icons / Illustrated / Photographic
**Size:** _____ x _____ px

---

## Image Sources

### Primary Sources
- [ ] Custom photography (commissioned)
- [ ] Stock photography (which services?)
- [ ] User-generated content
- [ ] Partner/hotel provided images

### Photography Credits
**Required attribution:** Yes / No
**Credit format:** _____

---

## Image Alt Text Guidelines

**Pattern observed on Headwater site:**

Example formats:
- Descriptive: "Couple walking through vineyard in Tuscany, Italy"
- SEO-focused: "Walking holiday Tuscany vineyard trail"
- Hybrid: "Self-guided walking holiday in Tuscany - vineyard trail"

**Elements to include:**
- [ ] Activity type (walking, cycling)
- [ ] Location (specific or general)
- [ ] Subjects (people, landmarks)
- [ ] Context (holiday type, season)

---

## Brand Photography Dos & Don'ts

### DO
- Use imagery that evokes the "already on the trail" feeling
- Show authentic European landscapes and cultural settings
- Feature quality hotels and dining experiences
- Demonstrate accessible activity levels (not extreme sports)
- Include couples/mature travelers when showing people
- Capture local character and authentic experiences

### DON'T
- Generic stock photos (per system.md anti-patterns)
- Lifeless thumbnail galleries
- Over-filtered or artificial colors
- Extreme sports or intimidating difficulty
- Young backpacker aesthetic
- Mass tourism or resort imagery
- Rushed/crowded scenes

---

## Specific Image Categories

### Walking Holiday Images
**Should show:**
- [ ] Well-marked trails
- [ ] Varied terrain (not just extreme)
- [ ] Scenic European landscapes
- [ ] Activity-appropriate clothing/gear
- [ ] Weather variations

### Cycling Holiday Images
**Should show:**
- [ ] Bike types: Road bikes, e-bikes, touring bikes
- [ ] Cycling routes: countryside, coastal, vineyard, village
- [ ] Stop points: cafes, viewpoints, cultural sites

### Accommodation Images
**Should show:**
- [ ] Exterior character
- [ ] Interior comfort/style
- [ ] Dining spaces
- [ ] Local architectural character
- [ ] "Hand-picked" quality feel

### Food & Wine Images
**Should show:**
- [ ] Regional specialties
- [ ] Table settings with local character
- [ ] Wine in context
- [ ] Outdoor dining when relevant

### Cultural/Destination Images
**Should show:**
- [ ] Architectural landmarks
- [ ] Local markets/town scenes
- [ ] Cultural activities
- [ ] Regional character

---

## Image Processing Guidelines

### Overlay Text on Images
**Per system.md anti-patterns:**
- ❌ DON'T use gradient overlays (dark-to-transparent fade)
- ✅ DO use subtle uniform overlay when text needs contrast
- ✅ DO use dedicated text area
- ✅ DO reduce image contrast + adjust brightness for background treatment

**From design principles:**
Four approved techniques:
1. **Overlay**: Semi-transparent solid color (black/white) behind text area
2. **Lower contrast + brightness adjustment**: Flatten image, compensate with brightness
3. **Colorize**: Lower contrast + desaturate + solid fill with mix-blend-mode: multiply
4. **Text shadow**: Large blur radius, NO offset (e.g., `text-shadow: 0 0 20px rgba(0,0,0,0.5)`)

---

## Quick Reference Checklist

When selecting/editing images for Headwater components:

- [ ] Aligns with "well-produced travel guide" aesthetic
- [ ] Shows authentic European travel experiences
- [ ] Quality over quantity (no stock photo grids)
- [ ] Evokes discovery and personal experience
- [ ] Matches target audience (40-60 age range)
- [ ] Shows self-guided nature (independence, not group tours)
- [ ] Features hand-picked quality (hotels, routes, experiences)
- [ ] Natural colors (warm earth tones per brand palette)
- [ ] Generous photography with room to breathe
- [ ] Activity level is approachable (not extreme/intimidating)

---

## Image Delivery Specifications

### File Formats
- Hero/large images: WebP with JPG fallback
- Icons: SVG preferred
- Thumbnails: WebP with JPG fallback

### Optimization
- Compress for web delivery
- Provide 1x, 2x, 3x versions for retina displays
- Use responsive image srcset
- Lazy load below-the-fold images

### Naming Convention
**Suggested format:**
`{category}-{location}-{activity}-{descriptor}.{ext}`

Examples:
- `hero-tuscany-walking-vineyard.webp`
- `card-alps-cycling-lakeside.jpg`
- `hotel-provence-exterior-evening.webp`

---

## Action Items

**To complete this guide:**

1. **Visit www.headwater.com** and screenshot:
   - [ ] Homepage hero
   - [ ] 5-10 holiday cards/thumbnails
   - [ ] Feature section images
   - [ ] Testimonial photos (if present)
   - [ ] Footer/about section imagery

2. **Analyze screenshots:**
   - [ ] Fill in composition/style sections above
   - [ ] Document color treatment patterns
   - [ ] Note aspect ratios used
   - [ ] Extract alt text examples

3. **Update design system:**
   - [ ] Add real image examples to gallery pages
   - [ ] Update Hero component examples with real photos
   - [ ] Update Card examples with destination images
   - [ ] Test overlay techniques on actual Headwater imagery

4. **Color palette verification:**
   - [ ] Extract brand colors from site using dev tools
   - [ ] Compare against current tokens in global.css
   - [ ] Update if needed
