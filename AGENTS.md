# Topla Audience Demo — Agent Guide

## 1. Project Intent

Build a **preview-only marketing demo** for Topla (school & office stationery).
The demo proves one core idea: **a single product catalog can be presented through
two radically different audience experiences** — School & College and Office &
Executive — and the visitor picks their segment on the homepage.

This is a client-facing prototype, not production software. Everything is static,
data is mocked, and no real checkout, auth, or backend CMS is required.

**Success looks like:** a stakeholder opens the homepage, picks a segment, and
immediately "feels" two different brands — while the same tagged products appear
in both worlds.

---

## 2. Scope: Demo vs. Production

### In scope (must ship in the demo)

| # | Feature | Demo expectation |
|---|---------|------------------|
| 1 | Homepage with segment chooser | Two large, distinct entry cards → redirect to landing pages |
| 2 | School & College landing page | Pastel visual world, hero, CTA, featured school products |
| 3 | Office & Executive landing page | Corporate visual world, hero, CTA, featured office products |
| 4 | Product segment tagging | One product can belong to School, Office, or both |
| 5 | Catalog + filters | Keyword, brand, category, segment; glassmorphism cards |
| 6 | Product detail page | Gallery, description, specs, variants, "add to inquiry" |
| 7 | Inquiry basket drawer | Add/edit/remove, qty, badge, send list via WhatsApp link |
| 8 | Distribution map | Static SVG map with interactive HQ/factory/warehouse/hub pins |
| 9 | Sister brands page | Topla Cerdas, Topla Cermat, Maxximo |
| 10 | Global header, footer, floating WhatsApp button | Shared across pages |
| 11 | Language toggle (ID/EN) | Manual dictionary-based translation persists per visitor |
| 12 | Basic SEO | Meta/OG tags, JSON-LD, `robots.txt`, `sitemap.xml` |

### Out of scope (mock or omit — do not over-engineer)

- Real CMS backend, database, authentication, file uploads.
- Real checkout, payments, stock levels, shipping calculation.
- Real Google Maps / map API keys (use a static SVG map).
- Live GTranslate integration. Use the manual ID/EN dictionary for the demo and
  leave a clearly marked stub where GTranslate would be dropped in.
- Real Analytics/Search Console accounts. Add placeholders only.
- If an admin view is needed for the demo, build a **static mock** page reading
  the same JS data file; no persistence beyond `localStorage`.

> Default position: if a feature needs a server, fake it in the front end and
> label it as demo data.

---

## 3. Tech Stack & Constraints

- **Static multi-page site**: semantic HTML5 + CSS + vanilla JavaScript (ES modules).
- **No framework, no build step, no npm dependencies.** This keeps preview trivial.
- Shared behavior (header, footer, basket, i18n) is rendered by JS modules so it
  stays consistent across pages.
- Mock data lives in `assets/js/data.js`; no API calls.
- Inquiry basket persists in `localStorage`.
- Serve locally with `python3 -m http.server 8000` and open `http://localhost:8000`.
  (ES modules do not work over `file://`.)
- Fonts/icons via CDN are acceptable (Google Fonts, inline SVG icons). No icon
  library dependency; prefer inline SVG.
- Must work on modern Chrome/Safari/Firefox, mobile-first from 360px up.

---

## 4. Site Map

```
/                    index.html        Home + segment chooser
/school              school.html        School & College landing
/office              office.html        Office & Executive landing
/catalog             catalog.html       All products + filters
/product?id=...      product.html       Product detail
/distribution        distribution.html  Interactive distribution map
/sister-brands       sister-brands.html Topla Cerdas / Cermat / Maxximo
/about               about.html         Brand story
/contact             contact.html       Contact + inquiry CTA
/admin               admin.html         OPTIONAL mock CMS (phase 2)
```

Flat `.html` files are fine for the demo; readable URLs above describe intent.
Every page includes the shared header, footer, inquiry drawer, and floating
WhatsApp button.

---

## 5. Visual Direction

The two landing pages must feel like **different websites that share a parent
brand**, not two color themes of the same template.

### School & College — "Playful Pastel"

- Palette: mint `#B8E6D9`, butter `#FFE9A8`, lavender `#D9CDF5`, peach `#FFC9B5`,
  ink `#24303A`, white.
- Rounded, organic shapes; sticker-like badges; hand-drawn doodles/underlines;
  soft blobs and grain texture.
