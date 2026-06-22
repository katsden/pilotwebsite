// Central data source for the menu.
// In production, replace this with a real API or database call.

export const CATEGORIES = ["All", "Food", "Drinks", "Dessert"];

export const MENU_ITEMS = [
  {
    id: 1,
    name: "Signature Burger",
    category: "Food",
    price: 65000,
    description: "House-made patty, caramelized onion, special sauce.",
    available: true,
  },
  {
    id: 2,
    name: "Truffle Fries",
    category: "Food",
    price: 45000,
    description: "Crispy fries tossed with truffle oil and parmesan.",
    available: true,
  },
  {
    id: 3,
    name: "Grilled Chicken Wrap",
    category: "Food",
    price: 55000,
    description: "Tender grilled chicken, fresh lettuce, house dressing.",
    available: true,
  },
  {
    id: 4,
    name: "Iced Matcha Latte",
    category: "Drinks",
    price: 35000,
    description: "Premium matcha, oat milk, light sweetness.",
    available: true,
  },
  {
    id: 5,
    name: "Sparkling Lemonade",
    category: "Drinks",
    price: 28000,
    description: "Fresh lemon, mint, sparkling water.",
    available: true,
  },
  {
    id: 6,
    name: "Chocolate Lava Cake",
    category: "Dessert",
    price: 42000,
    description: "Warm chocolate cake with molten center.",
    available: false, // Sold out example
  },
];
// TODO: replace with real menu data from client
