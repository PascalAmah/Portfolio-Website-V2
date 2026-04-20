# Pascal Amaliri - Portfolio Website

A modern, interactive portfolio website showcasing Pascal Amaliri's work as a full-stack software engineer. Built with React, TypeScript, and Tailwind CSS with support for dark/light mode themes.

**View Live:** [Your Portfolio URL]

## Features

✨ **Dark/Light Mode Toggle** - Seamless theme switching with localStorage persistence  
📱 **Responsive Design** - Mobile-first approach with smooth animations  
⚡ **Performance Optimized** - Lazy loading, image optimization, and smooth scrolling  
🎨 **Modern UI** - Interactive components with GSAP animations  
🔍 **SEO Friendly** - Meta tags and semantic HTML

## Tech Stack

**Frontend:**

- React 19
- TypeScript
- Tailwind CSS
- Vite
- GSAP (animations)
- Lucide React (icons)

**Development:**

- pnpm (package manager)
- Node.js

## Getting Started

### Prerequisites

- Node.js (v16+)
- pnpm (recommended) or npm

### Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd pascal-amaliri-portfolio
   ```

2. Install dependencies:

   ```bash
   pnpm install
   # or
   npm install
   ```

3. Start the development server:

   ```bash
   pnpm dev
   # or
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
src/
├── components/          # React components
│   ├── ui/             # Reusable UI components
│   ├── Navbar.tsx      # Navigation with dark/light toggle
│   ├── Hero.tsx        # Hero section
│   ├── AboutSkills.tsx # About and skills section
│   ├── Projects.tsx    # Featured projects
│   ├── Articles.tsx    # Blog articles
│   └── Footer.tsx      # Footer with contact info
├── hooks/              # Custom React hooks
├── utils/              # Utility functions
├── constants.ts        # App constants
└── types.ts           # TypeScript types
```

## Key Features

### Dark/Light Mode

- Toggle between dark and light themes
- Preference saved to localStorage
- Smooth color transitions
- Off-white light mode with warm tones

### Responsive Design

- Mobile-first approach
- Optimized for all screen sizes
- Touch-friendly interactions

### Animations

- GSAP scroll-triggered animations
- Smooth page transitions
- Interactive hover effects
- Respects `prefers-reduced-motion`

## Building for Production

```bash
pnpm build
# or
npm run build
```

The build output will be in the `dist/` folder.

## Environment Variables

No environment variables required for basic functionality. The portfolio is fully static.

## Color Scheme

### Light Mode

- Background: #faf8f4 (warm off-white)
- Primary Text: #080604 (nearly black)
- Accents: Warm tans and grays

### Dark Mode

- Background: #0a0a0a (deep black)
- Primary Text: #ffffff (white)
- Accents: Golden yellow (#FFD166)

## Contributing

This is a personal portfolio. However, suggestions and feedback are welcome!

## License

© 2024 Pascal Amaliri. All rights reserved.

## Connect

- **Email:** pascal.amah10@gmail.com
- **LinkedIn:** [pascal-amaliri](https://www.linkedin.com/in/pascal-amaliri-ba14b6193/)
- **GitHub:** [PascalAmah](https://github.com/PascalAmah)
- **Twitter:** [@chisax\_](https://twitter.com/chisax_)