- Bouncy but restrained motion: float, tilt on hover, staggered reveal.
- Typography: friendly rounded display (e.g. Baloo 2) + Plus Jakarta Sans body.
- Copy tone: encouraging, fun, "siap belajar", "teman sekolah".
- Imagery: flat illustration or cutout stationery on pastel backgrounds.

### Office & Executive — "Quiet Corporate"

- Palette: navy `#0E1B2A`, slate `#44546A`, warm gold `#C9A227`, off-white
  `#F5F3EE`, thin hairlines.
- Sharp corners, generous whitespace, structured grid, subtle gradients only.
- Motion: slow fades and small translations (150–250ms), no bounce.
- Typography: clean sans (Inter / Plus Jakarta Sans) with optional serif accent
  for headlines (Playfair Display).
- Copy tone: precise, efficient, "produktivitas", "profesional", "solusi kantor".
- Imagery: desk scenes, monochrome/duotone photography, gold accent lines.

### Shared Global Layer

- Catalog cards use **glassmorphism**: translucent surface, `backdrop-filter`,
  soft border, layered shadow, floating hover lift.
- Header is minimal and adapts per page (school pages may use a light glass bar;
  office pages use a dark solid bar).
- Motion tokens: 150ms / 250ms / 400ms; honor `prefers-reduced-motion`.
- Accessibility: WCAG AA contrast, visible focus rings, keyboard-operable drawer
  and filters, semantic landmarks.
- Do **not** mix the two palettes on one page (except the neutral homepage
  chooser, which previews both).

---

## 6. Homepage & Segment Chooser

The homepage is neutral but confident:

1. Brand header + short value proposition ("Satu katalog, dua dunia").
2. **Segment chooser**: two full-height split panels (side-by-side on desktop,
   stacked on mobile). Each panel previews its palette, one line of copy, and a
   clear CTA:
   - School & College → `school.html`
   - Office & Executive → `office.html`
3. Hover/focus expands the chosen panel slightly; keyboard focus is obvious.
4. Below: a short "one catalog, many needs" explanation, sister-brand strip, and
   a 3–4 product teaser mixing segments.
5. Remember the last chosen segment in `localStorage` and offer a subtle
   "Lanjutkan ke School" shortcut on return. Never auto-redirect.

Segment cards link with a normal `<a href>` so the demo works without JS; JS only
adds polish.

---

## 7. Product Data & Segment Tagging

Single source of truth: `assets/js/data.js`.

```js
export const products = [
  {
    id: "topla-notebook-a5",
    slug: "topla-notebook-a5",
    name: "Topla Notebook A5",
    brand: "Topla Cerdas",
    category: "Notebook",
    segments: ["school", "office"],   // ← tagging
    priceFrom: 35000,
    shortDescription: "…",
    description: "…",
    specs: { Ukuran: "A5", Halaman: "160", Cover: "Softcover" },
    variants: [
      { name: "Warna", options: ["Mint", "Lavender", "Navy"] }
    ],
    images: ["assets/img/products/notebook-a5.jpg"],
    featured: { school: true, office: false },
    badge: "Best Seller"
  }
];
```

### Tagging rules

- `segments` is an array; values are `"school"` and/or `"office"`.
- A product with both tags appears on both landing pages and in both catalog
  filter results. This dual appearance is a feature to demo explicitly.
- Segment landing pages show `featured[segment]` products first, then other
  tagged products.
- Catalog filter uses **OR within a facet, AND across facets**.
- Product detail page shows small segment badges ("School", "Office") so the
  dual tagging is visible.
- Support deep links: `catalog.html?segment=school`, `catalog.html?brand=...`,
  `catalog.html?q=...`. Filters update the URL via `history.replaceState`.

### Mock catalog size

Provide **12–16 products** across categories (notebook, pen, folder, art supply,
desk organizer, paper, calculator, whiteboard, etc.) with a realistic mix:
~4 school-only, ~4 office-only, ~6 dual-tagged.

---

## 8. Catalog & Product Detail

- **Catalog**: responsive grid of glass cards; image, brand, name, category,
  segment badges, price-from, quick "add" button.
- Filter bar: keyword search (debounced), brand select, category select, segment
  chips (School / Office / All), reset. Show result count and empty state.
- Optional lightweight sort (featured, name, price). No pagination for demo.
- **Product detail**: breadcrumb, gallery (main image + thumbs), name/brand,
  segment badges, description, specs table, variant selectors, quantity, add to
  inquiry, related products from the same segment.
