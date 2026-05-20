export interface Brand {
  id: string;
  name: string;
  category: string;
  logo: string;
  description: string;
}

export interface Product {
  id: string;
  name: string;
  brand: string;
  category: string;
  description: string;
  moq: string;
  priceRange: string;
  image: string;
  features: string[];
  certifications: string[];
  availability: string;
}

export const brands: Brand[] = [
  { id: "sony", name: "Sony", category: "Electronics", logo: "S", description: "Consumer electronics, gaming, and entertainment products" },
  { id: "samsung", name: "Samsung", category: "Electronics", logo: "SA", description: "Smartphones, TVs, home appliances, and semiconductors" },
  { id: "apple", name: "Apple", category: "Electronics", logo: "A", description: "Premium consumer electronics and software" },
  { id: "nike", name: "Nike", category: "Apparel", logo: "N", description: "Athletic footwear, apparel, and equipment" },
  { id: "adidas", name: "Adidas", category: "Apparel", logo: "AD", description: "Sports footwear, apparel, and accessories" },
  { id: "lego", name: "LEGO", category: "Toys", logo: "L", description: "Construction toys and educational products" },
  { id: "hasbro", name: "Hasbro", category: "Toys", logo: "H", description: "Board games, toys, and entertainment products" },
  { id: "loreal", name: "L'Oréal", category: "Beauty", logo: "LO", description: "Cosmetics, skincare, and hair care products" },
  { id: "procter", name: "P&G", category: "Household", logo: "PG", description: "Consumer goods and personal care products" },
  { id: "unilever", name: "Unilever", category: "Household", logo: "U", description: "Food, beverages, and personal care products" },
  { id: "philips", name: "Philips", category: "Electronics", logo: "P", description: "Healthcare, lighting, and consumer electronics" },
  { id: "canon", name: "Canon", category: "Electronics", logo: "C", description: "Cameras, printers, and imaging equipment" },
];

export const products: Product[] = [
  {
    id: "sony-wh1000xm5",
    name: "Sony WH-1000XM5 Headphones",
    brand: "Sony",
    category: "Electronics",
    description: "Industry-leading noise canceling headphones with premium sound quality. 30-hour battery life, automatic NC optimization, and multipoint connection. Perfect for retailers targeting audiophile customers.",
    moq: "100 units",
    priceRange: "$180 - $220/unit",
    image: "headphones",
    features: ["Active Noise Cancellation", "30h Battery Life", "Multipoint Connection", "Speak-to-Chat", "Quick Charge (3min = 3h)"],
    certifications: ["FCC", "CE", "RoHS"],
    availability: "In Stock - Ships within 7 days",
  },
  {
    id: "samsung-s24",
    name: "Samsung Galaxy S24 Ultra",
    brand: "Samsung",
    category: "Electronics",
    description: "Flagship smartphone with AI-powered features, S Pen, and 200MP camera system. High-demand product with strong margins for authorized distributors.",
    moq: "50 units",
    priceRange: "$850 - $1,100/unit",
    image: "smartphone",
    features: ["6.8\" QHD+ Display", "200MP Camera", "S Pen Built-in", "Galaxy AI", "5,000mAh Battery"],
    certifications: ["FCC", "CE", "IC"],
    availability: "In Stock - Ships within 10 days",
  },
  {
    id: "nike-airmax",
    name: "Nike Air Max 90",
    brand: "Nike",
    category: "Apparel",
    description: "Iconic sneaker with visible Air cushioning. Timeless design with consistent year-round demand across all demographics.",
    moq: "200 pairs",
    priceRange: "$55 - $75/pair",
    image: "sneakers",
    features: ["Visible Air Unit", "Leather & Mesh Upper", "Rubber Outsole", "Multiple Colorways", "Unisex Sizing"],
    certifications: ["OEKO-TEX", "ISO 9001"],
    availability: "In Stock - Ships within 14 days",
  },
  {
    id: "lego-starwars",
    name: "LEGO Star Wars Millennium Falcon",
    brand: "LEGO",
    category: "Toys",
    description: "Ultimate Collector's Series Millennium Falcon with over 7,500 pieces. High-value collectible with dedicated fan base.",
    moq: "30 units",
    priceRange: "$420 - $550/unit",
    image: "toy",
    features: ["7,541 Pieces", "Minifigures Included", "Detailed Interior", "Display Stand", "Collector's Item"],
    certifications: ["EN 71", "ASTM F963"],
    availability: "In Stock - Ships within 14 days",
  },
  {
    id: "apple-watch",
    name: "Apple Watch Series 9",
    brand: "Apple",
    category: "Electronics",
    description: "Advanced health monitoring smartwatch with the S9 chip and Double Tap gesture. Strong brand loyalty ensures consistent sales.",
    moq: "50 units",
    priceRange: "$280 - $380/unit",
    image: "watch",
    features: ["S9 SiP", "Double Tap Gesture", "Blood Oxygen Sensor", "ECG App", "Always-On Retina Display"],
    certifications: ["FCC", "CE", "UL"],
    availability: "In Stock - Ships within 10 days",
  },
  {
    id: "loreal-skincare",
    name: "L'Oréal Paris Revitalift Line",
    brand: "L'Oréal",
    category: "Beauty",
    description: "Anti-aging skincare line with hyaluronic acid and pro-retinol. Proven bestseller in beauty retail.",
    moq: "500 units (mixed SKUs)",
    priceRange: "$8 - $18/unit",
    image: "skincare",
    features: ["Hyaluronic Acid", "Pro-Retinol", "Dermatologist Tested", "Multiple Formulations", "Retail-Ready Packaging"],
    certifications: ["FDA", "EU Cosmetics Regulation"],
    availability: "In Stock - Ships within 7 days",
  },
  {
    id: "adidas-ultraboost",
    name: "Adidas Ultraboost 23",
    brand: "Adidas",
    category: "Apparel",
    description: "Premium running shoe with Boost cushioning technology. High performance and lifestyle appeal.",
    moq: "150 pairs",
    priceRange: "$85 - $120/pair",
    image: "sneakers",
    features: ["Boost Midsole", "Primeknit Upper", "Continental Rubber Outsole", "Torsion System", "Recycled Materials"],
    certifications: ["OEKO-TEX", "ISO 9001"],
    availability: "In Stock - Ships within 14 days",
  },
  {
    id: "philips-hue",
    name: "Philips Hue Starter Kit",
    brand: "Philips",
    category: "Electronics",
    description: "Smart lighting system with bridge and 4 bulbs. Growing smart home market presents expansion opportunity.",
    moq: "100 units",
    priceRange: "$65 - $85/unit",
    image: "lighting",
    features: ["16 Million Colors", "Voice Control", "App Control", "Scheduling", "Energy Efficient"],
    certifications: ["FCC", "CE", "Energy Star"],
    availability: "In Stock - Ships within 7 days",
  },
];

export const stats = [
  { label: "Brands Represented", value: "120+" },
  { label: "Annual Volume", value: "$50M+" },
  { label: "Countries Served", value: "35" },
  { label: "Years Experience", value: "15" },
];
