import { products } from "../data.js";
import { formatIDR } from "../config.js";
import { productCard, productArt, observeReveals } from "../ui.js";
import { t } from "../i18n.js";

const segment = document.body.dataset.segment;
if (segment === "school" || segment === "office") {
  try {
    localStorage.setItem("topla.lastSegment", segment);
  } catch {
    // ignore private-mode storage errors
  }
}

const tagged = products.filter((product) => product.segments.includes(segment));
const featured = tagged.filter((product) => product.featured[segment]);
const more = tagged.filter((product) => !product.featured[segment]).slice(0, 4);

document.querySelectorAll('[data-products="featured"]').forEach((grid) => {
  grid.innerHTML = featured.map((product) => productCard(product, segment)).join("");
});

document.querySelectorAll('[data-products="more"]').forEach((grid) => {
  grid.innerHTML = more.map((product) => productCard(product, segment)).join("");
});

/* ------------------------------- hero visuals ------------------------------ */

if (segment === "school") {
  const host = document.getElementById("school-hero-collage");
  if (host) {
    const picks = [
      featured[0] || tagged[0],
      featured[1] || tagged[1],
      featured[2] || tagged[2],
    ].filter(Boolean);
    host.innerHTML = picks
      .map(
        (product, index) => `<div class="hero-card hero-card--${index + 1}">
          ${productArt(product)}
          <span class="hero-card-name">${product.name}<small>${formatIDR(
            product.priceFrom,
          )}</small></span>
        </div>`,
      )
      .join("");
    host.insertAdjacentHTML(
      "beforeend",
      `<span class="hero-spark hero-spark--a" aria-hidden="true">✦</span>
       <span class="hero-spark hero-spark--b" aria-hidden="true">✿</span>
       <span class="hero-spark hero-spark--c" aria-hidden="true">✦</span>
       <span class="hero-note">${t("school.sticker1")}</span>`,
    );
  }
}

if (segment === "office") {
  const host = document.getElementById("office-hero-collage");
  if (host) {
    const picks = [
      featured[0] || tagged[0],
      featured[1] || tagged[1],
      featured[2] || tagged[2],
    ].filter(Boolean);
    host.innerHTML = picks
      .map(
        (product, index) => `<div class="om-item ${
          index === 0 ? "om-item--large" : ""
        }"><span class="om-index">0${index + 1}</span>${productArt(product)}</div>`,
      )
      .join("");
  }
}

observeReveals();