- Shareable URL `product.html?id=<id>`; handle unknown IDs with a friendly
  "product not found" state and link back to catalog.

---

## 9. Inquiry Basket

A slide-over drawer, not a cart. No prices are summed as a transaction; this is a
quotation request.

- Trigger: header badge button (icon + count) and "Tambah ke Inquiry" buttons.
- State shape:
  ```js
  { items: [{ productId, name, variant, qty }] }
  ```
- Behaviors: add (merge identical product+variant), increment/decrement, remove,
  clear all, badge shows total quantity, persist to `localStorage`.
- Out-of-stock/price logic is out of scope.
- **Send via WhatsApp**: build a `https://wa.me/<number>?text=<encoded>` URL with
  a readable itemized message (product, variant, qty, product URL). Use a
  placeholder number in one config constant (e.g. `CONFIG.whatsapp = "62812..."`).
- Empty state explains how to add products.
- Drawer is focus-trapped, closes with `Esc`/backdrop, returns focus to trigger.

---

## 10. Distribution Map

- Static SVG outline of Indonesia (simplified, no external map library/API).
- Pins are absolutely positioned by percentage coordinates from data:
  ```js
  { id, type: "hq" | "factory" | "warehouse" | "hub",
    city, address, phone, x: 42, y: 58, label }
  ```
- Pin colors/icons differ by type; hover shows a small glass tooltip; click opens
  a detail card (city, address, contact, "Hubungi" WhatsApp link).
- Provide 6–9 locations across Java, Sumatra, Kalimantan, Sulawesi, Bali.
- Mobile: map remains, plus an accessible list of locations below it. Pins are
  keyboard-focusable buttons with `aria-label`.
- No live geolocation.

---

## 11. Dual Language (ID / EN)

- Bahasa Indonesia is the primary language; English is secondary.
- Implementation: `assets/js/i18n.js` dictionary + `data-i18n` attributes.
  Toggle in header (`ID | EN`), stored in `localStorage`, applied on load.
- Keep copy short enough that EN does not break layouts. Test both languages on
  mobile.
- Product names stay unchanged; descriptions may have `name_en` /
  `description_en` fields with ID fallback.
- Leave a commented `CONFIG.gtranslate` stub and a note in the README for
  production; do not load the GTranslate script in the demo.

---

## 12. Sister Brands, About, Contact

- **Sister Brands**: three distinct cards/sections — Topla Cerdas (learning),
  Topla Cermat (everyday smart essentials), Maxximo (professional/office).
  Each with one-line positioning, palette accent, and 2–3 representative products.
- **About**: brand story, values, and a simple timeline/stat band. Keep it to one
  scroll; no invented awards or certifications.
- **Contact**: phone, email, address, hours, WhatsApp CTA, and a non-functional
  demo form with a clear "demo only" note (or omit the form entirely).

---

## 13. Global Header, Footer, Floating CTA

- Header: logo (text logo acceptable), nav — Home, About Us, Categories, Catalog,
  Distribution Map, Sister Brands, Contact — plus language toggle and inquiry
  badge.
- Mobile: hamburger → full-screen/drawer menu; body scroll locked.
- Active nav state per page.
- Footer: short blurb, nav columns, social placeholders, copyright.
- Floating WhatsApp button bottom-right; on mobile it must not cover the inquiry
  drawer or footer CTA. Include an accessible label.

---

## 14. SEO & Metadata

- Unique `<title>` and meta description per page; canonical placeholders.
- Open Graph/Twitter tags; a simple branded OG image placeholder.
- JSON-LD: `Organization` globally; `Product` on detail pages.
- `robots.txt` + `sitemap.xml` listing all demo pages.
- One `<h1>` per page, logical heading order, descriptive `alt` text.
- Analytics/Search Console: commented placeholder snippet only; do not add real
  tracking IDs.

---

## 15. File Structure

