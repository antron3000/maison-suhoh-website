# Maison - Fashion Production Company Website

A stunning, modern fashion production company website built with Next.js, TypeScript, TailwindCSS, and Framer Motion.

## ✨ Features

- **Modern Tech Stack**: Next.js 16, TypeScript, TailwindCSS 4, Framer Motion
- **Aesthetic Design**: Minimalist, high-fashion aesthetic with smooth animations
- **Fully Responsive**: Mobile-first design that looks great on all devices
- **Smooth Animations**: Page transitions and scroll animations using Framer Motion
- **SEO Optimized**: Proper meta tags and semantic HTML structure
- **Performance**: Optimized images and lazy loading for fast page loads

## 🎨 Pages

- **Home**: Hero section with full-screen background, featured work showcase
- **Work**: Portfolio gallery with category filtering
- **Services**: Comprehensive services overview with icons
- **About**: Company story, values, and recognition
- **Contact**: Contact form with company information

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm, yarn, or pnpm package manager

### Installation

1. Navigate to the project directory:
```bash
cd fashion-website
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🛠️ Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: TailwindCSS 4
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Geist Sans & Geist Mono

## 📁 Project Structure

```
fashion-website/
├── app/                    # Next.js app directory
│   ├── page.tsx           # Homepage
│   ├── work/              # Portfolio page
│   ├── services/          # Services page
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── layout.tsx         # Root layout
│   └── globals.css        # Global styles
├── components/            # Reusable components
│   ├── navbar.tsx         # Navigation bar
│   ├── footer.tsx         # Footer
│   └── project-card.tsx   # Project card component
├── lib/                   # Utility functions
│   └── utils.ts           # Helper functions
└── public/                # Static assets
```

## 🎯 Customization

### Colors

Edit the CSS variables in `app/globals.css` to customize the color scheme:

```css
:root {
  --background: #fafafa;
  --foreground: #0a0a0a;
  --accent: #1a1a1a;
  --muted: #f5f5f5;
  --border: #e5e5e5;
}
```

### Content

- Update project data in `app/page.tsx` and `app/work/page.tsx`
- Modify service offerings in `app/services/page.tsx`
- Customize company information in `app/about/page.tsx`
- Update contact details in `app/contact/page.tsx`

### Images

Replace placeholder images with your own:
- Hero images: Update URLs in page components
- Project images: Add to `/public` folder or use external URLs

## 📦 Build for Production

```bash
npm run build
npm start
```

## 🚢 Deployment

Deploy easily to Vercel:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

Or deploy to other platforms:
- Netlify
- AWS Amplify
- Digital Ocean
- Railway

## 📝 License

This project is open source and available under the MIT License.
