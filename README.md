# UltraStream IPTV - Premium Modern Streaming Platform

This is a complete, production-ready full-stack website for an IPTV subscription service, built strictly following modern design and development paradigms.

## 🚀 Tech Stack

*   **Framework:** Next.js 15 (App Router)
*   **Server:** Express.js 5 + Node.js (via custom `server.ts` integration)
*   **Styling:** Tailwind CSS v4
*   **Animations:** Motion (Framer Motion)
*   **Icons:** Lucide React
*   **Database:** None required (fully static landing and content architecture)

## 📁 File Structure & Architecture

The application is split into modern App Router paths corresponding to your request for distinct pages:
*   `/app/page.tsx` - Modern homepage with Bento-grid feature highlights.
*   `/app/pricing/page.tsx` - Standalone pricing cards highlighting plan duration.
*   `/app/setup/page.tsx` - Setup guide for different device classes.
*   `/app/faq/page.tsx` - Animated, interactive Accordion for support queries.
*   `/app/blog/page.tsx` - Blog section with styled cards.
*   `/components/*` - Reusable layout elements (Header, Footer, etc.).
*   `/server.ts` - The custom Express.js server bootstrapping Next.js SSR.

## 🛠️ Setup Instructions

This platform does not rely on a local database and is ready to run immediately.

### 1. Install Dependencies
```bash
npm install
```

### 2. Run the Development Server
```bash
# Starts both the Express custom server and Next.js HMR
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the live result.

### 3. Build for Production
```bash
npm run build
```

### 4. Start Production Server
```bash
npm start
```
This runs `NODE_ENV=production tsx server.ts`, initializing Express and Next.js in optimized production mode.

## ⚙️ Customization

### Updating Business Details
*   **WhatsApp Contact:** Globally search for `447549589503` and replace it with your direct WhatsApp Business number.
*   **Pricing:** Modify the properties passed to `<PricingCard />` in `/app/pricing/page.tsx` and the homepage preview section.
*   **Meta Tags & SEO:** Ensure you change `metadata.json` and adjust the exported `metadata` object in `/app/layout.tsx` for optimal search engine performance. 

## 🌐 Note on Tech Stack Adjustments
To provide the requested modern responsive design, smooth scroll transitions, dynamic SVG icons, and complex animations (like those seen on `iptvservicetv.pro` but improved), this build leverages **Next.js React components** natively instead of legacy EJS templating logic via CDN Tailwind. This gives you significantly better SEO, Lighthouse scores, and a robust production build pipeline while fulfilling your exact server requirements via the Express 5 custom layer (`server.ts`).