```
/
├── index.html
├── school.html
├── office.html
├── catalog.html
├── product.html
├── distribution.html
├── sister-brands.html
├── about.html
├── contact.html
├── admin.html                 (optional mock CMS)
├── robots.txt
├── sitemap.xml
└── assets/
    ├── css/
    │   ├── base.css           tokens, reset, shared components
    │   ├── school.css         pastel world
    │   ├── office.css         corporate world
    │   ├── catalog.css        glass cards, filters
    │   └── pages.css          page-specific bits
    ├── js/
    │   ├── config.js          WhatsApp number, analytics stubs
    │   ├── data.js            products, locations, sister brands
    │   ├── store.js           inquiry basket (localStorage)
    │   ├── i18n.js            ID/EN dictionary + toggle
    │   ├── ui.js              header, footer, drawer, floating CTA
    │   └── pages/
    │       ├── home.js
    │       ├── landing.js
    │       ├── catalog.js
    │       ├── product.js
    │       └── distribution.js
    └── img/
        ├── products/          placeholders (SVG/CSS gradients acceptable)
        ├── map/               indonesia.svg
        └── brand/             logo, og-image
```

- Prefer CSS custom properties in `base.css` for shared tokens; each landing page
  overrides tokens locally rather than duplicating rules.
- No inline event handlers (`onclick=`); use `addEventListener`.
- Keep JS modules small and page-scoped; shared logic belongs in `store.js`/`ui.js`.

---

## 16. Copy & Asset Rules

- UI copy: Bahasa Indonesia primary, English translation complete.
- Use realistic placeholder product names and prices (IDR, `Rp35.000` format).
- No fake certifications, client logos, or testimonials. If placeholder
  testimonials help the demo, label them clearly as sample content.
- Images: use locally generated SVG/CSS placeholders or licensed placeholder
  images; never hotlink random assets. Keep a consistent aspect ratio (4:3 or 1:1).
- WhatsApp number, address, email, and social links come from `config.js`.
- Do not use real customer data.

---

## 17. Build Order

1. **Foundation** — tokens, reset, shared header/footer, drawer shell, `data.js`,
   `store.js`, `config.js`.
2. **Homepage** — segment chooser + teaser + sister-brand strip.
3. **School landing** — pastel world, hero, featured products, CTA.
4. **Office landing** — corporate world, hero, featured products, CTA.
5. **Catalog** — glass grid, filters, URL state, empty state.
6. **Product detail** — gallery, variants, specs, related, add-to-inquiry.
7. **Inquiry drawer + WhatsApp handoff** — full CRUD + focus management.
8. **Distribution map** — SVG + pins + tooltip/detail card + mobile list.
9. **Sister brands / About / Contact**.
10. **i18n pass** — all strings, both languages, mobile check.
11. **SEO, a11y, motion, responsive polish**.
12. **Optional mock admin** — only if time permits and clearly demo-only.

Test after each phase; do not wait until the end.

---

## 18. Definition of Done (Demo QA)

- [ ] Homepage chooser links work with JS disabled.
- [ ] School and Office pages look like distinct brands at a glance.
- [ ] A dual-tagged product appears on both landing pages and in both filters.
- [ ] All four filter types combine correctly; empty state is helpful.
- [ ] Deep links (`?segment=`, `?id=`, `?q=`) restore state on load.
- [ ] Inquiry drawer: add, merge, change qty, remove, clear, badge, persistence.
- [ ] WhatsApp link opens with a correctly formatted, URL-encoded message.
- [ ] Map pins work with mouse and keyboard; mobile list is readable.
- [ ] ID/EN toggle persists and does not overflow.
- [ ] No console errors; no broken links; no horizontal scroll at 360px.
- [ ] `prefers-reduced-motion` disables non-essential animation.
- [ ] Keyboard can reach and operate nav, filters, drawer, and map pins.
- [ ] Lighthouse: Accessibility ≥ 95, Best Practices ≥ 95 (demo target).

---

## 19. Agent Working Rules

- **Stay static.** Do not introduce React, Next.js, a bundler, or a backend.
- **Mock data only.** Never wire real APIs, payments, or tracking.
- **Reuse the design tokens.** Do not hardcode colors per component.
- **Keep the worlds separate.** School pages never borrow office styling and
  vice versa; the homepage is the only neutral bridge.
- **Mobile-first.** Design at 360px, then scale up.
- **No placeholder lorem ipsum** in visible UI; write real short copy.
- **Label demo limitations** in the README and, where necessary, in the UI.
- **Update this file** whenever scope, routes, data shape, or design tokens change.
- Prefer editing existing modules over creating parallel one-off scripts.

---

## 20. Preview

```bash
cd topla-demo
python3 -m http.server 8000
# open http://localhost:8000
```

No install, no build. If a step needs more than a static server, it is out of
scope for this demo.
