import {
  products,
  brands,
  categories,
  findProduct,
  brandName,
  categoryLabel,
} from "./data.js";
import { CONFIG, formatIDR } from "./config.js";
import { getLang, t, applyI18n, setLang } from "./i18n.js";
import * as store from "./store.js";

/* ---------------------------------- icons --------------------------------- */

const ICONS = {
  inquiry:
    '<rect x="5" y="4" width="14" height="17" rx="2"/><path d="M9 4h6v3H9zM9 11h6M9 15h4"/>',
  menu: '<path d="M4 7h16M4 12h16M4 17h16"/>',
  close: '<path d="M6 6l12 12M18 6L6 18"/>',
  search:
    '<circle cx="11" cy="11" r="6.5"/><path d="M16 16l4 4"/>',
  plus: '<path d="M12 5v14M5 12h14"/>',
  minus: '<path d="M5 12h14"/>',
  trash:
    '<path d="M4 7h16M9 7V5h6v2M7 7l1 13h8l1-13M10 11v5M14 11v5"/>',
  arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
  arrowUp: '<path d="M7 17L17 7M9 7h8v8"/>',
  check: '<path d="M5 12l4 4L19 6"/>',
  pin: '<path d="M12 21s7-6.1 7-11a7 7 0 10-14 0c0 4.9 7 11 7 11z"/><circle cx="12" cy="10" r="2.4"/>',
  phone:
    '<path d="M7 3H5a2 2 0 00-2 2c0 8.8 7.2 16 16 16a2 2 0 002-2v-2l-4-1.5-1.8 2A13 13 0 018.5 6.8L10.5 5 9 3z"/>',
  mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M4 7l8 6 8-6"/>',
  clock: '<circle cx="12" cy="12" r="8.5"/><path d="M12 7v5l3 2"/>',
  whatsapp:
    '<path d="M20.5 11.6a8.5 8.5 0 01-12.6 7.5L3.5 20.5l1.5-4.3a8.5 8.5 0 1115.5-4.6z"/><path d="M8.6 8.3c0 3.2 2.1 5.3 5.3 5.3l1-1.4-1.8-.9-.8.9a5.7 5.7 0 01-2.4-2.4l.9-.8-.9-1.8-1.3 1.1z"/>',
  notebook:
    '<rect x="5" y="3" width="14" height="18" rx="2"/><path d="M9 3v18M12 7h4M12 11h4M12 15h3"/>',
  pen: '<path d="M4 20l4-1L18 9l-3-3L5 16l-1 4z"/><path d="M13 8l3 3M15 6l3 3"/>',
  pencil:
    '<path d="M4 20l3.5-.9L19 7.6 16.4 5 5 16.5 4 20z"/><path d="M14.8 6.6l2.6 2.6"/>',
  marker:
    '<path d="M9.5 3h5v4.5l-1 2.5h-3l-1-2.5V3z"/><path d="M10 10h4v8a2 2 0 01-4 0v-8zM11 21h2"/>',
  art: '<path d="M12 3a9 9 0 100 18h1a2 2 0 001-3.7 2 2 0 011.7-3.3H18a3 3 0 003-3A7 7 0 0012 3z"/><circle cx="7.6" cy="11.2" r="1"/><circle cx="10" cy="7.6" r="1"/><circle cx="14.6" cy="7.6" r="1"/>',
  case: '<rect x="3" y="8" width="18" height="9" rx="4"/><path d="M3 11.5h18"/><circle cx="17" cy="14.5" r="1"/>',
  folder:
    '<path d="M3 7a2 2 0 012-2h5l2 3h7a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V7z"/>',
  organizer:
    '<rect x="4" y="12" width="16" height="8" rx="1"/><path d="M7 12V8h4v4M13 12V5h4v7M8 16h8"/>',
  whiteboard:
    '<rect x="3" y="4" width="18" height="12" rx="1"/><path d="M7 20l2-4M17 20l-2-4M8 8h8M8 12h5"/>',
  calculator:
    '<rect x="5" y="3" width="14" height="18" rx="2"/><rect x="8" y="6" width="8" height="3" rx=".5"/><path d="M8 12h.01M12 12h.01M16 12h.01M8 15.5h.01M12 15.5h.01M16 15.5h.01M8 19h.01M12 19h.01M16 19h.01"/>',
  paper:
    '<path d="M7 3h7l4 4v14H7z"/><path d="M14 3v5h4M10 12h5M10 16h5"/>',
  sticky:
    '<path d="M4 4h11l5 5v11H4z"/><path d="M15 4v5h5M8 12h6M8 16h4"/>',
  spark: '<path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3z"/>',
  grid: '<rect x="4" y="4" width="7" height="7"/><rect x="13" y="4" width="7" height="7"/><rect x="4" y="13" width="7" height="7"/><rect x="13" y="13" width="7" height="7"/>',
  globe: '<circle cx="12" cy="12" r="8.5"/><path d="M3.5 12h17M12 3.5c2.5 2.4 3.8 5.3 3.8 8.5s-1.3 6.1-3.8 8.5c-2.5-2.4-3.8-5.3-3.8-8.5S9.5 5.9 12 3.5z"/>',
  leaf: '<path d="M20 4C11 4 5 8 5 15c0 3 2 5 5 5 7 0 10-6 10-16z"/><path d="M4 21c2.5-5 6-8 11-10"/>',
  shield: '<path d="M12 3l7 3v6c0 4.4-3 7.6-7 9-4-1.4-7-4.6-7-9V6l7-3z"/><path d="M9 12l2 2 4-4"/>',
};

