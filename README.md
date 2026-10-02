# TONY FASHION (TONYFASHIONFIT)

An editorial, premium, mobile-first website for **Tony Fashion** — an integrated international fashion design and manufacturing house specializing in distinctive, non-basic silhouettes, experimental crazy-jeans denim architecture, and industrial craftsmanship forged over a decade.

---

## Brand Positioning & The Integrated Fashion Engine

The business operates as a unified physical enterprise:

$$\text{DESIGN} \longrightarrow \text{PRODUCTION} \longrightarrow \text{DEVELOPMENT} \longrightarrow \text{EDUCATION}$$

### The Three Major Pillars:

1. **Atelier**: Bespoke commissions, ready-to-wear formulations, runway silhouettes, and avant-garde crazy-jeans denim experimentation.
2. **Production House**: Small-batch manufacturing, B2B apparel production, pattern engineering, tech packs, and multi-point quality control.
3. **Academy**: Practical vocational training, industrial machinery mastery, apprenticeships, and industry preparation.

> **Business Rule**: The platform is an editorial brand showcase, lookbook archive, service directory, academy portal, and direct consultation channel. It deliberately omits ecommerce carts, checkouts, or artificial pricing.

---

## Core Site Structure

- **Home**: Editorial fashion-house landing experience, philosophy mandate, three pillars overview, selected lookbook pieces, and consultation contact.
- **Collections / Lookbook**: Image-led gallery with category filtering (`Experimental Denim`, `Atelier Tailoring`, `Runway Silhouette`, `Craft & Details`) and focused full-screen specification modals.
- **Services**: In-depth breakdown of Atelier, Production House, and Academy capabilities and client engagement processes.
- **Academy**: Dedicated vocational fashion institute presentation with syllabus tracks and admission standards.
- **About**: Over a decade of physical workshop craftsmanship, brand story, and philosophy of non-basic garments.
- **Journal**: Studio essays exploring denim deconstruction geometry, industrial floor integration, and apprenticeship preservation.
- **Contact**: Direct atelier consultation intake with targeted inquiry routing (Bespoke, B2B Production, Academy, Collaborations, General).

---

## Local Development

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```
The application will be accessible at `http://localhost:3000`.

### 3. Production Build
```bash
npm run build
```

---

## Deployment to Vercel

1. Push this repository to GitHub:
   ```bash
   git init
   git add .
   git commit -m "feat: complete Tony Fashion website"
   git remote add origin https://github.com/<your-username>/tony-fashion.git
   git push -u origin main
   ```
2. In the [Vercel Dashboard](https://vercel.com):
   - Click **Add New** → **Project**.
   - Import your `tony-fashion` repository.
   - Framework Preset: **Vite**.
   - Build Command: `npm run build` (or `vite build`).
   - Output Directory: `dist`.
   - Install Command: `npm install`.
3. Click **Deploy**.

---

## Architecture & Code Quality

- **Framework**: React 19 + TypeScript + Vite
- **Styling**: Tailwind CSS v4 with custom editorial typography (`Cormorant Garamond` + `Plus Jakarta Sans`)
- **Icons**: Lucide React
- **Accessibility**: Semantic HTML5 landmarks, WCAG AA contrast standards, keyboard navigability, balanced typography
- **Mobile First**: Fluid layouts engineered natively for phone viewports and scaling smoothly to desktop ultrawide
