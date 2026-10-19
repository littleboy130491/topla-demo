import { brands, products } from "../data.js";
import { productCard, observeReveals, toast } from "../ui.js";
import { t, getLang } from "../i18n.js";

const host = document.getElementById("brand-sections");

if (host) {
  const lang = getLang();
  const cardStyle = { cerdas: "school", cermat: "glass", maxximo: "office" };

  host.innerHTML = brands
    .map((brand, index) => {
      const picks = products
        .filter((product) => product.brand === brand.id)
        .slice(0, 3);
      return `<section class="brand-block" id="${brand.id}">
        <div class="container brand-block-grid">
          <div class="brand-copy">
            <span class="brand-num">0${index + 1}</span>
            <h2>${brand.name}</h2>
            <p class="brand-tagline">${brand.tagline[lang] || brand.tagline.id}</p>
            <p class="brand-desc">${brand.description[lang] || brand.description.id}</p>
            <a class="brand-link" href="catalog.html?brand=${brand.id}">
              ${t("brands.view")}
              <svg class="ic" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
            </a>
          </div>
          <div class="product-grid">
            ${picks
              .map((product) => productCard(product, cardStyle[brand.id] || "glass"))
              .join("")}
          </div>
        </div>
      </section>`;
    })
    .join("");

  observeReveals();
}

/* ------------------------------- contact form ------------------------------ */

const form = document.getElementById("demo-contact-form");
if (form) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    toast(t("contact.sent"));
    form.reset();
  });
}
