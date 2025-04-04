
# 📝 Nuxt 3 Blog – Dynamic Routing & Client-Side Fetching

A minimal, responsive blog built with **Nuxt 3** featuring dynamic routes, client-side data fetching, and TailwindCSS styling. Posts are fetched from a mock static JSON file, with individual pages generated using Nuxt’s file-based dynamic routing.

## 🚀 Objective

Build a blog where users can:
- Browse a list of blog posts on the homepage
- Click "Read More" to view full posts on dynamic URLs
- Experience smooth client-side interactivity with loading states and responsive design

---

## ✨ Features

- ⚙️ Built with **Nuxt 3**
- 📄 Dynamic routing using Nuxt’s file-based structure (`/posts/[slug].vue`)
- 🔄 **Client-side fetching** using `useFetch`
- 🎨 Styled with **TailwindCSS**
- 📱 Fully **responsive** layout
- 🧭 Basic navigation bar and footer
- ⏳ Loading spinner/skeleton UI while data loads
- 🧩 Posts sourced from a local `posts.json` file (acts as mock API)
- 🔍 Search bar to filter posts by title or content
- 🌍 Multi-language support with i18n
- 📈 Google Analytics integration
- 📄 Pagination or infinite scroll on homepage
- 📬 Static contact form with basic validation

---

## 📸 Preview

> [Live Demo (Optional)](https://nuxtblogapp.netlify.app/)



---

## 🧰 Tech Stack

- **Nuxt.js v3**
- **TailwindCSS**
- **JavaScript / Composition API**
- **Static JSON for mock API**

---

# Nuxt Minimal Starter

Look at the [Nuxt documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
