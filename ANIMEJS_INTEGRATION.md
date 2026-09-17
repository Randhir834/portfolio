# Anime.js Integration Documentation

This document describes the complete anime.js animation integration across your portfolio website.

## 📦 Installation

```bash
npm install animejs
```

## 🎨 Animation Composable

Created a reusable animation composable at `src/composables/useAnimations.js` that provides:

### Available Animations

1. **fadeInUp** - Elements slide up while fading in
2. **fadeInDown** - Elements slide down while fading in
3. **fadeInLeft** - Elements slide in from left
4. **fadeInRight** - Elements slide in from right
5. **scaleIn** - Elements scale up from smaller size
6. **rotateScaleIn** - Elements rotate and scale in
7. **textReveal** - Text appears with animation
8. **counterUp** - Number counter animation
9. **progressBar** - Progress bar fill animation
10. **floating** - Continuous floating motion (loop)
11. **pulse** - Continuous pulse effect (loop)
12. **bounce** - Bounce animation
13. **cardHover** - Smooth card hover effects
14. **scrollTrigger** - Trigger animations on scroll
15. **staggeredGrid** - Staggered grid item animations
16. **wave** - Wave animation across elements
17. **typewriter** - Typewriter text effect

## 🎯 Components with Animations

### 1. **Hero Section** (`Hero.vue`)
- ✅ Subtitle fades in from top
- ✅ Main title with text reveal
- ✅ Description fades up
- ✅ Buttons fade up with stagger
- ✅ Profile image container fades up
- ✅ Continuous floating animation on profile circle
- ✅ Pulse effect on glow ring

### 2. **About Section** (`About.vue`)
- ✅ Section title fades up
- ✅ Text content fades in from left with stagger
- ✅ Stats cards scale in with counter animations
- ✅ Number counters animate from 0 to target value

### 3. **Skills Section** (`Skills.vue`)
- ✅ Section title fades up
- ✅ Orbit nodes scale in with stagger
- ✅ Stats cards at bottom scale in
- ✅ Counter animations for stats (15+, 20+, etc.)

### 4. **Experience Section** (`Experience.vue`)
- ✅ Section title fades up
- ✅ Work experience cards fade in from left
- ✅ Education cards fade in from left
- ✅ Scroll-triggered animations

### 5. **Projects Section** (`ProjectsPreview.vue`)
- ✅ Section title and description fade up
- ✅ Project cards animate in staggered grid pattern
- ✅ "View All Projects" button fades up
- ✅ Individual project cards have hover animations

### 6. **Project Cards** (`ProjectCard.vue`)
- ✅ Smooth hover animation (lift and shadow)
- ✅ Scale and translate on hover
- ✅ Custom card hover effect

### 7. **Call to Action** (`CallToAction.vue`)
- ✅ Heading fades up
- ✅ Description fades up
- ✅ Buttons scale in with stagger
- ✅ Background blob animations (CSS)

### 8. **Contact Section** (`ContactSection.vue`)
- ✅ Header fades up
- ✅ Contact info cards fade in from left with stagger
- ✅ Contact form fades in from right

### 9. **Footer** (`Footer.vue`)
- ✅ Three columns animate: left, up, right
- ✅ Bottom bar fades up
- ✅ Scroll-triggered entrance

### 10. **Scroll to Top Button** (`ScrollToTop.vue`)
- ✅ Elastic bounce entrance animation
- ✅ Scale and translate effects

### 11. **App-Level** (`App.vue`)
- ✅ Page transition animations on route change
- ✅ Smooth opacity and translateY on navigation

## 🎬 Animation Patterns

### Scroll-Triggered Animations

Most sections use Intersection Observer to trigger animations when they come into view:

```javascript
import { useAnimations } from '@/composables/useAnimations'

const { fadeInUp, scrollTrigger } = useAnimations()

onMounted(() => {
  scrollTrigger('.my-element', (element) => {
    fadeInUp(element, 0)
  }, { threshold: 0.2 })
})
```

### Counter Animations

Number counters animate from 0 to their target value:

```javascript
const { counterUp } = useAnimations()

// Animate to 350 with a + suffix
counterUp('.counter-element', 350, 200, 1500)
// Then add back the + after animation completes
```

### Staggered Animations

Elements animate in sequence with delays:

```javascript
const { fadeInUp } = useAnimations()

// Each element delays by 100ms
fadeInUp('.element', 0, 100) // stagger delay
```

### Hover Effects

Interactive hover animations for cards:

```javascript
const { cardHover } = useAnimations()

// On mouse enter
cardHover(element, true)

// On mouse leave
cardHover(element, false)
```

## 🎨 Initial Hidden States

All animated elements start with `opacity: 0` in their CSS to prevent flash of unstyled content:

```css
.section-title,
.hero-description,
.project-card {
  opacity: 0;
}
```

## ⚡ Performance Considerations

1. **Intersection Observer** - Animations only trigger when elements are in viewport
2. **Once** parameter - Most animations run once per page load
3. **Cleanup** - Observers are disconnected on component unmount
4. **GPU Acceleration** - Transform and opacity animations use GPU

## 🎯 Animation Timing

- **Initial delays**: 0-400ms
- **Stagger delays**: 50-150ms between items
- **Duration**: 600-1500ms depending on animation type
- **Easing**: Mostly `easeOutCubic` and `easeOutElastic`

## 🔄 Continuous Animations

Some animations loop infinitely:
- Profile image floating (Hero)
- Glow ring pulse (Hero)
- Background blobs (Call to Action)
- Orbit rotations (Skills - CSS)

## 📱 Responsive Behavior

All animations work across:
- Desktop (full animations)
- Tablet (optimized timing)
- Mobile (shorter durations, smaller distances)

## 🛠️ Customization

To modify animations, edit `src/composables/useAnimations.js`:

```javascript
// Example: Change fade in duration
const fadeInUp = (targets, delay = 0, stagger = 100) => {
  return anime({
    targets,
    translateY: [50, 0],
    opacity: [0, 1],
    duration: 1200, // Changed from 800
    delay: anime.stagger(stagger, { start: delay }),
    easing: 'easeOutCubic'
  })
}
```

## 📊 Animation Coverage

✅ **100% of major sections animated**
- Hero Section
- About Section  
- Skills Section
- Experience Section
- Projects Section
- Call to Action
- Contact Section
- Footer

✅ **Interactive elements**
- Project cards (hover)
- Navigation (smooth transitions)
- Scroll to top button
- Page transitions

## 🚀 Running the Project

```bash
# Install dependencies
npm install

# Run development server
npm run serve

# Build for production
npm run build
```

## 📝 Notes

- All animations are non-blocking and performance-optimized
- Animations respect user's motion preferences (can be enhanced)
- Scroll-triggered animations use `threshold` and `rootMargin` for precise control
- Counter animations handle both pure numbers and numbers with suffixes (+, K, etc.)

---

**Animation Library**: [anime.js v4.4.1](https://animejs.com/)  
**Integration Date**: June 2026  
**Status**: ✅ Complete
