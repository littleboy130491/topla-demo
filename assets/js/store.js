const KEY = "topla.inquiry.v1";
const MAX_QTY = 99;
const listeners = new Set();

function read() {
  try {
    const raw = JSON.parse(localStorage.getItem(KEY));
    return Array.isArray(raw) ? raw : [];
  } catch {
    return [];
  }
}

let items = read();

function persist() {
  try {
    localStorage.setItem(KEY, JSON.stringify(items));
  } catch {
    // Storage may be unavailable (private mode). The drawer still works per page.
  }
  listeners.forEach((fn) => fn(items));
}

export function subscribe(fn) {
  listeners.add(fn);
  return () => listeners.delete(fn);
}

export function getItems() {
  return items;
}

export function count() {
  return items.reduce((sum, item) => sum + item.qty, 0);
}

export function addItem(productId, variant = "", qty = 1) {
  const key = `${productId}::${variant}`;
  const found = items.find((item) => item.key === key);
  if (found) {
    found.qty = Math.min(MAX_QTY, found.qty + qty);
  } else {
    items = [...items, { key, productId, variant, qty: Math.min(MAX_QTY, qty) }];
  }
  persist();
}

export function setQty(key, qty) {
  const item = items.find((entry) => entry.key === key);
  if (!item) return;
  if (qty <= 0) {
    items = items.filter((entry) => entry.key !== key);
  } else {
    item.qty = Math.min(MAX_QTY, qty);
  }
  persist();
}

export function removeItem(key) {
  items = items.filter((entry) => entry.key !== key);
  persist();
}

export function clear() {
  items = [];
  persist();
}
