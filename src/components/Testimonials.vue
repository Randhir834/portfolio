<template>
  <section id="testimonials" class="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 class="section-title">What People Say</h2>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div 
          v-for="(testimonial, index) in testimonials" 
          :key="index"
          class="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
          :style="{ animationDelay: `${index * 0.1}s` }"
        >
          <!-- Quote Icon -->
          <div class="text-primary mb-4">
            <svg class="w-10 h-10 opacity-50" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
            </svg>
          </div>
          
          <!-- Testimonial Text -->
          <p class="text-gray-700 mb-6 italic leading-relaxed">
            "{{ testimonial.text }}"
          </p>
          
          <!-- Author Info -->
          <div class="flex items-center">
            <div class="w-12 h-12 bg-gradient-to-br from-primary to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
              {{ testimonial.initials }}
            </div>
            <div>
              <h4 class="font-bold text-secondary">{{ testimonial.name }}</h4>
              <p class="text-sm text-gray-600">{{ testimonial.position }}</p>
            </div>
          </div>
          
          <!-- Rating Stars -->
          <div class="flex mt-4">
            <svg 
              v-for="star in 5" 
              :key="star"
              class="w-5 h-5 text-yellow-400 fill-current"
              viewBox="0 0 20 20"
            >
              <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'Testimonials',
  setup() {
    const testimonials = ref([
      {
        name: 'Sarah Johnson',
        initials: 'SJ',
        position: 'CEO at TechCorp',
        text: 'Outstanding work! The attention to detail and creative solutions exceeded our expectations. Highly recommended for any web development project.'
      },
      {
        name: 'Michael Chen',
        initials: 'MC',
        position: 'Product Manager at StartupXYZ',
        text: 'Professional, responsive, and delivered ahead of schedule. The final product was exactly what we envisioned and more.'
      },
      {
        name: 'Emily Rodriguez',
        initials: 'ER',
        position: 'Marketing Director at Digital Agency',
        text: 'Incredible talent and work ethic. Transformed our vision into a beautiful, functional website that our clients love.'
      },
      {
        name: 'David Kim',
        initials: 'DK',
        position: 'Founder at InnovateLab',
        text: 'A true professional who understands both design and development. Communication was excellent throughout the entire project.'
      },
      {
        name: 'Lisa Anderson',
        initials: 'LA',
        position: 'CTO at CloudSolutions',
        text: 'Technical expertise combined with creative problem-solving. Delivered a scalable solution that perfectly fits our needs.'
      },
      {
        name: 'James Wilson',
        initials: 'JW',
        position: 'Business Owner',
        text: 'Best investment we made for our online presence. The website is fast, beautiful, and has significantly increased our conversions.'
      }
    ])
    
    return {
      testimonials
    }
  }
}
</script>
