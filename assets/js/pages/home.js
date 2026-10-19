import { products, brands } from "../data.js";
import { formatIDR } from "../config.js";
import { productCard, productArt, observeReveals } from "../ui.js";
import { t, getLang } from "../i18n.js";

const byId = (id) => products.find((product) => product.id === id);
const notebook = byId("notebook-a5");

/* ------------------------- segment panel previews ------------------------- */

const schoolPreview = document.getElementById("school-panel-preview");
if (schoolPreview) {
  schoolPreview.innerHTML = `
    <div class="sp-school-art sp-school-art--1">${productArt(byId("notebook-a5"))}</div>
    <div class="sp-school-art sp-school-art--2">${productArt(byId("highlighter-pastel"))}</div>
    <span class="sp-sticker">✦ ${t("school.sticker1")}</span>`;
}

const officePreview = document.getElementById("office-panel-preview");
if (officePreview) {
  officePreview.innerHTML = `
    <div class="sp-office-mosaic">
      <div>${productArt(byId("planner-2027"))}</div>
      <div>${productArt(byId("folder-executive"))}</div>
      <div>${productArt(byId("desk-organizer"))}</div>
    </div>
    <span class="sp-office-tag">DESK EDIT / 01</span>`;
}

/* ------------------------- one product, two worlds ------------------------ */

const dualSchool = document.getElementById("dual-school-card");
const dualOffice = document.getElementById("dual-office-card");
if (dualSchool && notebook) dualSchool.innerHTML = productCard(notebook, "school");
if (dualOffice && notebook) dualOffice.innerHTML = productCard(notebook, "office");

/* --------------------------------- teaser --------------------------------- */

const teaserGrid = document.getElementById("home-teaser-grid");
if (teaserGrid) {
  const teaser = products
    .filter((product) => product.segments.length === 2)
    .slice(0, 4);
  teaserGrid.innerHTML = teaser
    .map((product) => productCard(product, "glass"))
    .join("");
}

/* -------------------------------- brands ---------------------------------- */

const brandStrip = document.getElementById("home-brand-strip");
if (brandStrip) {
  const lang = getLang();
  brandStrip.innerHTML = brands
    .map(
      (brand, index) => `<a class="home-brand" href="sister-brands.html#${brand.id}">
        <span class="home-brand-index">0${index + 1}</span>
        <span class="home-brand-word">${brand.name}</span>
        <p>${brand.tagline[lang] || brand.tagline.id}</p>
        <span class="home-brand-link">${t("home.brands.link")}
          <svg class="ic" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7 17L17 7M9 7h8v8"/></svg>
        </span>
      </a>`,
    )
    .join("");
}

/* --------------------------- continue last visit --------------------------- */

const continueEl = document.getElementById("home-continue");
if (continueEl) {
  let last = null;
  try {
    last = localStorage.getItem("topla.lastSegment");
  } catch {
    last = null;
  }
  if (last === "school" || last === "office") {
    const label = last === "school" ? t("common.school") : t("common.office");
    continueEl.href = `${last}.html`;
    continueEl.innerHTML = `${t("home.continue")} ${label}
      <svg class="ic" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>`;
    continueEl.hidden = false;
  }
}

/* Keep the reference alive for optional pricing tweaks. */
void formatIDR;

observeReveals();
