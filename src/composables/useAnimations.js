import { animate, stagger } from 'animejs'

/**
 * Composable for anime.js v4 animations throughout the portfolio
 */
export function useAnimations() {
  /**
   * Fade in from bottom with stagger
   */
  const fadeInUp = (targets, delay = 0, staggerDelay = 100) => {
    return animate(targets, {
      translateY: [50, 0],
      opacity: [0, 1],
      duration: 800,
      delay: staggerDelay ? stagger(staggerDelay, { start: delay }) : delay,
      easing: 'out(3)'
    })
  }

  /**
   * Fade in from top
   */
  const fadeInDown = (targets, delay = 0) => {
    return animate(targets, {
      translateY: [-50, 0],
      opacity: [0, 1],
      duration: 800,
      delay,
      easing: 'out(3)'
    })
  }

  /**
   * Fade in from left
   */
  const fadeInLeft = (targets, delay = 0, staggerDelay = 100) => {
    return animate(targets, {
      translateX: [-100, 0],
      opacity: [0, 1],
      duration: 800,
      delay: staggerDelay ? stagger(staggerDelay, { start: delay }) : delay,
      easing: 'out(3)'
    })
  }

  /**
   * Fade in from right
   */
  const fadeInRight = (targets, delay = 0, staggerDelay = 100) => {
    return animate(targets, {
      translateX: [100, 0],
      opacity: [0, 1],
      duration: 800,
      delay: staggerDelay ? stagger(staggerDelay, { start: delay }) : delay,
      easing: 'out(3)'
    })
  }

  /**
   * Scale in animation
   */
  const scaleIn = (targets, delay = 0, staggerDelay = 100) => {
    return animate(targets, {
      scale: [0.8, 1],
      opacity: [0, 1],
      duration: 600,
      delay: staggerDelay ? stagger(staggerDelay, { start: delay }) : delay,
      easing: 'outElastic(1, 0.8)'
    })
  }

  /**
   * Rotate and scale in
   */
  const rotateScaleIn = (targets, delay = 0) => {
    return animate(targets, {
      scale: [0, 1],
      rotate: [-180, 0],
      opacity: [0, 1],
      duration: 1000,
      delay,
      easing: 'outElastic(1, 0.6)'
    })
  }

  /**
   * Text reveal animation
   */
  const textReveal = (targets, delay = 0) => {
    return animate(targets, {
      opacity: [0, 1],
      translateY: [30, 0],
      duration: 800,
      delay,
      easing: 'out(3)'
    })
  }

  /**
   * Counter animation for numbers
   */
  const counterUp = (targets, endValue, delay = 0, duration = 2000) => {
    const element = typeof targets === 'string' 
      ? document.querySelector(targets) 
      : targets
    
    if (!element) return

    const obj = { count: 0 }
    
    return animate(obj, {
      count: endValue,
      duration,
      delay,
      easing: 'out(3)',
      round: 1,
      onUpdate: () => {
        if (element) {
          element.textContent = obj.count
        }
      }
    })
  }

  /**
   * Progress bar animation
   */
  const progressBar = (targets, percentage, delay = 0) => {
    return animate(targets, {
      width: [`0%`, `${percentage}%`],
      duration: 1500,
      delay,
      easing: 'out(3)'
    })
  }

  /**
   * Floating animation (continuous)
   */
  const floating = (targets, distance = 20) => {
    return animate(targets, {
      translateY: [0, -distance, 0],
      duration: 3000,
      easing: 'inOut(2)',
      loop: true
    })
  }

  /**
   * Pulse animation (continuous)
   */
  const pulse = (targets) => {
    return animate(targets, {
      scale: [1, 1.05, 1],
      duration: 2000,
      easing: 'inOut(2)',
      loop: true
    })
  }

  /**
   * Bounce animation
   */
  const bounce = (targets, delay = 0) => {
    return animate(targets, {
      translateY: [
        { to: -30, duration: 300 },
        { to: 0, duration: 300 },
        { to: -15, duration: 200 },
        { to: 0, duration: 200 }
      ],
      delay,
      easing: 'out(3)'
    })
  }

  /**
   * Card hover effect (call on mouseenter/mouseleave)
   */
  const cardHover = (target, isEntering = true) => {
    if (isEntering) {
      return animate(target, {
        translateY: -10,
        scale: 1.02,
        duration: 300,
        easing: 'out(3)'
      })
    } else {
      return animate(target, {
        translateY: 0,
        scale: 1,
        duration: 300,
        easing: 'out(3)'
      })
    }
  }

  /**
   * Scroll-triggered animation with Intersection Observer
   */
  const scrollTrigger = (selector, animationFn, options = {}) => {
    const elements = document.querySelectorAll(selector)
    
    if (!elements.length) return

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animationFn(entry.target)
          if (options.once !== false) {
            observer.unobserve(entry.target)
          }
        }
      })
    }, {
      threshold: options.threshold || 0.2,
      rootMargin: options.rootMargin || '0px'
    })

    elements.forEach((el) => {
      // Set initial state
      el.style.opacity = '0'
      observer.observe(el)
    })

    return observer
  }

  /**
   * Staggered grid animation
   */
  const staggeredGrid = (targets, delay = 0) => {
    return animate(targets, {
      scale: [0.5, 1],
      opacity: [0, 1],
      duration: 600,
      delay: stagger(100, {
        from: 'center',
        start: delay
      }),
      easing: 'outElastic(1, 0.8)'
    })
  }

  /**
   * Wave animation for multiple elements
   */
  const wave = (targets, delay = 0) => {
    return animate(targets, {
      translateY: [
        { to: -30, duration: 400 },
        { to: 0, duration: 400 }
      ],
      delay: stagger(100, { start: delay }),
      easing: 'inOut(2)',
      loop: true
    })
  }

  /**
   * Typewriter effect
   */
  const typewriter = (element, text, delay = 0, speed = 50) => {
    if (!element) return
    
    const el = typeof element === 'string' 
      ? document.querySelector(element) 
      : element
    
    if (!el) return

    el.textContent = ''
    const chars = text.split('')
    const obj = { progress: 0 }
    
    return animate(obj, {
      progress: chars.length,
      duration: chars.length * speed,
      delay,
      easing: 'linear',
      round: 1,
      onUpdate: () => {
        const progress = Math.floor(obj.progress)
        el.textContent = chars.slice(0, progress).join('')
      }
    })
  }

  return {
    fadeInUp,
    fadeInDown,
    fadeInLeft,
    fadeInRight,
    scaleIn,
    rotateScaleIn,
    textReveal,
    counterUp,
    progressBar,
    floating,
    pulse,
    bounce,
    cardHover,
    scrollTrigger,
    staggeredGrid,
    wave,
    typewriter
  }
}
