# SARUN.DEV — Personal Portfolio

A modern, high-performance personal developer portfolio website built with **React 19**, **TypeScript**, **Vite**, and **Tailwind CSS**.

Featuring a cyberpunk-inspired dark aesthetic with glassmorphic cards, glowing particle effects, and dynamic data-driven content.

---

## ✨ Features

- ⚡ **Ultra Fast**: Powered by Vite and React 19 for instantaneous HMR and optimized production bundles.
- 🎨 **Modern Sci-Fi Aesthetic**: Custom liquid space background, starfield overlays, scanner animations, and glassmorphism.
- 📄 **JSON Data-Driven**: All portfolio content (Hero, Skills, Projects, Certifications, Timeline, Contacts, Navigation) is centralized in JSON files under [`src/data/`](src/data) for effortless updates.
- 📱 **Fully Responsive**: Mobile-first design with smooth animated drawer navigation and scroll progress tracking.
- 🔗 **External Project & Cert Validation**: Deployments and credentials link directly to live demos, GitHub repositories, and Coursera certificates.
- 🧭 **Hash & Route Navigation**: Seamless smooth scrolling to page sections alongside standalone route support.

---

## 🛠️ Tech Stack

- **Framework**: [React 19](https://react.dev/)
- **Build Tool**: [Vite](https://vite.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) & PostCSS
- **Routing**: [React Router](https://reactrouter.com/)
- **Linting**: ESLint 10 with TypeScript ESLint

---

## 📁 Project Structure

```text
├── public/
├── src/
│   ├── assets/             # Static images and visual assets
│   ├── components/         # Reusable UI components
│   │   ├── Arsenal.tsx     # Technical skills grid
│   │   ├── Certifications.tsx # Certifications showcase
│   │   ├── Contact.tsx     # Quick contact CTA section
│   │   ├── Footer.tsx      # Site footer
│   │   ├── Hero.tsx        # Hero banner with profile & bio
│   │   ├── History.tsx     # Career & education timeline
│   │   ├── Layout.tsx      # Page wrapper with progress bar & background
│   │   ├── Navbar.tsx      # Desktop & mobile navigation bar
│   │   ├── Reveal.tsx      # Scroll reveal animation wrapper
│   │   └── Work.tsx        # Featured projects & deployments
│   ├── data/               # 📦 Centralized JSON data files
│   │   ├── arsenal.json    # Skill categories and tools
│   │   ├── certifications.json # Certificates & credential URLs
│   │   ├── contactPage.json # Contact page headings and copy
│   │   ├── hero.json       # Headline, titles, and CTA links
│   │   ├── history.json    # Timeline milestones
│   │   ├── links.json      # Social profiles & contact endpoints
│   │   ├── navigation.json # Header links & branding
│   │   └── work.json       # Projects, thumbnails, and links
│   ├── pages/              # Route pages
│   │   ├── Contact.tsx     # Full contact details page
│   │   └── Home.tsx        # Main portfolio one-pager
│   ├── App.css
│   ├── App.tsx             # Root router configuration
│   ├── index.css           # Design tokens, custom animations & styles
│   └── main.tsx            # Application entry point
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (version 18+ recommended)
- [npm](https://www.npmjs.com/) or [pnpm](https://pnpm.io/)

### Installation

```bash
# Clone the repository
git clone https://github.com/SunSarun/website.git

# Navigate to the project directory
cd website

# Install dependencies
npm install
```

### Development

Run the local development server with Hot Module Replacement (HMR):

```bash
npm run dev
```

### Production Build

Type-check and compile the production bundle:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

### Linting

```bash
npm run lint
```

---

## 📝 Customizing Content

All text, links, projects, and media can be customized by editing the JSON files in the [`src/data/`](src/data) folder without modifying React component logic:

| File | Purpose |
| :--- | :--- |
| [`hero.json`](src/data/hero.json) | Hero section title, subtitle, and primary call-to-actions |
| [`arsenal.json`](src/data/arsenal.json) | Technical skills modules and description bullets |
| [`work.json`](src/data/work.json) | Projects list with titles, descriptions, years, images, and external URLs |
| [`certifications.json`](src/data/certifications.json) | Certifications list, credential IDs, and verification links |
| [`history.json`](src/data/history.json) | Career and education timeline entries |
| [`links.json`](src/data/links.json) | Email, Telegram, LinkedIn, Signal, GitHub, and website endpoints |
| [`navigation.json`](src/data/navigation.json) | Brand name, header navigation links, and CTA target |
| [`contactPage.json`](src/data/contactPage.json) | Contact page titles, tags, and descriptive copy |

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).
