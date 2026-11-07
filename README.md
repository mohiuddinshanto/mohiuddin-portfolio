# 🚀 Mohiuddin Shanto — Modern Developer Portfolio

<div align="center">

  [![Next.js](https://img.shields.io/badge/Next.js-16.3.3-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
  [![React](https://img.shields.io/badge/React-19.2-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
  [![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
  [![License](https://img.shields.io/badge/License-MIT-emerald?style=for-the-badge)](LICENSE)
  [![Status](https://img.shields.io/badge/Status-Active-brightgreen?style=for-the-badge)](#)

  <br />

  <p align="center">
    A high-performance, modern, and interactive developer portfolio website crafted with <strong>Next.js (App Router)</strong>, <strong>React 19</strong>, <strong>TypeScript</strong>, and custom modern animations. Designed to showcase MERN stack applications, client works, skills, and experience with a futuristic aesthetic.
  </p>

  <p align="center">
    <a href="https://github.com/mohiuddinshanto" target="_blank"><strong>View GitHub Profile »</strong></a>
    &nbsp;•&nbsp;
    <a href="https://www.linkedin.com/in/mohiuddin-shanto/" target="_blank"><strong>Connect on LinkedIn »</strong></a>
    &nbsp;•&nbsp;
    <a href="mailto:contact.mohiuddinshanto@gmail.com"><strong>Send an Email »</strong></a>
  </p>
</div>

---

## 🌟 Highlights & Key Features

- **⚡ Next.js App Router & React 19:** Built with cutting-edge React Server and Client architecture for lightning-fast page loading and optimal SEO.
- **🌌 Interactive 3D & Particle Canvas:** Engaging background floating orbs, particle connections, and 3D card tilt effects responsive to user cursor movement.
- **🎯 Dynamic Typewriter Hero:** Engaging hero section highlighting multi-stack capabilities (MERN, Next.js, Express, MongoDB, TypeScript) with live animated stats counter.
- **🎨 Custom Cursor & Scroll Progress:** Smooth, glowing reactive custom pointer and a responsive top scroll progress indicator.
- **💼 Project Showcase with Rich Details:** Deep dive into full-stack projects featuring tech stack tags, problem-solving challenges, live demo URLs, and GitHub links.
- **🛒 WordPress & Funnel Portfolio Section:** Dedicated showcase for 14+ live e-commerce, funnel, and agency projects built with WooCommerce & Elementor.
- **🎓 Interactive Timeline:** Clean milestones for education, certifications (Programming Hero Batch 13 Excellence), and career journey.
- **📱 Ultra-Responsive & Dark Aesthetic:** Cyberpunk / futuristic glassmorphism theme finely tuned for mobile, tablet, and desktop screens.
- **📬 One-Click Copy & Quick Contact:** Fast clipboard copy for email, direct WhatsApp chat, and interactive social links.

---

## 🛠️ Tech Stack

### Core Framework & Language
- **Framework:** [Next.js](https://nextjs.org/) (App Router, Version 16+)
- **Library:** [React 19](https://react.dev/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)

### Styling & UI
- **Styling:** Custom Modular CSS with CSS Variables & Glassmorphism Design
- **Typography:** [Syne](https://fonts.google.com/specimen/Syne) & [DM Sans](https://fonts.google.com/specimen/DM+Sans) via Google Fonts
- **Icons:** [Font Awesome 6](https://fontawesome.com/)

---

## 📂 Project Structure

```text
portfolio-next/
├── public/                     # Static assets, project thumbnails & resume
│   └── assets/
├── src/
│   ├── app/
│   │   ├── favicon.ico         # App favicon
│   │   ├── globals.css         # Global design tokens, themes & animations
│   │   ├── layout.tsx          # Root layout & meta tags
│   │   └── page.tsx            # Main single-page portfolio layout
│   ├── components/             # Reusable UI sections & interactive effects
│   │   ├── About.tsx           # About me & personal intro
│   │   ├── BackgroundOrbs.tsx  # Ambient animated glowing orbs
│   │   ├── Contact.tsx         # Contact info & social links
│   │   ├── Cursor.tsx          # Custom interactive cursor
│   │   ├── Education.tsx       # Timeline of education & experience
│   │   ├── Effects3D.tsx       # 3D tilt & card interactive hooks
│   │   ├── Footer.tsx          # Portfolio footer
│   │   ├── Hero.tsx            # Hero section with typewriter & live stats
│   │   ├── Navbar.tsx          # Responsive navigation bar
│   │   ├── ParticlesCanvas.tsx # Canvas particle network animation
│   │   ├── Projects.tsx        # Dynamic projects grid & cards
│   │   ├── ScrollProgress.tsx  # Reading & scroll progress bar
│   │   ├── ScrollReveal.tsx    # Intersection Observer scroll reveal
│   │   ├── Skills.tsx          # Categorized skill badges
│   │   └── WordPressDemos.tsx  # WordPress & e-commerce showcases
│   ├── data/
│   │   └── portfolioData.ts    # Centralized data file (projects, skills, stats)
│   └── types/
│       └── index.ts            # TypeScript interfaces & types
├── package.json
├── tsconfig.json
└── next.config.ts
```

---

## 🚀 Getting Started

Follow these steps to run the portfolio locally on your machine:

### 1. Prerequisites
- **Node.js:** v18.18.0 or newer (v20+ recommended)
- **Package Manager:** `npm`, `pnpm`, or `yarn`

### 2. Clone the Repository
```bash
git clone https://github.com/mohiuddinshanto/portfolio-next.git
cd portfolio-next
```

### 3. Install Dependencies
```bash
npm install
# or
yarn install
# or
pnpm install
```

### 4. Run Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

### 5. Build for Production
```bash
npm run build
npm run start
```

---

## ⚙️ Customization Guide

All personal information, project lists, and skills are decoupled into a single configuration file for easy maintenance:

- **Update Projects, Experience, and Skills:**  
  Edit [`src/data/portfolioData.ts`](./src/data/portfolioData.ts)
  
- **Update Contact Info & Socials:**  
  Edit [`src/components/Contact.tsx`](./src/components/Contact.tsx) and [`src/components/Footer.tsx`](./src/components/Footer.tsx)

- **Change Theme Colors & Styling:**  
  Adjust the CSS custom properties (`:root`) in [`src/app/globals.css`](./src/app/globals.css)

---

## 💼 Featured Projects Highlighted in Portfolio

| Project | Tech Stack | Live Demo | Repository |
| :--- | :--- | :---: | :---: |
| **BiblioDrop** | Next.js, React 19, MongoDB, Express, Stripe, Better Auth | [Live Link](https://bibliodrop.vercel.app/) | [GitHub](https://github.com/muhiuddinshanto/BiblioDrop_Client) |
| **YesFashion** | Next.js 15, TypeScript, MySQL, Prisma, Express 5 | [Live Link](https://woocommerce.epicoptimize.com/) | [GitHub](https://github.com/mohiuddinshanto/epic_store) |
| **Epic Optimize** | Next.js 15, Three.js, TypeScript, Tailwind, Zod | [Live Link](https://epicoptimize.com) | [GitHub](https://github.com/mohiuddinshanto/Epic-Optimize) |
| **DocAppoint** | Next.js 16, React 19, Express, MongoDB, Better Auth | [Live Link](https://doc-appoint-omega.vercel.app) | [GitHub](https://github.com/muhiuddinshanto/DocAppoint) |
| **YouTube Clone** | Next.js 16, TypeScript, MongoDB, Better Auth, HeroUI | [Live Link](https://youtube-clon-client.vercel.app) | [GitHub](https://github.com/muhiuddinshanto/youtube_clon_client) |

---

## 👨‍💻 About Mohiuddin Shanto

**MERN Stack & Frontend Developer** based in Dhaka, Bangladesh.  
Passionate about crafting performant, accessible web applications and full-stack solutions.

- 🌐 **Portfolio / GitHub:** [@mohiuddinshanto](https://github.com/mohiuddinshanto)
- 💼 **LinkedIn:** [mohiuddin-shanto](https://www.linkedin.com/in/mohiuddin-shanto/)
- 📧 **Email:** [contact.mohiuddinshanto@gmail.com](mailto:contact.mohiuddinshanto@gmail.com)
- 📱 **WhatsApp:** [+880 1620 044069](https://wa.me/8801620044069)

---

## 📄 License

This project is licensed under the [MIT License](LICENSE). Feel free to use this template to showcase your own work!

<div align="center">
  <sub>Designed & Developed with ❤️ by <a href="https://github.com/mohiuddinshanto">Mohiuddin Shanto</a></sub>
</div>

## SEO deployment setup

The current canonical URL is `https://mohiuddinshanto.epicoptimize.com`.
When moving to a custom domain, set `NEXT_PUBLIC_SITE_URL` to that domain's
origin in the hosting provider's environment variables before building. It
overrides the current URL for canonical metadata, social sharing, the sitemap,
and Person structured data. Keep the value free of a trailing slash.
