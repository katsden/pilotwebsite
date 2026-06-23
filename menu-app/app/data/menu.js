// TODO: nanti bisa di-replace dengan data real-time dari Firestore
// Untuk sekarang ini static data dulu

export const CATEGORIES = ["Semua", "Kopi", "Makanan"];

export const MENU_ITEMS = [
  {
    id: "1",
    name: "Lumina Signature Latte",
    category: "Kopi",
    price: 38000,
    description: "Espresso double shot dengan susu creamy dan gula aren organik spesial.",
    // TODO: taruh foto di /public/menu/ lalu isi src-nya
    image: null,
  },
  {
    id: "2",
    name: "Butter Croissant",
    category: "Makanan",
    price: 25000,
    description: "Croissant Prancis klasik yang renyah di luar, lembut di dalam.",
    image: null,
  },
  {
    id: "3",
    name: "Kyoto Matcha Espresso",
    category: "Kopi",
    price: 42000,
    description: "Perpaduan premium Uji Matcha dan house-blend espresso.",
    image: null,
  },
];
