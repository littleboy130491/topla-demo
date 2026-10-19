import { products, brands, categories, brandName, categoryLabel } from "../data.js";
import { productCard, observeReveals } from "../ui.js";
import { t, getLang } from "../i18n.js";

const grid = document.getElementById("catalog-grid");
const empty = document.getElementById("catalog-empty");
const resultCount = document.getElementById("result-count");
const searchInput = document.getElementById("catalog-search");
const brandSelect = document.getElementById("filter-brand");
const categorySelect = document.getElementById("filter-category");
const sortSelect = document.getElementById("catalog-sort");
const segmentRow = document.getElementById("segment-row");
const categoryStrip = document.getElementById("categories");

if (!grid) {
  // Not the catalog page.
} else {
  const lang = getLang();
  const params = new URLSearchParams(location.search);
  const validSegment = (value) => value === "school" || value === "office";
  const validBrand = (value) => brands.some((brand) => brand.id === value);
  const validCategory = (value) =>
    categories.some((category) => category.id === value);

  const state = {
    q: params.get("q") || "",
    brand: validBrand(params.get("brand")) ? params.get("brand") : "",
    category: validCategory(params.get("category")) ? params.get("category") : "",
    segment: validSegment(params.get("segment")) ? params.get("segment") : "",
    sort: ["featured", "name", "price"].includes(params.get("sort"))
      ? params.get("sort")
      : "featured",
  };

  /* ------------------------------ filter controls ------------------------- */

  const buildSelects = () => {
    brandSelect.innerHTML =
      `<option value="">${t("catalog.brand")}</option>` +
      brands
        .map((brand) => `<option value="${brand.id}">${brand.name}</option>`)
        .join("");

    categorySelect.innerHTML =
      `<option value="">${t("catalog.category")}</option>` +
      categories
        .map(
          (category) =>
            `<option value="${category.id}">${category.label[lang]}</option>`,
        )
        .join("");

    sortSelect.innerHTML = `
      <option value="featured">${t("catalog.sort.featured")}</option>
      <option value="name">${t("catalog.sort.name")}</option>
      <option value="price">${t("catalog.sort.price")}</option>`;
  };

  const buildCategoryStrip = () => {
    const counts = categories.map((category) => ({
      ...category,
      count: products.filter((product) => product.category === category.id).length,
    }));
    categoryStrip.innerHTML =
      `<button class="category-chip ${
        state.category === "" ? "is-active" : ""
      }" type="button" data-category="">${t("common.all")}<span>${
        products.length
      }</span></button>` +
      counts
        .map(
          (category) =>
            `<button class="category-chip ${
              state.category === category.id ? "is-active" : ""
            }" type="button" data-category="${category.id}">${
              category.label[lang]
            }<span>${category.count}</span></button>`,
        )
        .join("");
  };

  const syncControls = () => {
    searchInput.value = state.q;
    brandSelect.value = state.brand;
    categorySelect.value = state.category;
    sortSelect.value = state.sort;
    segmentRow.querySelectorAll("[data-segment]").forEach((button) => {
      const active = button.dataset.segment === state.segment;
      button.classList.toggle("is-active", active);
      button.setAttribute("aria-pressed", String(active));
    });
  };

  /* --------------------------------- filter ------------------------------- */

  const matchesQuery = (product, query) => {
    if (!query) return true;
    const haystack = [
      product.name,
      brandName(product.brand),
      categoryLabel(product.category, "id"),
      categoryLabel(product.category, "en"),
      product.short.id,
      product.short.en,
      ...product.segments,
    ]
      .join(" ")
      .toLowerCase();
    return haystack.includes(query);
  };

  const sortProducts = (list) => {
    const sorted = [...list];
    if (state.sort === "name") {
      sorted.sort((a, b) => a.name.localeCompare(b.name));
    } else if (state.sort === "price") {
      sorted.sort((a, b) => a.priceFrom - b.priceFrom);
    } else {
      sorted.sort((a, b) => {
        const aFeatured = a.featured.school || a.featured.office ? 0 : 1;
        const bFeatured = b.featured.school || b.featured.office ? 0 : 1;
        return aFeatured - bFeatured || a.name.localeCompare(b.name);
      });
    }
    return sorted;
  };

  const updateUrl = () => {
    const next = new URLSearchParams();
    if (state.q) next.set("q", state.q);
    if (state.brand) next.set("brand", state.brand);
    if (state.category) next.set("category", state.category);
    if (state.segment) next.set("segment", state.segment);
    if (state.sort !== "featured") next.set("sort", state.sort);
    const query = next.toString();
    const url = `${location.pathname}${query ? `?${query}` : ""}${location.hash}`;
    history.replaceState(null, "", url);
  };

  const render = () => {
    const query = state.q.trim().toLowerCase();
    const filtered = products.filter(
      (product) =>
        matchesQuery(product, query) &&
        (!state.brand || product.brand === state.brand) &&
        (!state.category || product.category === state.category) &&
        (!state.segment || product.segments.includes(state.segment)),
    );
    const sorted = sortProducts(filtered);

    grid.innerHTML = sorted
      .map((product) => productCard(product, "glass"))
      .join("");

    const hasResults = sorted.length > 0;
    empty.classList.toggle("is-visible", !hasResults);
    grid.hidden = !hasResults;
    resultCount.innerHTML = `<strong>${sorted.length}</strong> ${t(
      "catalog.results",
    )}`;

    categoryStrip.querySelectorAll("[data-category]").forEach((button) => {
      button.classList.toggle(
        "is-active",
        button.dataset.category === state.category,
      );
    });
    segmentRow.querySelectorAll("[data-segment]").forEach((button) => {
      const active = button.dataset.segment === state.segment;
      button.classList.toggle("is-active", active);
      button.setAttribute("aria-pressed", String(active));
    });

    syncControls();
    updateUrl();
    observeReveals();
  };

  const reset = () => {
    state.q = "";
    state.brand = "";
    state.category = "";
    state.segment = "";
    state.sort = "featured";
    render();
  };

  /* -------------------------------- events -------------------------------- */

  buildSelects();
  buildCategoryStrip();
  syncControls();
  render();

  let searchTimer;
  searchInput.addEventListener("input", () => {
    clearTimeout(searchTimer);
    searchTimer = setTimeout(() => {
      state.q = searchInput.value;
      render();
    }, 180);
  });

  brandSelect.addEventListener("change", () => {
    state.brand = brandSelect.value;
    render();
  });

  categorySelect.addEventListener("change", () => {
    state.category = categorySelect.value;
    render();
  });

  sortSelect.addEventListener("change", () => {
    state.sort = sortSelect.value;
    render();
  });

  segmentRow.addEventListener("click", (event) => {
    const button = event.target.closest("[data-segment]");
    if (!button) return;
    state.segment = button.dataset.segment;
    render();
  });

  categoryStrip.addEventListener("click", (event) => {
    const button = event.target.closest("[data-category]");
    if (!button) return;
    state.category = button.dataset.category;
    categorySelect.value = state.category;
    render();
  });

  document.querySelectorAll("[data-reset-filters]").forEach((button) => {
    button.addEventListener("click", reset);
  });
}
