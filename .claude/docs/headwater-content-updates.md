# Headwater Content Updates

**Date:** 2026-02-10
**Source:** www.headwater.com

This document tracks the updates made to align the design system with actual Headwater Holidays content.

---

## ✅ Completed Updates

### 1. Created content-library.md
**Location:** `.claude/docs/content-library.md`

**Contains:**
- Real brand taglines and messaging
- Actual navigation structure from Headwater site
- Approved CTAs and button text
- Footer link organization
- Domain vocabulary (use/avoid lists)
- Brand voice guidelines
- Sample copy for each component type
- Social proof stats and certifications

### 2. Updated system.md
**Location:** `src/system.md`

**Changes:**
- ✅ Updated Intent section with real Headwater positioning (est. 1985, target audience refinement)
- ✅ Added actual brand voice description
- ✅ Replaced generic domain vocabulary with real Headwater terminology
- ✅ Added new "Content Guidelines" section with approved messaging, CTAs, and tone
- ✅ Linked to content-library.md as source of truth

---

## 📋 Next Steps: Component Updates

### Components Needing Content Updates

#### 1. **Nav.astro** (Navigation)
**Current placeholder links:**
```astro
<a href="/trips">Trips</a>
<a href="/destinations">Destinations</a>
<a href="/about">About</a>
<a href="/contact">Contact</a>
```

**Update to real structure:**
```astro
<a href="/walking">Walking</a>
<a href="/cycling">Cycling</a>
<a href="/destinations">Destinations</a>
<a href="/offers">Offers</a>
```

**Also update:**
- CTA button: "Book a Trip" → "Find a Holiday" or "Request a Brochure"
- Add contact info utility nav: Phone 01606 720199

---

#### 2. **Footer.astro**
**Current tagline (line 61, 171):**
```astro
Self-guided walking and cycling adventures across Europe's most beautiful landscapes.
```

**Update to:**
```astro
Experts in active holidays since 1985. Self-guided walking and cycling adventures with hand-picked hotels and award-winning routes.
```

**Footer link sections (lines 88-124):**

**Replace current sections with:**

**Customer Service:**
- Contact us
- Request a brochure
- What's included in your price
- Terms & Conditions
- Booking Conditions
- Privacy Notice
- Travel Insurance
- Gift Vouchers

**About Us:**
- Our Story
- Meet the Team
- Hand Picked Hotels
- Fine Food & Wine
- Sustainable Travel
- Our Blog

**Here to Help:**
- How to Book
- Planning Your Holiday
- FAQ
- Support Overseas

**Also add:**
- Contact info: Phone 01606 720199, Email sales@headwater.com
- Trust badges section for ABTA, ATOL 9957, B-Corp
- Update social links to include YouTube, Pinterest, LinkedIn (currently only FB, Instagram, Twitter)

---

#### 3. **Hero.astro**
**Gallery examples should use real copy:**

**Example 1 (Image variant):**
```astro
<Hero
  variant="image"
  eyebrow="Experts in active holidays"
  heading="We plan the routes. You enjoy discovering them."
  subheading="Self-guided walking and cycling adventures across Europe and beyond. Hand-picked hotels and award-winning routes since 1985."
  primaryCta="Find a Holiday"
  secondaryCta="Request a Brochure"
  imageSrc="..."
/>
```

**Example 2 (Split variant):**
```astro
<Hero
  variant="split"
  eyebrow="Since 1985"
  heading="Experts in active holidays"
  subheading="Tailor-made tours combining award-winning routes, hand-picked hotels, and authentic local experiences for walkers and cyclists of all levels."
  primaryCta="View Holidays"
  secondaryCta="Request a Brochure"
  imageSrc="..."
/>
```

---

#### 4. **CTA.astro**
**Update gallery examples with real CTAs:**

```astro
<CTA
  heading="Ready for your next adventure?"
  subheading="Browse our collection of hand-picked walking and cycling holidays across Europe and beyond."
  primaryCta="Find a Holiday"
  secondaryCta="Request a Brochure"
/>
```

---

#### 5. **Features.astro (FeatureGrid)**
**Use real value propositions:**

1. **Hand-picked Hotels**
   Carefully sourced accommodations since 1985

2. **Headwater Navigation**
   GPS route app and detailed route notes for easy exploration

3. **Fine Food & Wine**
   Authentic local culinary experiences

4. **Travel Your Way**
   ABTA/ATOL bonded with flexible travel options

5. **Sustainable Travel**
   B-Corp certified. Supporting people and nature to thrive in harmony

6. **Expert Routes**
   Award-winning self-guided walking and cycling routes

---

#### 6. **Stats.astro**
**Use real company stats:**

```astro
<Stats>
  <Stat number="40+" label="Years of Experience" />
  <Stat number="35+" label="European Destinations" />
  <Stat number="1985" label="Established" />
  <Stat label="ATOL Protected" value="9957" />
</Stats>
```

---

#### 7. **Testimonials.astro**
**Section heading:**
- Current: Generic
- Update to: "What our travelers say" or "Guest reviews"

---

#### 8. **Newsletter (in Footer.astro)**
**Current newsletter heading (line 143):**
```astro
<h2>Stay on the trail</h2>
```

**Keep this** - it aligns well with brand voice, better than generic "Keep an eye out for our newsletter"

**Update description if needed:**
```astro
Get trip ideas, route inspiration, and exclusive offers delivered to your inbox.
```

---

## 🎨 Design Token Verification

### Colors
Current design system uses:
- **Primary:** Forest green (hue ~152)
- **Accent:** Terracotta (hue ~14)

**Action needed:** Visit www.headwater.com and verify these colors match their actual brand palette. Extract hex codes from their site using browser dev tools if adjustment needed.

### Typography
Current: **Outfit** font

**Action needed:** Inspect www.headwater.com to verify they use Outfit or if they have a different brand font. Update `global.css` if needed.

---

## 📝 Reference Files

**Content source of truth:**
- `.claude/docs/content-library.md` - All approved copy, messaging, CTAs, navigation

**System guidelines:**
- `src/system.md` - Intent, brand voice, content guidelines, design decisions

**When creating new components or pages:**
1. Check content-library.md for approved copy
2. Use real navigation structure
3. Follow terminology guidelines (use/avoid lists)
4. Apply brand voice: adventurous yet approachable, expert and trustworthy

---

## 🔄 Ongoing Maintenance

**When Headwater updates their site:**
1. Re-fetch content from www.headwater.com
2. Update content-library.md with new messaging/structure
3. Update affected components
4. Document changes in system.md decisions log if design patterns change

**Version control:**
- Content library includes "Last updated" date
- Track significant content changes in git commits
- Reference Headwater site version/date when making updates