export function icon(name, cls = "", size = 20) {
  return `<svg class="ic ${cls}" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${
    ICONS[name] || ""
  }</svg>`;
}

/* ------------------------------- presentation ----------------------------- */

function isDark(hex) {
  const clean = hex.replace("#", "");
  const full =
    clean.length === 3
      ? clean
          .split("")
          .map((c) => c + c)
          .join("")
      : clean;
  const r = parseInt(full.slice(0, 2), 16);
  const g = parseInt(full.slice(2, 4), 16);
  const b = parseInt(full.slice(4, 6), 16);
  return (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255 < 0.55;
}

export function productArt(product, extraClass = "") {
  const ink = isDark(product.colors[0])
    ? "rgba(255,253,247,.82)"
    : "rgba(24,34,42,.68)";
  return `<div class="product-art ${extraClass}" style="--a:${product.colors[0]};--b:${product.colors[1]};--art-ink:${ink}">
    <span class="pa-grid" aria-hidden="true"></span>
    <span class="pa-ring" aria-hidden="true"></span>
    <span class="pa-icon">${icon(product.icon, "art-icon", 64)}</span>
    <span class="pa-brand">${brandName(product.brand)}</span>
  </div>`;
}

export function segmentPills(product) {
  return `<span class="seg-pills">${product.segments
    .map(
      (seg) =>
        `<span class="seg-pill seg-pill--${seg}">${
          seg === "school" ? "School" : "Office"
        }</span>`,
    )
    .join("")}</span>`;
}

export function productCard(product, style = "glass") {
  const lang = getLang();
  const short = product.short[lang] || product.short.id;
  const firstVariant = product.variants?.[0]?.options?.[0] || "";
  const badge = product.badge
    ? `<span class="pc-badge">${product.badge[lang] || product.badge.id}</span>`
    : "";
  const priceLabel = t("common.from", "Mulai dari");

  return `<article class="product-card product-card--${style}" data-reveal>
    <a class="pc-media" href="product.html?id=${product.id}" aria-label="${product.name}">
      ${productArt(product)}
      ${badge}
    </a>
    <div class="pc-body">
      <div class="pc-meta">
        <span class="pc-cat">${categoryLabel(product.category, lang)}</span>
        ${segmentPills(product)}
      </div>
      <h3 class="pc-title"><a href="product.html?id=${product.id}">${product.name}</a></h3>
      <p class="pc-desc">${short}</p>
      <div class="pc-foot">
        <span class="pc-price"><small>${priceLabel}</small>${formatIDR(
          product.priceFrom,
        )}</span>
        <button class="pc-add" type="button" data-add="${
          product.id
        }" data-variant="${firstVariant}">
          ${icon("plus", "", 16)}<span>${t("common.addInquiry", "Tambah")}</span>
        </button>
      </div>
    </div>
  </article>`;
}

/* --------------------------------- chrome -------------------------------- */

const NAV = [
  ["index.html", "home", "nav.home"],
  ["about.html", "about", "nav.about"],
  ["catalog.html#categories", "categories", "nav.categories"],
  ["catalog.html", "catalog", "nav.catalog"],
  ["distribution.html", "map", "nav.map"],
  ["sister-brands.html", "brands", "nav.brands"],
  ["contact.html", "contact", "nav.contact"],
];

function langSwitch() {
  const lang = getLang();
  return `<div class="lang-switch" role="group" aria-label="${t(
    "nav.language",
  )}">
    <button type="button" data-set-lang="id" class="${
      lang === "id" ? "is-active" : ""
    }" aria-pressed="${lang === "id"}">ID</button>
    <span aria-hidden="true">/</span>
    <button type="button" data-set-lang="en" class="${
      lang === "en" ? "is-active" : ""
    }" aria-pressed="${lang === "en"}">EN</button>
  </div>`;
}

function navLinks(active, className = "") {
  return NAV.map(([href, key, label]) => {
    const isActive =
      active === key || (active === "product" && key === "catalog");
    return `<a class="nav-link ${isActive ? "is-active" : ""} ${className}" href="${href}"${
      isActive ? ' aria-current="page"' : ""
    }>${t(label)}</a>`;
  }).join("");
}

function headerMarkup(active) {
  return `<header class="site-header">
    <div class="container header-inner">
      <a class="brand" href="index.html" aria-label="Topla">topla<span>.</span></a>
      <nav class="desktop-nav" aria-label="Primary">${navLinks(active)}</nav>
      <div class="header-actions">
        ${langSwitch()}
        <button class="inquiry-trigger" type="button" data-open-inquiry aria-label="${t(
          "nav.inquiry",
        )}">
          ${icon("inquiry", "", 20)}
          <span class="inquiry-count" data-count>0</span>
        </button>
        <button class="menu-trigger" type="button" data-menu-toggle aria-label="${t(
          "nav.menu",
        )}">${icon("menu", "", 22)}</button>
      </div>
    </div>
  </header>`;
}

function mobileMenuMarkup() {
  return `<div class="mobile-menu" id="mobile-menu" aria-hidden="true">
    <div class="mobile-menu-inner">
      <div class="mobile-menu-head">
        <a class="brand" href="index.html">topla<span>.</span></a>
        <button class="icon-button" type="button" data-menu-close aria-label="${t(
          "nav.close",
        )}">${icon("close", "", 22)}</button>
      </div>
      <nav class="mobile-nav" aria-label="Mobile">${navLinks(
        document.body.dataset.page || "",
        "mobile-nav-link",
      )}</nav>
      <div class="mobile-menu-foot">
        ${langSwitch()}
        <a class="btn btn-ghost" href="https://wa.me/${CONFIG.whatsapp}" target="_blank" rel="noopener">${icon(
          "whatsapp",
          "",
          18,
        )} ${t("nav.wa")}</a>
      </div>
    </div>
  </div>`;
}

function footerMarkup() {
  const year = new Date().getFullYear();
  return `<footer class="site-footer">
    <div class="container footer-grid">
      <div class="footer-brand">
        <a class="brand" href="index.html">topla<span>.</span></a>
        <p>${t("footer.tagline")}</p>
        <span class="demo-chip">${t("chrome.demo", "Demo preview — sample data")}</span>
      </div>
      <div class="footer-col">
        <h4>${t("footer.explore")}</h4>
        <a href="catalog.html">${t("nav.catalog")}</a>
        <a href="school.html">${t("common.school")}</a>
        <a href="office.html">${t("common.office")}</a>
        <a href="distribution.html">${t("nav.map")}</a>
      </div>
      <div class="footer-col">
        <h4>${t("footer.company")}</h4>
        <a href="about.html">${t("nav.about")}</a>
        <a href="sister-brands.html">${t("nav.brands")}</a>
        <a href="contact.html">${t("nav.contact")}</a>
      </div>
      <div class="footer-col footer-contact">
        <h4>${t("footer.contact")}</h4>
        <span>${CONFIG.address}</span>
        <a href="mailto:${CONFIG.email}">${CONFIG.email}</a>
        <a href="tel:${CONFIG.phone.replace(/\s/g, "")}">${CONFIG.phone}</a>
      </div>
    </div>
    <div class="container footer-bottom">
      <span>© ${year} Topla. ${t("footer.rights")}</span>
      <span>${t("footer.demo")}</span>
    </div>
  </footer>`;
}

function drawerMarkup() {
  return `<div class="drawer-layer" id="drawer-layer" aria-hidden="true">
    <div class="drawer-backdrop" data-drawer-backdrop></div>
    <aside class="inquiry-drawer" role="dialog" aria-modal="true" aria-labelledby="inquiry-title">
      <header class="drawer-head">
        <div>
          <h2 id="inquiry-title">${t("inquiry.title")}</h2>
          <p>${t("inquiry.subtitle")}</p>
        </div>
        <button class="icon-button" type="button" data-close-inquiry aria-label="${t(
          "nav.close",
        )}">${icon("close", "", 22)}</button>
      </header>
      <div class="drawer-body" data-drawer-body></div>
      <footer class="drawer-foot" data-drawer-foot></footer>
    </aside>
  </div>`;
}

function waMarkup() {
  return `<a class="wa-float" href="https://wa.me/${CONFIG.whatsapp}" target="_blank" rel="noopener" aria-label="${t(
    "nav.wa",
  )}">
    ${icon("whatsapp", "", 24)}
    <span>${t("nav.wa")}</span>
  </a>`;
}

/* ------------------------------ inquiry drawer ---------------------------- */

let lastFocus = null;

export function buildInquiryUrl() {
  const items = store.getItems();
  const lang = getLang();
  const intro =
    lang === "id"
      ? "Halo Topla, saya ingin menanyakan produk berikut:"
      : "Hello Topla, I would like to ask about these products:";
  const lines = items.map((item, index) => {
    const product = findProduct(item.productId);
    if (!product) return "";
    const variant = item.variant ? ` — ${item.variant}` : "";
    const url = new URL(`product.html?id=${product.id}`, location.href).href;
    return `${index + 1}. ${product.name}${variant} (${item.qty}x)\n   ${url}`;
  });
  return `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(
    [intro, "", ...lines].join("\n"),
  )}`;
}

export function renderDrawer() {
  const body = document.querySelector("[data-drawer-body]");
  const foot = document.querySelector("[data-drawer-foot]");
  if (!body || !foot) return;

  const lang = getLang();
  const items = store.getItems();
  const total = store.count();

  if (!items.length) {
    body.innerHTML = `<div class="drawer-empty">
      <span class="drawer-empty-icon">${icon("inquiry", "", 34)}</span>
      <h3>${t("inquiry.empty")}</h3>
      <p>${t("inquiry.emptyHint")}</p>
      <a class="btn btn-primary" href="catalog.html" data-close-inquiry>${t(
        "inquiry.browse",
      )}</a>
    </div>`;
    foot.innerHTML = `<p class="drawer-note">${t("inquiry.note")}</p>`;
  } else {
    body.innerHTML = items
      .map((item) => {
        const product = findProduct(item.productId);
        if (!product) return "";
        return `<div class="drawer-item">
          <a class="di-art" href="product.html?id=${product.id}">${productArt(
            product,
          )}</a>
          <div class="di-main">
            <a class="di-name" href="product.html?id=${product.id}">${
              product.name
            }</a>
            ${item.variant ? `<span class="di-variant">${item.variant}</span>` : ""}
            <div class="di-controls">
              <div class="stepper" aria-label="${t("inquiry.qty")}">
                <button type="button" data-qty-minus="${item.key}" aria-label="-">${icon(
                  "minus",
                  "",
                  14,
                )}</button>
                <span>${item.qty}</span>
                <button type="button" data-qty-plus="${item.key}" aria-label="+">${icon(
                  "plus",
                  "",
                  14,
                )}</button>
              </div>
              <button class="di-remove" type="button" data-remove-item="${
                item.key
              }" aria-label="${t("inquiry.remove")}">${icon("trash", "", 16)}</button>
            </div>
          </div>
        </div>`;
      })
      .join("");

    foot.innerHTML = `<div class="drawer-total">
        <span>${tenantCount(total, lang)}</span>
        <button class="link-button" type="button" data-clear-inquiry>${t(
          "inquiry.clear",
        )}</button>
      </div>
      <a class="btn btn-wa btn-block" href="${buildInquiryUrl()}" target="_blank" rel="noopener">${icon(
        "whatsapp",
        "",
        19,
      )} ${t("inquiry.send")}</a>
      <p class="drawer-note">${t("inquiry.note")}</p>`;
  }

  document.querySelectorAll("[data-count]").forEach((el) => {
    el.textContent = total;
    el.classList.toggle("is-empty", total === 0);
  });
}

function tenantCount(total, lang) {
  return lang === "id"
    ? `${total} item di inquiry`
    : `${total} ${total === 1 ? "item" : "items"} in inquiry`;
}

export function openDrawer() {
  const layer = document.getElementById("drawer-layer");
  if (!layer) return;
  lastFocus = document.activeElement;
  renderDrawer();
  layer.classList.add("is-open");
  layer.setAttribute("aria-hidden", "false");
  document.body.classList.add("drawer-open");
  const close = layer.querySelector("[data-close-inquiry]");
  requestAnimationFrame(() => close?.focus());
}

export function closeDrawer() {
  const layer = document.getElementById("drawer-layer");
  if (!layer) return;
  layer.classList.remove("is-open");
  layer.setAttribute("aria-hidden", "true");
  document.body.classList.remove("drawer-open");
  if (lastFocus instanceof HTMLElement) lastFocus.focus();
}

function trapDrawer(event) {
  const layer = document.getElementById("drawer-layer");
  if (!layer?.classList.contains("is-open") || event.key !== "Tab") return;
  const focusable = layer.querySelectorAll(
    'a[href], button:not([disabled]), select, input, textarea, [tabindex]:not([tabindex="-1"])',
  );
  if (!focusable.length) return;
  const first = focusable[0];
  const last = focusable[focusable.length - 1];
  if (event.shiftKey && document.activeElement === first) {
    event.preventDefault();
    last.focus();
  } else if (!event.shiftKey && document.activeElement === last) {
    event.preventDefault();
    first.focus();
  }
}

/* ---------------------------------- toast --------------------------------- */

let toastTimer;

export function toast(message) {
  let el = document.querySelector(".toast");
  if (!el) {
    el = document.createElement("div");
    el.className = "toast";
    el.setAttribute("role", "status");
    el.setAttribute("aria-live", "polite");
    document.body.appendChild(el);
  }
  el.textContent = message;
  el.classList.add("is-show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.remove("is-show"), 2400);
}

/* -------------------------------- reveals --------------------------------- */

let revealObserver;

export function observeReveals() {
  const nodes = document.querySelectorAll("[data-reveal]:not(.is-in)");
  if (!("IntersectionObserver" in window)) {
    nodes.forEach((node) => node.classList.add("is-in"));
    return;
  }
  if (!revealObserver) {
    revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-in");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );
  }
  nodes.forEach((node, index) => {
    node.style.setProperty("--reveal-delay", `${Math.min(index % 4, 3) * 70}ms`);
    revealObserver.observe(node);
  });
}

/* --------------------------------- mounting ------------------------------- */

function openMenu() {
  const menu = document.getElementById("mobile-menu");
  if (!menu) return;
  menu.classList.add("is-open");
  menu.setAttribute("aria-hidden", "false");
  document.body.classList.add("menu-open");
  menu.querySelector("[data-menu-close]")?.focus();
}

function closeMenu() {
  const menu = document.getElementById("mobile-menu");
  if (!menu) return;
  menu.classList.remove("is-open");
  menu.setAttribute("aria-hidden", "true");
  document.body.classList.remove("menu-open");
}

function bindEvents() {
  document.addEventListener("click", (event) => {
    const target = event.target;

    const langBtn = target.closest("[data-set-lang]");
    if (langBtn) {
      setLang(langBtn.dataset.setLang);
      return;
    }

    if (target.closest("[data-menu-toggle]")) {
      openMenu();
      return;
    }
    if (target.closest("[data-menu-close]")) {
      closeMenu();
      return;
    }
    if (target.closest("[data-open-inquiry]")) {
      closeMenu();
      openDrawer();
      return;
    }
    if (target.closest("[data-close-inquiry]")) {
      closeDrawer();
      return;
    }
    if (target.closest("[data-drawer-backdrop]")) {
      closeDrawer();
      return;
    }

    const addBtn = target.closest("[data-add]");
    if (addBtn) {
      const id = addBtn.dataset.add;
      const product = findProduct(id);
      if (!product) return;
      const container = addBtn.closest(".pdp-info");
      const select = container?.querySelector("[data-variant-select]");
      const qtyInput = container?.querySelector("[data-qty-input]");
      const variant =
        select?.value || addBtn.dataset.variant || product.variants?.[0]?.options?.[0] || "";
      const qty = Math.max(1, Number(qtyInput?.value || 1));
      store.addItem(id, variant, qty);
      toast(t("inquiry.added"));
      addBtn.classList.add("is-added");
      setTimeout(() => addBtn.classList.remove("is-added"), 900);
      return;
    }

    const plus = target.closest("[data-qty-plus]");
    if (plus) {
      const item = store.getItems().find((i) => i.key === plus.dataset.qtyPlus);
      if (item) store.setQty(item.key, item.qty + 1);
      return;
    }
    const minus = target.closest("[data-qty-minus]");
    if (minus) {
      const item = store.getItems().find((i) => i.key === minus.dataset.qtyMinus);
      if (item) store.setQty(item.key, item.qty - 1);
      return;
    }
    const remove = target.closest("[data-remove-item]");
    if (remove) {
      store.removeItem(remove.dataset.removeItem);
      toast(t("inquiry.removed"));
      return;
    }
    const clear = target.closest("[data-clear-inquiry]");
    if (clear) {
      store.clear();
      toast(t("inquiry.cleared"));
      return;
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeDrawer();
      closeMenu();
    }
    trapDrawer(event);
  });
}

function mountChrome() {
  const active = document.body.dataset.page || "";
  const headerHost = document.getElementById("site-header");
  const footerHost = document.getElementById("site-footer");
  if (headerHost) headerHost.innerHTML = headerMarkup(active);
  if (footerHost) footerHost.innerHTML = footerMarkup();
  document.body.insertAdjacentHTML(
    "beforeend",
    mobileMenuMarkup() + drawerMarkup() + waMarkup(),
  );
  bindEvents();
  store.subscribe(() => renderDrawer());
  renderDrawer();
  applyI18n();
  observeReveals();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", mountChrome);
} else {
  mountChrome();
}

/* Re-export helpers used by page scripts. */
export { products, brands, categories, findProduct, brandName, categoryLabel };
