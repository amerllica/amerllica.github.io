# Amer Lotfi Orimi - Portfolio Website

A stunning hacker-style portfolio website built with modern web technologies, featuring Three.js 3D animations and a terminal-inspired design.

## 🎨 Design Features

- **Hacker/Terminal Aesthetic**: WebStorm dark theme colors with electric green (#00FF00) accents
- **3D Animations**: Three.js animated particle background and geometric grid
- **Responsive Design**: Fully responsive across all devices (mobile, tablet, desktop)
- **Smooth Animations**: Framer Motion for elegant page transitions and scroll animations
- **Monospace Fonts**: Fira Code & JetBrains Mono for authentic developer feel

## 🛠️ Tech Stack

- **Frontend**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS with custom design system
- **3D Graphics**: Three.js with @react-three/fiber and @react-three/drei
- **Animations**: Framer Motion
- **UI Components**: Shadcn UI with custom hacker-style variants
- **Routing**: React Router 7

## 📁 Project Structure

```
src/
├── components/
│   ├── ThreeBackground.tsx    # 3D particle system and animated grid
│   ├── Hero.tsx               # Landing section with avatar and CTA
│   ├── About.tsx              # Summary and contact info
│   ├── Experience.tsx         # Employment timeline
│   ├── Skills.tsx             # Terminal-style tech stack display
│   ├── Recommendations.tsx    # LinkedIn testimonials
│   └── Contact.tsx            # Social links and StackOverflow flair
├── pages/
│   └── Index.tsx              # Main page layout
├── assets/
│   └── avatar.jpg             # Profile picture
└── index.css                  # Custom hacker-style design system
```

## 🎨 Design System

The color scheme uses HSL values defined in `src/index.css`:

- **Background**: Deep black (#1C1C1C)
- **Primary**: Electric green (#00FF00)
- **Accent**: Cyan-green (#00FFB3)
- **Foreground**: Bright green text (#00FF66)

Custom CSS classes:
- `.glow-text` - Text with green glow effect
- `.glow-text-subtle` - Subtle glow for headings
- `.terminal-cursor` - Blinking cursor animation
- `.scanline` - Matrix-style scan line effect

## 📄 Resume PDF and DOCX

All resume content lives in `src/data/resume/`. The site sections and the generated resume read from it.

1. Edit the data in `src/data/resume/`
2. Run `yarn resume:build` to write `public/Amer_Lotfi-Orimi_Oct-2026.pdf` and `.docx` and run the ATS check
3. The files are git-ignored; `yarn export` (and CI) builds them before the site
4. Old resume URLs redirect with `public/*.pdf.html` meta-refresh pages (GitHub Pages only, not `yarn dev`)

## 🚀 Development

```bash
yarn install
yarn resume:build
yarn dev
yarn export
yarn preview
```

## 📱 Sections

1. **Hero**: Eye-catching introduction with 3D background, avatar, and CTAs
2. **About**: Professional summary with location and contact details
3. **Experience**: Timeline of work history with key achievements
4. **Skills**: Terminal-style tech stack showcase (30+ technologies)
5. **Recommendations**: LinkedIn testimonials from colleagues
6. **Contact**: Social links, email, phone, and StackOverflow flair

## 🌐 Social Links

All social links are integrated in the Contact section:
- LinkedIn: [@amerllica](https://linkedin.com/in/amerllica)
- GitHub: [@amerllica](https://github.com/amerllica)
- StackOverflow: [amerllica](https://stackoverflow.com/users/amerllica)
- Medium: [@amerllica](https://medium.com/@amerllica)
- Email: amerllica@gmail.com
- Phone: +98 920 201 6078

## 🎯 Features

- ✅ Single-page application with smooth scrolling
- ✅ Three.js animated background (particles + grid)
- ✅ Terminal/console aesthetic throughout
- ✅ Responsive design (mobile-first approach)
- ✅ StackOverflow flair integration
- ✅ LinkedIn recommendations with profile pictures
- ✅ Download resume button
- ✅ SEO optimized with meta tags
- ✅ Performance optimized animations
- ✅ Accessible color contrast ratios

## 🎭 Customization

To customize the colors, edit `src/index.css`:

```css
:root {
  --primary: 120 100% 50%;  /* Change hue for different green */
  --accent: 150 100% 50%;   /* Cyan-green accent */
  /* Add your custom colors here */
}
```

## 📝 Notes

- The StackOverflow flair updates automatically from Stack Exchange
- LinkedIn recommendation profile images have fallback to generated avatars
- Three.js animations are optimized for performance
- All animations respect user's `prefers-reduced-motion` setting
- Custom scrollbar styled to match the theme

## 🔧 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📄 License

Personal portfolio website for Amer Lotfi Orimi
© 2026 All rights reserved
