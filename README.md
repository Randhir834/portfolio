# Portfolio Website

A modern, responsive portfolio website built with Vue.js 3, Vue Router, and Tailwind CSS.

## Features

- 🎨 Modern and responsive design
- 🚀 Built with Vue.js 3 Composition API
- 🎯 Vue Router for seamless navigation
- 💅 Styled with Tailwind CSS
- 📱 Mobile-first approach
- ⚡ Fast and optimized
- 🎭 Smooth animations and transitions

## Project Structure

```
portfolio/
├─ public/
│   └─ index.html              # HTML entry point
├─ src/
│   ├─ assets/                 # Images, icons, logos
│   │   ├─ profile.jpg
│   │   ├─ project-screenshot.png
│   │   └─ tailwind.css
│   ├─ components/             # Reusable UI components
│   │   ├─ Navbar.vue
│   │   ├─ Footer.vue
│   │   ├─ Hero.vue
│   │   ├─ About.vue
│   │   ├─ Skills.vue
│   │   ├─ ProjectCard.vue
│   │   ├─ ProjectsPreview.vue
│   │   └─ ContactForm.vue
│   ├─ views/                  # Routed pages
│   │   ├─ Home.vue
│   │   ├─ Projects.vue
│   │   └─ Contact.vue
│   ├─ router/
│   │   └─ index.js
│   ├─ App.vue
│   └─ main.js
├─ tailwind.config.js
├─ postcss.config.js
└─ package.json
```

## Setup Instructions

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run serve
```

The application will be available at `http://localhost:8080`

### 3. Build for Production
```bash
npm run build
```

### 4. Lint and Fix Files
```bash
npm run lint
```

## Customization Guide

### Update Personal Information

1. **Hero Section** (`src/components/Hero.vue`):
   - Update your name and title
   - Replace profile image in `src/assets/profile.jpg`

2. **About Section** (`src/components/About.vue`):
   - Edit the about text
   - Update statistics

3. **Skills Section** (`src/components/Skills.vue`):
   - Modify skill categories and levels
   - Add or remove technologies

4. **Projects** (`src/views/Projects.vue`):
   - Add your projects with details
   - Update project images
   - Link to GitHub repos and live demos

5. **Contact Information** (`src/views/Contact.vue`):
   - Update email address
   - Add your location
   - Update social media links

### Customize Colors

Edit `tailwind.config.js` to change the color scheme:

```javascript
theme: {
  extend: {
    colors: {
      primary: '#3B82F6',    // Main brand color
      secondary: '#1E293B',  // Secondary color
      accent: '#F59E0B',     // Accent color
    },
  },
}
```

### Add More Pages

1. Create a new component in `src/views/`
2. Add the route in `src/router/index.js`
3. Update navigation in `src/components/Navbar.vue`

## Technologies Used

- **Vue.js 3** - Progressive JavaScript framework
- **Vue Router 4** - Official router for Vue.js
- **Tailwind CSS 4** - Utility-first CSS framework
- **PostCSS** - CSS transformations
- **Autoprefixer** - CSS vendor prefixing

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available under the MIT License.

## Contact

For questions or suggestions, feel free to reach out through the contact form on the website.

---

Made with ❤️ using Vue.js and Tailwind CSS
# randhirportfolio
