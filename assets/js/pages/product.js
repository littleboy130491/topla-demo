import {
  products,
  findProduct,
  brandName,
  categoryLabel,
} from "../data.js";
import { CONFIG, formatIDR } from "../config.js";
import {
  productCard,
  productArt,
  segmentPills,
  observeReveals,
  icon,
} from "../ui.js";
import { t, getLang } from "../i18n.js";

const root = document.getElementById("pdp-root");
const productId = new URLSearchParams(location.search).get("id");
const product = findProduct(productId);

if (root) {
  if (!product) {
    root.innerHTML = `<div class="container pdp-missing">
      <p class="eyebrow">404</p>
      <h1>${t("product.notFound")}</h1>
      <p>${t("product.notFoundDesc")}</p>
      <a class="btn btn-primary" href="catalog.html">${t("product.back")}</a>
    </div>`;
  } else {
    renderProduct(product);
  }
}

function renderProduct(item) {
  const lang = getLang();
  const short = item.short[lang] || item.short.id;
  const description = item.description[lang] || item.description.id;
  const variant = item.variants?.[0];
  const firstOption = variant?.options?.[0] || "";
  const related = products
    .filter(
      (candidate) =>
        candidate.id !== item.id &&
        (candidate.category === item.category ||
          candidate.segments.some((segment) => item.segments.includes(segment))),
    )
    .slice(0, 4);

  const waText =
    lang === "id"
      ? `Halo Topla, saya ingin bertanya tentang ${item.name}.`
      : `Hello Topla, I would like to ask about ${item.name}.`;

  const views = [
    { filter: "none" },
    { filter: "saturate(1.45) hue-rotate(-12deg)" },
    { filter: "grayscale(0.85)" },
    { filter: "contrast(1.12) brightness(0.92)" },
  ];

  root.innerHTML = `<div class="container">
    <nav class="breadcrumb" aria-label="Breadcrumb">
      <a href="index.html">${t("nav.home")}</a><span>/</span>
      <a href="catalog.html">${t("product.home")}</a><span>/</span>
      <span>${item.name}</span>
    </nav>
    <div class="pdp-grid">
      <div class="pdp-gallery">
        <div class="pdp-main" id="pdp-main" style="--pdp-filter:none">
          ${productArt(item)}
        </div>
        <div class="pdp-thumbs" role="group" aria-label="${t("product.galleryHint")}">
          ${views
            .map(
              (view, index) => `<button class="pdp-thumb ${
                index === 0 ? "is-active" : ""
              }" type="button" data-view="${view.filter}" aria-pressed="${
                index === 0
              }" aria-label="${t("product.galleryHint")} ${index + 1}">
                <span style="display:block;filter:${view.filter}">${productArt(
                  item,
                )}</span>
              </button>`,
            )
            .join("")}
        </div>
      </div>
      <div class="pdp-info">
        <div class="pdp-brand-line">
          <span>${brandName(item.brand)}</span>
          ${segmentPills(item)}
        </div>
        <h1>${item.name}</h1>
        <p class="pdp-short">${short}</p>
        <div class="pdp-price">
          <small>${t("product.priceFrom")}</small>
          <strong>${formatIDR(item.priceFrom)}</strong>
        </div>
        ${
          variant
            ? `<div class="pdp-variant">
                <label for="pdp-variant">${variant.name[lang] || variant.name.id}</label>
                <select id="pdp-variant" data-variant-select>
                  ${variant.options
                    .map(
                      (option) =>
                        `<option value="${option}" ${
                          option === firstOption ? "selected" : ""
                        }>${option}</option>`,
                    )
                    .join("")}
                </select>
              </div>`
            : ""
        }
        <div class="pdp-buy">
          <div class="pdp-qty">
            <button type="button" data-qty-step="-1" aria-label="-">${icon(
              "minus",
              "",
              14,
            )}</button>
            <input type="number" data-qty-input value="1" min="1" max="99" aria-label="${t(
              "product.qty",
            )}" />
            <button type="button" data-qty-step="1" aria-label="+">${icon(
              "plus",
              "",
              14,
            )}</button>
          </div>
          <button class="pdp-add" type="button" data-add="${item.id}" data-variant="${firstOption}">
            ${t("product.add")}
          </button>
        </div>
        <a class="pdp-wa" href="https://wa.me/${
          CONFIG.whatsapp
        }?text=${encodeURIComponent(waText)}" target="_blank" rel="noopener">
          ${icon("whatsapp", "", 17)} ${t("product.ask")}
        </a>
        <p class="pdp-note">${t("product.note")}</p>

        <div class="pdp-specs">
          <h2>${t("product.specs")}</h2>
          <dl>
            ${item.specs
              .map(
                (spec) => `<div class="spec-row">
                  <dt>${spec.l[lang] || spec.l.id}</dt>
                  <dd>${spec.v}</dd>
                </div>`,
              )
              .join("")}
          </dl>
        </div>
        <p class="pdp-description">${description}</p>
      </div>
    </div>

    ${
      related.length
        ? `<section class="pdp-related">
            <h2>${t("product.related")}</h2>
            <p>${t("product.relatedDesc")}</p>
            <div class="product-grid">
              ${related
                .map((candidate) => productCard(candidate, "glass"))
                .join("")}
            </div>
          </section>`
        : ""
    }
  </div>`;

  /* Gallery interaction */
  const main = document.getElementById("pdp-main");
  root.querySelectorAll("[data-view]").forEach((button) => {
    button.addEventListener("click", () => {
      main.style.setProperty("--pdp-filter", button.dataset.view);
      root.querySelectorAll("[data-view]").forEach((thumb) => {
        const active = thumb === button;
        thumb.classList.toggle("is-active", active);
        thumb.setAttribute("aria-pressed", String(active));
      });
    });
  });

  /* Quantity stepper */
  root.addEventListener("click", (event) => {
    const step = event.target.closest("[data-qty-step]");
    if (!step) return;
    const input = root.querySelector("[data-qty-input]");
    if (!input) return;
    const next = Math.min(
      99,
      Math.max(1, Number(input.value || 1) + Number(step.dataset.qtyStep)),
    );
    input.value = String(next);
  });

  /* Metadata */
  document.title = `${item.name} — Topla`;
  const meta = document.querySelector('meta[name="description"]');
  if (meta) meta.setAttribute("content", short);
  const ld = document.createElement("script");
  ld.type = "application/ld+json";
  ld.textContent = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Product",
    name: item.name,
    brand: { "@type": "Brand", name: brandName(item.brand) },
    category: categoryLabel(item.category, "en"),
    description,
    offers: {
      "@type": "Offer",
      priceCurrency: "IDR",
      price: item.priceFrom,
      availability: "https://schema.org/InStock",
    },
  });
  document.head.appendChild(ld);

  observeReveals();
}
