# pilotwebsite

Pilot project — FnB web solutions. Two separate apps in one repo.

## Structure

```
pilotwebsite/
├── landing-page/   → Public-facing restaurant website (SEO-optimized, GMaps-ready)
└── menu-app/       → QR-code menu & ordering app for dine-in customers
```

## Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **Deploy:** Vercel (each app as a separate project)

## Getting Started

### Landing Page
```bash
cd landing-page
npm install
npm run dev      # runs on localhost:3000
```

### Menu App
```bash
cd menu-app
npm install
npm run dev      # runs on localhost:3001
```

## TODOs before going live

- [ ] Replace all placeholder content (brand name, colors, copy, images)
- [ ] Add real Google Maps embed URL in `landing-page/app/components/Location.js`
- [ ] Connect menu-app cart to a real backend or WhatsApp order flow
- [ ] Replace mock data in `menu-app/app/data/menu.js` with real menu items
- [ ] Update metadata (title, description) in both `layout.js` files
