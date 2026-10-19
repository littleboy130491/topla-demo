// Demo configuration — replace placeholders for a real deployment.
export const CONFIG = {
  whatsapp: "6281234567890", // demo number
  email: "hello@topla.example",
  phone: "+62 21 555 0123",
  address: "Jl. Contoh Raya No. 12, Jakarta Barat 11530",
  hours: "Senin–Jumat, 09.00–17.00 WIB",
  instagram: "https://instagram.com/",
  linkedin: "https://linkedin.com/",

  // Production note: GTranslate widget can be dropped in here. The demo uses
  // the manual ID/EN dictionary in i18n.js instead.
  gtranslate: null,
};

export const formatIDR = (value) =>
  "Rp" + Number(value).toLocaleString("id-ID");
