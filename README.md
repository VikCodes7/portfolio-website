# Sai Vikas Chinthirla — Portfolio

A modern, high-performance, dark-themed personal portfolio website built with **React**, **Vite**, and vanilla CSS. Designed for **R&D Software Developer** showcase with rich animations and interactive UI.

🌐 **Live Demo:** [https://VikCodes7.github.io/portfolio/](https://VikCodes7.github.io/portfolio/)

---

## 🚀 Features

- **Profile Section**: Dynamic typewriter role rotation, animated ambient glowing orbs, interactive developer code block card.
- **Skills & Technologies**: Categorized skill cards (Languages, Frontend, Backend, Cloud & DevOps, Databases, Tools) with animated skill progress bars.
- **Professional Experience**: Vertical timeline featuring role descriptions, achievements, and tech stack tags.
- **Featured Projects**: Filtered cards with live links, source repository links, and custom accent tags.
- **Contact Section**: Direct details, social links (GitHub, LinkedIn), and responsive inquiry form.
- **Modern UI/UX**: Glassmorphism, smooth scrolling, IntersectionObserver scroll-reveal animations, responsive mobile navigation drawer.
- **GitHub Pages Ready**: Automated deployment via GitHub Actions or `npm run deploy`.

---

## 🛠️ Tech Stack

- **Framework**: React 19 + Vite 8
- **Styling**: Vanilla CSS (CSS Variables, Flexbox, CSS Grid, Glassmorphism)
- **Deployment**: GitHub Pages (GitHub Actions & `gh-pages`)

---

## 💻 Getting Started Locally

### Prerequisites
- Node.js (v18+ or v22 recommended)
- npm

### Installation & Development
```bash
# Clone the repository
git clone https://github.com/VikCodes7/portfolio.git
cd portfolio

# Install dependencies
npm install

# Start local development server
npm run dev
```

Visit `http://localhost:5173/portfolio/` in your browser.

---

## 🚢 Deployment to GitHub Pages

### Method 1: Automatic via GitHub Actions (Recommended)
This repository includes a workflow in `.github/workflows/deploy.yml`.
1. Go to your repository on GitHub: `Settings` > `Pages`.
2. Under **Build and deployment** > **Source**, select **GitHub Actions**.
3. Push changes to `main` (or trigger manually via Actions tab), and the site will automatically build and deploy.

### Method 2: Manual deployment using CLI
```bash
npm run deploy
```
*(This triggers `predeploy` to build the app, then pushes the `dist` folder to the `gh-pages` branch).*

---

## ✏️ Customizing Content

- **Personal Info & Typing Titles**: Update [`src/components/profile/Profile.jsx`](src/components/profile/Profile.jsx)
- **Skills & Levels**: Edit the `skillCategories` list in [`src/components/skills/Skills.jsx`](src/components/skills/Skills.jsx)
- **Work History**: Update the `experiences` array in [`src/components/experience/Experience.jsx`](src/components/experience/Experience.jsx)
- **Projects**: Edit project titles, descriptions, and URLs in [`src/components/projects/Projects.jsx`](src/components/projects/Projects.jsx)
- **Contact Details**: Update email and links in [`src/components/contact/Contact.jsx`](src/components/contact/Contact.jsx)
