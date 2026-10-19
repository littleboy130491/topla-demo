import { locations } from "../data.js";
import { CONFIG } from "../config.js";
import { icon } from "../ui.js";
import { t, getLang } from "../i18n.js";

const pinsHost = document.getElementById("map-pins");
const detail = document.getElementById("map-detail");
const list = document.getElementById("map-list");

if (pinsHost && detail && list) {
  const lang = getLang();
  const typeLabel = (type) => t(`map.legend.${type}`);

  const detailMarkup = (location) => {
    const text =
      lang === "id"
        ? `Halo Topla, saya ingin bertanya tentang hub ${location.city}.`
        : `Hello Topla, I would like to ask about the ${location.city} hub.`;
    return `<span class="map-detail-type">${typeLabel(location.type)}</span>
      <h2>${location.city}</h2>
      <p class="map-detail-label">${t("map.address")}</p>
      <p class="map-detail-address">${location.address}</p>
      <p class="map-detail-label">${t("map.phone")}</p>
      <p class="map-detail-phone">${location.phone}</p>
      <a class="btn" href="https://wa.me/${
        CONFIG.whatsapp
      }?text=${encodeURIComponent(text)}" target="_blank" rel="noopener">
        ${icon("whatsapp", "", 16)} ${t("map.contact")}
      </a>`;
  };

  pinsHost.innerHTML = locations
    .map(
      (location) => `<button class="map-pin map-pin--${location.type}" type="button"
        style="left:${location.x}%;top:${location.y}%"
        data-location="${location.id}"
        aria-label="${location.city} — ${typeLabel(location.type)}">
        <span class="map-pin-dot"></span>
        <span class="map-pin-label">${location.city}</span>
      </button>`,
    )
    .join("");

  list.innerHTML = locations
    .map(
      (location) => `<button class="location-card" type="button" data-location="${location.id}">
        <small>${typeLabel(location.type)}</small>
        <strong>${location.city}</strong>
        <span>${location.address}</span>
      </button>`,
    )
    .join("");

  const select = (id) => {
    const location = locations.find((entry) => entry.id === id);
    if (!location) return;
    pinsHost.querySelectorAll(".map-pin").forEach((pin) => {
      pin.classList.toggle("is-active", pin.dataset.location === id);
    });
    list.querySelectorAll(".location-card").forEach((card) => {
      card.classList.toggle("is-active", card.dataset.location === id);
    });
    detail.innerHTML = detailMarkup(location);
  };

  pinsHost.addEventListener("click", (event) => {
    const pin = event.target.closest("[data-location]");
    if (pin) select(pin.dataset.location);
  });

  list.addEventListener("click", (event) => {
    const card = event.target.closest("[data-location]");
    if (card) select(card.dataset.location);
  });

  const hq = locations.find((location) => location.type === "hq") || locations[0];
  select(hq.id);
}
