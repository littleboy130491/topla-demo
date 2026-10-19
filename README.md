# Topla Audience Demo

A preview-only static prototype showing **one product catalog presented through two
audience worlds**: School & College (pastel) and Office & Executive (corporate).
Products can be tagged for School, Office, or both, and the same product can appear
in both experiences with a different visual treatment.

## Run

No install, no build step.

```bash
cd topla-demo
python3 -m http.server 8000
```

Open <http://localhost:8000>. ES modules do not work over `file://`.

## Pages

| Page | File |
| --- | --- |
| Home + segment chooser | `index.html` |
| School & College landing | `school.html` |
| Office & Executive landing | `office.html` |
| Catalog + filters | `catalog.html` |
| Product detail | `product.html?id=notebook-a5` |
| Distribution map | `distribution.html` |
| Sister brands | `sister-brands.html` |
| About | `about.html` |
| Contact | `contact.html` |

## What to try

1. On the homepage, compare the two segment panels — then scroll to
   **“Satu produk, dua wajah”** to see the same dual-tagged notebook rendered in
   both styles.
2. Open the School and Office landings and compare the featured products. The
   notebook, calculator, sticky notes, paper, and other dual-tagged products
   appear in both.
3. Open the catalog and filter by segment, brand, category, or keyword. Deep links
   work: `catalog.html?segment=school`.
4. Add products to the inquiry basket, change quantities, then use
   **Send via WhatsApp**. The message is pre-filled from the current basket.
5. Switch **ID / EN** in the header. All sample copy is translated manually.
6. Click map pins on the distribution page (keyboard works too).

## Demo limitations

- All data is mock content in `assets/js/data.js`; there is no backend, database,
  authentication, real checkout, or stock management.
- The inquiry basket persists in `localStorage` only.
- The distribution map is a stylised SVG, not a live map service.
- The contact form does not submit; it shows a demo toast.
- WhatsApp, address, email, and phone in `assets/js/config.js` are placeholders.
- GTranslate is not loaded. The demo uses the manual ID/EN dictionary in
  `assets/js/i18n.js`; a production build can swap in GTranslate.
- Analytics and Search Console snippets are intentionally omitted (see
  `config.js` for the intended stub location).

## Structure

```
assets/css/base.css      shared tokens, chrome, cards, drawer
assets/css/school.css    pastel landing world
assets/css/office.css    corporate landing world
assets/css/catalog.css   glass catalog + filters
assets/css/pages.css     home, product, map, brands, about, contact
assets/js/data.js        products, brands, categories, locations
assets/js/store.js       inquiry basket (localStorage)
assets/js/i18n.js        ID/EN dictionary
assets/js/ui.js          header, footer, cards, drawer, toast
assets/js/pages/         page controllers
```
