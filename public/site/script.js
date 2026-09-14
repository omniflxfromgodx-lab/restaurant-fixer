/**
 * NEW PEARL — Modern Restaurant Website
 * Production-quality Interactive Engine & Client Demo Controller
 */

window.__initNoireSite = () => {
  if (window.__noireSiteBooted) return;
  window.__noireSiteBooted = true;
  'use strict';

  // --------------------------------------------------------------------------
  // 1. Data Store: Contemporary Indian Tasting Menu
  // --------------------------------------------------------------------------
  const MENU_DATA = [
    {
      id: 'd000',
      name: "Chicken Kolhwara",
      category: 'tandoor',
      priceINR: 325,
      diet: 'non-veg',
      isChefPick: false,
      spiceLevel: 2,
      image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80',
      description: "Char-grilled in the clay tandoor, Chicken Kolhwara is marinated overnight in house masala for a smoky, tender bite.",
      allergens: 'None',
      pairing: 'Mint chutney and onion rings',
      origin: 'New Pearl, Purnia'
    },
    {
      id: 'd001',
      name: "Chicken Basket",
      category: 'tandoor',
      priceINR: 860,
      diet: 'non-veg',
      isChefPick: true,
      spiceLevel: 3,
      image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80',
      description: "Char-grilled in the clay tandoor, Chicken Basket is marinated overnight in house masala for a smoky, tender bite.",
      allergens: 'None',
      pairing: 'Mint chutney and onion rings',
      origin: 'New Pearl, Purnia'
    },
    {
      id: 'd002',
      name: "Atishi Aaloo",
      category: 'tandoor',
      priceINR: 270,
      diet: 'veg',
      isChefPick: false,
      spiceLevel: 1,
      image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80',
      description: "Tandoor-fired Atishi Aaloo, marinated in yogurt and aromatic house spices, char-grilled in the clay oven.",
      allergens: 'None',
      pairing: 'Mint chutney and onion rings',
      origin: 'New Pearl, Purnia'
    },
    {
      id: 'd003',
      name: "Veg Hara Bhara Kabab",
      category: 'tandoor',
      priceINR: 270,
      diet: 'veg',
      isChefPick: false,
      spiceLevel: 2,
      image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80',
      description: "Tandoor-fired Veg Hara Bhara Kabab, marinated in yogurt and aromatic house spices, char-grilled in the clay oven.",
      allergens: 'None',
      pairing: 'Mint chutney and onion rings',
      origin: 'New Pearl, Purnia'
    },
    {
      id: 'd004',
      name: "Chicken Ginger Kabab",
      category: 'tandoor',
      priceINR: 330,
      diet: 'non-veg',
      isChefPick: false,
      spiceLevel: 2,
      image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80',
      description: "Char-grilled in the clay tandoor, Chicken Ginger Kabab is marinated overnight in house masala for a smoky, tender bite.",
      allergens: 'None',
      pairing: 'Mint chutney and onion rings',
      origin: 'New Pearl, Purnia'
    },
    {
      id: 'd005',
      name: "Chicken Panah Kabab",
      category: 'tandoor',
      priceINR: 330,
      diet: 'non-veg',
      isChefPick: false,
      spiceLevel: 2,
      image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80',
      description: "Char-grilled in the clay tandoor, Chicken Panah Kabab is marinated overnight in house masala for a smoky, tender bite.",
      allergens: 'None',
      pairing: 'Mint chutney and onion rings',
      origin: 'New Pearl, Purnia'
    },
    {
      id: 'd006',
      name: "Chicken Hyderabadi Tikka",
      category: 'tandoor',
      priceINR: 325,
      diet: 'non-veg',
      isChefPick: false,
      spiceLevel: 2,
      image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80',
      description: "Char-grilled in the clay tandoor, Chicken Hyderabadi Tikka is marinated overnight in house masala for a smoky, tender bite.",
      allergens: 'None',
      pairing: 'Mint chutney and onion rings',
      origin: 'New Pearl, Purnia'
    },
    {
      id: 'd007',
      name: "Chicken Mughlai Kabab",
      category: 'tandoor',
      priceINR: 325,
      diet: 'non-veg',
      isChefPick: false,
      spiceLevel: 2,
      image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80',
      description: "Char-grilled in the clay tandoor, Chicken Mughlai Kabab is marinated overnight in house masala for a smoky, tender bite.",
      allergens: 'None',
      pairing: 'Mint chutney and onion rings',
      origin: 'New Pearl, Purnia'
    },
    {
      id: 'd008',
      name: "Paneer Ginger Kabab",
      category: 'tandoor',
      priceINR: 300,
      diet: 'veg',
      isChefPick: false,
      spiceLevel: 2,
      image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80',
      description: "Tandoor-fired Paneer Ginger Kabab, marinated in yogurt and aromatic house spices, char-grilled in the clay oven.",
      allergens: 'None',
      pairing: 'Mint chutney and onion rings',
      origin: 'New Pearl, Purnia'
    },
    {
      id: 'd009',
      name: "Paneer Malai Kabab",
      category: 'tandoor',
      priceINR: 320,
      diet: 'veg',
      isChefPick: false,
      spiceLevel: 1,
      image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80',
      description: "Tandoor-fired Paneer Malai Kabab, marinated in yogurt and aromatic house spices, char-grilled in the clay oven.",
      allergens: 'Dairy',
      pairing: 'Mint chutney and onion rings',
      origin: 'New Pearl, Purnia'
    },
    {
      id: 'd010',
      name: "Paneer Lehsuni Kabab",
      category: 'tandoor',
      priceINR: 305,
      diet: 'veg',
      isChefPick: false,
      spiceLevel: 2,
      image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80',
      description: "Tandoor-fired Paneer Lehsuni Kabab, marinated in yogurt and aromatic house spices, char-grilled in the clay oven.",
      allergens: 'None',
      pairing: 'Mint chutney and onion rings',
      origin: 'New Pearl, Purnia'
    },
    {
      id: 'd011',
      name: "Paneer Haryali Kabab",
      category: 'tandoor',
      priceINR: 305,
      diet: 'veg',
      isChefPick: false,
      spiceLevel: 2,
      image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80',
      description: "Tandoor-fired Paneer Haryali Kabab, marinated in yogurt and aromatic house spices, char-grilled in the clay oven.",
      allergens: 'None',
      pairing: 'Mint chutney and onion rings',
      origin: 'New Pearl, Purnia'
    },
    {
      id: 'd012',
      name: "Chicken Russian Kabab",
      category: 'tandoor',
      priceINR: 365,
      diet: 'non-veg',
      isChefPick: false,
      spiceLevel: 3,
      image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80',
      description: "Char-grilled in the clay tandoor, Chicken Russian Kabab is marinated overnight in house masala for a smoky, tender bite.",
      allergens: 'None',
      pairing: 'Mint chutney and onion rings',
      origin: 'New Pearl, Purnia'
    },
    {
      id: 'd013',
      name: "Chicken Kallimiri Kabab",
      category: 'tandoor',
      priceINR: 345,
      diet: 'non-veg',
      isChefPick: false,
      spiceLevel: 3,
      image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80',
      description: "Char-grilled in the clay tandoor, Chicken Kallimiri Kabab is marinated overnight in house masala for a smoky, tender bite.",
      allergens: 'None',
      pairing: 'Mint chutney and onion rings',
      origin: 'New Pearl, Purnia'
    },
    {
      id: 'd014',
      name: "Chicken Gulafi Kabab",
      category: 'tandoor',
      priceINR: 345,
      diet: 'non-veg',
      isChefPick: false,
      spiceLevel: 3,
      image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80',
      description: "Char-grilled in the clay tandoor, Chicken Gulafi Kabab is marinated overnight in house masala for a smoky, tender bite.",
      allergens: 'None',
      pairing: 'Mint chutney and onion rings',
      origin: 'New Pearl, Purnia'
    },
    {
      id: 'd015',
      name: "Paneer Kali Mirch Kabab",
      category: 'tandoor',
      priceINR: 345,
      diet: 'veg',
      isChefPick: false,
      spiceLevel: 2,
      image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80',
      description: "Tandoor-fired Paneer Kali Mirch Kabab, marinated in yogurt and aromatic house spices, char-grilled in the clay oven.",
      allergens: 'None',
      pairing: 'Mint chutney and onion rings',
      origin: 'New Pearl, Purnia'
    },
    {
      id: 'd016',
      name: "Mutton Seekh Kabab",
      category: 'tandoor',
      priceINR: 399,
      diet: 'non-veg',
      isChefPick: true,
      spiceLevel: 3,
      image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80',
      description: "Char-grilled in the clay tandoor, Mutton Seekh Kabab is marinated overnight in house masala for a smoky, tender bite.",
      allergens: 'None',
      pairing: 'Mint chutney and onion rings',
      origin: 'New Pearl, Purnia'
    },
    {
      id: 'd017',
      name: "Chicken Afghani Kabab",
      category: 'tandoor',
      priceINR: 370,
      diet: 'non-veg',
      isChefPick: true,
      spiceLevel: 3,
      image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80',
      description: "Char-grilled in the clay tandoor, Chicken Afghani Kabab is marinated overnight in house masala for a smoky, tender bite.",
      allergens: 'None',
      pairing: 'Mint chutney and onion rings',
      origin: 'New Pearl, Purnia'
    },
    {
      id: 'd018',
      name: "Veg Panchrangi",
      category: 'veg',
      priceINR: 260,
      diet: 'veg',
      isChefPick: false,
      spiceLevel: 2,
      image: 'https://images.unsplash.com/photo-1567620832903-9fc6debc209f?auto=format&fit=crop&w=800&q=80',
      description: "Veg Panchrangi — a North Indian classic from our veg garden, slow-cooked in Purnia style with house-ground spices.",
      allergens: 'None',
      pairing: 'Butter naan or jeera rice',
      origin: 'New Pearl, Purnia'
    },
    {
      id: 'd019',
      name: "Jeera Aloo",
      category: 'veg',
      priceINR: 185,
      diet: 'veg',
      isChefPick: false,
      spiceLevel: 1,
      image: 'https://images.unsplash.com/photo-1567620832903-9fc6debc209f?auto=format&fit=crop&w=800&q=80',
      description: "Jeera Aloo — a North Indian classic from our veg garden, slow-cooked in Purnia style with house-ground spices.",
      allergens: 'None',
      pairing: 'Butter naan or jeera rice',
      origin: 'New Pearl, Purnia'
    },
    {
      id: 'd020',
      name: "Aloo Matar",
      category: 'veg',
      priceINR: 190,
      diet: 'veg',
      isChefPick: false,
      spiceLevel: 1,
      image: 'https://images.unsplash.com/photo-1567620832903-9fc6debc209f?auto=format&fit=crop&w=800&q=80',
      description: "Aloo Matar — a North Indian classic from our veg garden, slow-cooked in Purnia style with house-ground spices.",
      allergens: 'None',
      pairing: 'Butter naan or jeera rice',
      origin: 'New Pearl, Purnia'
    },
    {
      id: 'd021',
      name: "Dum Aloo Kashmiri",
      category: 'veg',
      priceINR: 225,
      diet: 'veg',
      isChefPick: false,
      spiceLevel: 1,
      image: 'https://images.unsplash.com/photo-1567620832903-9fc6debc209f?auto=format&fit=crop&w=800&q=80',
      description: "Dum Aloo Kashmiri — a North Indian classic from our veg garden, slow-cooked in Purnia style with house-ground spices.",
      allergens: 'None',
      pairing: 'Butter naan or jeera rice',
      origin: 'New Pearl, Purnia'
    },
    {
      id: 'd022',
      name: "Dum Aloo Bhojpur",
      category: 'veg',
      priceINR: 220,
      diet: 'veg',
      isChefPick: false,
      spiceLevel: 1,
      image: 'https://images.unsplash.com/photo-1567620832903-9fc6debc209f?auto=format&fit=crop&w=800&q=80',
      description: "Dum Aloo Bhojpur — a North Indian classic from our veg garden, slow-cooked in Purnia style with house-ground spices.",
      allergens: 'None',
      pairing: 'Butter naan or jeera rice',
      origin: 'New Pearl, Purnia'
    },
    {
      id: 'd023',
      name: "Dum Aloo Banarsi",
      category: 'veg',
      priceINR: 215,
      diet: 'veg',
      isChefPick: false,
      spiceLevel: 1,
      image: 'https://images.unsplash.com/photo-1567620832903-9fc6debc209f?auto=format&fit=crop&w=800&q=80',
      description: "Dum Aloo Banarsi — a North Indian classic from our veg garden, slow-cooked in Purnia style with house-ground spices.",
      allergens: 'None',
      pairing: 'Butter naan or jeera rice',
      origin: 'New Pearl, Purnia'
    },
    {
      id: 'd024',
      name: "Govi Mussallam",
      category: 'veg',
      priceINR: 230,
      diet: 'veg',
      isChefPick: false,
      spiceLevel: 2,
      image: 'https://images.unsplash.com/photo-1567620832903-9fc6debc209f?auto=format&fit=crop&w=800&q=80',
      description: "Govi Mussallam — a North Indian classic from our veg garden, slow-cooked in Purnia style with house-ground spices.",
      allergens: 'None',
      pairing: 'Butter naan or jeera rice',
      origin: 'New Pearl, Purnia'
    },
    {
      id: 'd025',
      name: "Govi Butter Masala",
      category: 'veg',
      priceINR: 230,
      diet: 'veg',
      isChefPick: false,
      spiceLevel: 2,
      image: 'https://images.unsplash.com/photo-1567620832903-9fc6debc209f?auto=format&fit=crop&w=800&q=80',
      description: "Govi Butter Masala — a North Indian classic from our veg garden, slow-cooked in Purnia style with house-ground spices.",
      allergens: 'Dairy',
      pairing: 'Butter naan or jeera rice',
      origin: 'New Pearl, Purnia'
    },
    {
      id: 'd026',
      name: "Green Peas Masala",
      category: 'veg',
      priceINR: 225,
      diet: 'veg',
      isChefPick: false,
      spiceLevel: 2,
      image: 'https://images.unsplash.com/photo-1567620832903-9fc6debc209f?auto=format&fit=crop&w=800&q=80',
      description: "Green Peas Masala — a North Indian classic from our veg garden, slow-cooked in Purnia style with house-ground spices.",
      allergens: 'None',
      pairing: 'Butter naan or jeera rice',
      origin: 'New Pearl, Purnia'
    },
    {
      id: 'd027',
      name: "Seasonal Veg",
      category: 'veg',
      priceINR: 230,
      diet: 'veg',
      isChefPick: false,
      spiceLevel: 2,
      image: 'https://images.unsplash.com/photo-1567620832903-9fc6debc209f?auto=format&fit=crop&w=800&q=80',
      description: "Seasonal Veg — a North Indian classic from our veg garden, slow-cooked in Purnia style with house-ground spices.",
      allergens: 'None',
      pairing: 'Butter naan or jeera rice',
      origin: 'New Pearl, Purnia'
    },
    {
      id: 'd028',
      name: "Mix Veg",
      category: 'veg',
      priceINR: 240,
      diet: 'veg',
      isChefPick: false,
      spiceLevel: 2,
      image: 'https://images.unsplash.com/photo-1567620832903-9fc6debc209f?auto=format&fit=crop&w=800&q=80',
      description: "Mix Veg — a North Indian classic from our veg garden, slow-cooked in Purnia style with house-ground spices.",
      allergens: 'None',
      pairing: 'Butter naan or jeera rice',
      origin: 'New Pearl, Purnia'
    },
    {
      id: 'd029',
      name: "Veg Begum Bahar",
      category: 'veg',
      priceINR: 235,
      diet: 'veg',
      isChefPick: false,
      spiceLevel: 2,
      image: 'https://images.unsplash.com/photo-1567620832903-9fc6debc209f?auto=format&fit=crop&w=800&q=80',
      description: "Veg Begum Bahar — a North Indian classic from our veg garden, slow-cooked in Purnia style with house-ground spices.",
      allergens: 'None',
      pairing: 'Butter naan or jeera rice',
      origin: 'New Pearl, Purnia'
    },
    {
      id: 'd030',
      name: "Veg Makhani",
      category: 'veg',
      priceINR: 225,
      diet: 'veg',
      isChefPick: false,
      spiceLevel: 2,
      image: 'https://images.unsplash.com/photo-1567620832903-9fc6debc209f?auto=format&fit=crop&w=800&q=80',
      description: "Veg Makhani — a North Indian classic from our veg garden, slow-cooked in Purnia style with house-ground spices.",
      allergens: 'Dairy',
      pairing: 'Butter naan or jeera rice',
      origin: 'New Pearl, Purnia'
    },
    {
      id: 'd031',
      name: "Veg Korma",
      category: 'veg',
      priceINR: 230,
      diet: 'veg',
      isChefPick: false,
      spiceLevel: 1,
      image: 'https://images.unsplash.com/photo-1567620832903-9fc6debc209f?auto=format&fit=crop&w=800&q=80',
      description: "Veg Korma — a North Indian classic from our veg garden, slow-cooked in Purnia style with house-ground spices.",
      allergens: 'Dairy',
      pairing: 'Butter naan or jeera rice',
      origin: 'New Pearl, Purnia'
    },
    {
      id: 'd032',
      name: "Veg Navratan Korma",
      category: 'veg',
      priceINR: 245,
      diet: 'veg',
      isChefPick: false,
      spiceLevel: 1,
      image: 'https://images.unsplash.com/photo-1567620832903-9fc6debc209f?auto=format&fit=crop&w=800&q=80',
      description: "Veg Navratan Korma — a North Indian classic from our veg garden, slow-cooked in Purnia style with house-ground spices.",
      allergens: 'Dairy',
      pairing: 'Butter naan or jeera rice',
      origin: 'New Pearl, Purnia'
    },
    {
      id: 'd033',
      name: "Aloo Do Pyaza",
      category: 'veg',
      priceINR: 230,
      diet: 'veg',
      isChefPick: false,
      spiceLevel: 1,
      image: 'https://images.unsplash.com/photo-1567620832903-9fc6debc209f?auto=format&fit=crop&w=800&q=80',
      description: "Aloo Do Pyaza — a North Indian classic from our veg garden, slow-cooked in Purnia style with house-ground spices.",
      allergens: 'None',
      pairing: 'Butter naan or jeera rice',
      origin: 'New Pearl, Purnia'
    },
    {
      id: 'd034',
      name: "Karahi Paneer",
      category: 'veg',
      priceINR: 295,
      diet: 'veg',
      isChefPick: false,
      spiceLevel: 2,
      image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=800&q=80',
      description: "Karahi Paneer — a North Indian classic from our veg garden, slow-cooked in Purnia style with house-ground spices.",
      allergens: 'Dairy',
      pairing: 'Butter naan or jeera rice',
      origin: 'New Pearl, Purnia'
    },
    {
      id: 'd035',
      name: "Paneer Diwani",
      category: 'veg',
      priceINR: 250,
      diet: 'veg',
      isChefPick: false,
      spiceLevel: 2,
      image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=800&q=80',
      description: "Paneer Diwani — a North Indian classic from our veg garden, slow-cooked in Purnia style with house-ground spices.",
      allergens: 'Dairy',
      pairing: 'Butter naan or jeera rice',
      origin: 'New Pearl, Purnia'
    },
    {
      id: 'd036',
      name: "Paneer 555",
      category: 'veg',
      priceINR: 275,
      diet: 'veg',
      isChefPick: false,
      spiceLevel: 2,
      image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=800&q=80',
      description: "Paneer 555 — a North Indian classic from our veg garden, slow-cooked in Purnia style with house-ground spices.",
      allergens: 'Dairy',
      pairing: 'Butter naan or jeera rice',
      origin: 'New Pearl, Purnia'
    },
    {
      id: 'd037',
      name: "Paneer Bhujia",
      category: 'veg',
      priceINR: 270,
      diet: 'veg',
      isChefPick: false,
      spiceLevel: 2,
      image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=800&q=80',
      description: "Paneer Bhujia — a North Indian classic from our veg garden, slow-cooked in Purnia style with house-ground spices.",
      allergens: 'Dairy',
      pairing: 'Butter naan or jeera rice',
      origin: 'New Pearl, Purnia'
    },
    {
      id: 'd038',
      name: "Sabnam Curry",
      category: 'veg',
      priceINR: 295,
      diet: 'veg',
      isChefPick: false,
      spiceLevel: 2,
      image: 'https://images.unsplash.com/photo-1567620832903-9fc6debc209f?auto=format&fit=crop&w=800&q=80',
      description: "Sabnam Curry — a North Indian classic from our veg garden, slow-cooked in Purnia style with house-ground spices.",
      allergens: 'None',
      pairing: 'Butter naan or jeera rice',
      origin: 'New Pearl, Purnia'
    },
    {
      id: 'd039',
      name: "Bhindi Do Pyaza",
      category: 'veg',
      priceINR: 225,
      diet: 'veg',
      isChefPick: false,
      spiceLevel: 2,
      image: 'https://images.unsplash.com/photo-1567620832903-9fc6debc209f?auto=format&fit=crop&w=800&q=80',
      description: "Bhindi Do Pyaza — a North Indian classic from our veg garden, slow-cooked in Purnia style with house-ground spices.",
      allergens: 'None',
      pairing: 'Butter naan or jeera rice',
      origin: 'New Pearl, Purnia'
    },
    {
      id: 'd040',
      name: "Kaju Paneer Butter Masala",
      category: 'veg',
      priceINR: 340,
      diet: 'veg',
      isChefPick: false,
      spiceLevel: 2,
      image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=800&q=80',
      description: "Kaju Paneer Butter Masala — a North Indian classic from our veg garden, slow-cooked in Purnia style with house-ground spices.",
      allergens: 'Dairy',
      pairing: 'Butter naan or jeera rice',
      origin: 'New Pearl, Purnia'
    },
    {
      id: 'd041',
      name: "Kaju Korma",
      category: 'veg',
      priceINR: 340,
      diet: 'veg',
      isChefPick: false,
      spiceLevel: 1,
      image: 'https://images.unsplash.com/photo-1567620832903-9fc6debc209f?auto=format&fit=crop&w=800&q=80',
      description: "Kaju Korma — a North Indian classic from our veg garden, slow-cooked in Purnia style with house-ground spices.",
      allergens: 'Dairy',
      pairing: 'Butter naan or jeera rice',
      origin: 'New Pearl, Purnia'
    },
    {
      id: 'd042',
      name: "Paneer Butter Masala",
      category: 'veg',
      priceINR: 275,
      diet: 'veg',
      isChefPick: false,
      spiceLevel: 2,
      image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=800&q=80',
      description: "Paneer Butter Masala — a North Indian classic from our veg garden, slow-cooked in Purnia style with house-ground spices.",
      allergens: 'Dairy',
      pairing: 'Butter naan or jeera rice',
      origin: 'New Pearl, Purnia'
    },
    {
      id: 'd043',
      name: "Paneer Do Pyaza",
      category: 'veg',
      priceINR: 260,
      diet: 'veg',
      isChefPick: false,
      spiceLevel: 2,
      image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=800&q=80',
      description: "Paneer Do Pyaza — a North Indian classic from our veg garden, slow-cooked in Purnia style with house-ground spices.",
      allergens: 'Dairy',
      pairing: 'Butter naan or jeera rice',
      origin: 'New Pearl, Purnia'
    },
    {
      id: 'd044',
      name: "Paneer Makhani",
      category: 'veg',
      priceINR: 270,
      diet: 'veg',
      isChefPick: false,
      spiceLevel: 2,
      image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=800&q=80',
      description: "Paneer Makhani — a North Indian classic from our veg garden, slow-cooked in Purnia style with house-ground spices.",
      allergens: 'Dairy',
      pairing: 'Butter naan or jeera rice',
      origin: 'New Pearl, Purnia'
    },
    {
      id: 'd045',
      name: "Paneer Dilruba",
      category: 'veg',
      priceINR: 265,
      diet: 'veg',
      isChefPick: false,
      spiceLevel: 2,
      image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=800&q=80',
      description: "Paneer Dilruba — a North Indian classic from our veg garden, slow-cooked in Purnia style with house-ground spices.",
      allergens: 'Dairy',
      pairing: 'Butter naan or jeera rice',
      origin: 'New Pearl, Purnia'
    },
    {
      id: 'd046',
      name: "Paneer Pasanda",
      category: 'veg',
      priceINR: 275,
      diet: 'veg',
      isChefPick: false,
      spiceLevel: 2,
      image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=800&q=80',
      description: "Paneer Pasanda — a North Indian classic from our veg garden, slow-cooked in Purnia style with house-ground spices.",
      allergens: 'Dairy',
      pairing: 'Butter naan or jeera rice',
      origin: 'New Pearl, Purnia'
    },
    {
      id: 'd047',
      name: "Matar Paneer",
      category: 'veg',
      priceINR: 230,
      diet: 'veg',
      isChefPick: false,
      spiceLevel: 1,
      image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=800&q=80',
      description: "Matar Paneer — a North Indian classic from our veg garden, slow-cooked in Purnia style with house-ground spices.",
      allergens: 'Dairy',
      pairing: 'Butter naan or jeera rice',
      origin: 'New Pearl, Purnia'
    },
    {
      id: 'd048',
      name: "Shahi Paneer",
      category: 'veg',
      priceINR: 270,
      diet: 'veg',
      isChefPick: false,
      spiceLevel: 2,
      image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=800&q=80',
      description: "Shahi Paneer — a North Indian classic from our veg garden, slow-cooked in Purnia style with house-ground spices.",
      allergens: 'Dairy',
      pairing: 'Butter naan or jeera rice',
      origin: 'New Pearl, Purnia'
    },
    {
      id: 'd049',
      name: "Paneer Kofta",
      category: 'veg',
      priceINR: 265,
      diet: 'veg',
      isChefPick: false,
      spiceLevel: 2,
      image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=800&q=80',
      description: "Paneer Kofta — a North Indian classic from our veg garden, slow-cooked in Purnia style with house-ground spices.",
      allergens: 'Dairy',
      pairing: 'Butter naan or jeera rice',
      origin: 'New Pearl, Purnia'
    },
    {
      id: 'd050',
      name: "Malai Kofta",
      category: 'veg',
      priceINR: 275,
      diet: 'veg',
      isChefPick: false,
      spiceLevel: 1,
      image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=800&q=80',
      description: "Malai Kofta — a North Indian classic from our veg garden, slow-cooked in Purnia style with house-ground spices.",
      allergens: 'Dairy',
      pairing: 'Butter naan or jeera rice',
      origin: 'New Pearl, Purnia'
    },
    {
      id: 'd051',
      name: "Veg Kofta",
      category: 'veg',
      priceINR: 240,
      diet: 'veg',
      isChefPick: false,
      spiceLevel: 2,
      image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=800&q=80',
      description: "Veg Kofta — a North Indian classic from our veg garden, slow-cooked in Purnia style with house-ground spices.",
      allergens: 'Dairy',
      pairing: 'Butter naan or jeera rice',
      origin: 'New Pearl, Purnia'
    },
    {
      id: 'd052',
      name: "Veg Pearl Spl.",
      category: 'veg',
      priceINR: 375,
      diet: 'veg',
      isChefPick: true,
      spiceLevel: 3,
      image: 'https://images.unsplash.com/photo-1567620832903-9fc6debc209f?auto=format&fit=crop&w=800&q=80',
      description: "Veg Pearl Spl. — a North Indian classic from our veg garden, slow-cooked in Purnia style with house-ground spices.",
      allergens: 'None',
      pairing: 'Butter naan or jeera rice',
      origin: 'New Pearl, Purnia'
    },
    {
      id: 'd053',
      name: "Veg Dilruba",
      category: 'veg',
      priceINR: 235,
      diet: 'veg',
      isChefPick: false,
      spiceLevel: 2,
      image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=800&q=80',
      description: "Veg Dilruba — a North Indian classic from our veg garden, slow-cooked in Purnia style with house-ground spices.",
      allergens: 'Dairy',
      pairing: 'Butter naan or jeera rice',
      origin: 'New Pearl, Purnia'
    },
    {
      id: 'd054',
      name: "Veg Jaipuri",
      category: 'veg',
      priceINR: 230,
      diet: 'veg',
      isChefPick: false,
      spiceLevel: 2,
      image: 'https://images.unsplash.com/photo-1567620832903-9fc6debc209f?auto=format&fit=crop&w=800&q=80',
      description: "Veg Jaipuri — a North Indian classic from our veg garden, slow-cooked in Purnia style with house-ground spices.",
      allergens: 'None',
      pairing: 'Butter naan or jeera rice',
      origin: 'New Pearl, Purnia'
    },
    {
      id: 'd055',
      name: "Veg Jhal Froee",
      category: 'veg',
      priceINR: 235,
      diet: 'veg',
      isChefPick: false,
      spiceLevel: 2,
      image: 'https://images.unsplash.com/photo-1567620832903-9fc6debc209f?auto=format&fit=crop&w=800&q=80',
      description: "Veg Jhal Froee — a North Indian classic from our veg garden, slow-cooked in Purnia style with house-ground spices.",
      allergens: 'None',
      pairing: 'Butter naan or jeera rice',
      origin: 'New Pearl, Purnia'
    },
    {
      id: 'd056',
      name: "Veg Narghish Kofta",
      category: 'veg',
      priceINR: 255,
      diet: 'veg',
      isChefPick: false,
      spiceLevel: 2,
      image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=800&q=80',
      description: "Veg Narghish Kofta — a North Indian classic from our veg garden, slow-cooked in Purnia style with house-ground spices.",
      allergens: 'Dairy',
      pairing: 'Butter naan or jeera rice',
      origin: 'New Pearl, Purnia'
    },
    {
      id: 'd057',
      name: "Shahi Kofta",
      category: 'veg',
      priceINR: 265,
      diet: 'veg',
      isChefPick: false,
      spiceLevel: 2,
      image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=800&q=80',
      description: "Shahi Kofta — a North Indian classic from our veg garden, slow-cooked in Purnia style with house-ground spices.",
      allergens: 'Dairy',
      pairing: 'Butter naan or jeera rice',
      origin: 'New Pearl, Purnia'
    },
    {
      id: 'd058',
      name: "Paneer Kolhapuri",
      category: 'veg',
      priceINR: 275,
      diet: 'veg',
      isChefPick: false,
      spiceLevel: 3,
      image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=800&q=80',
      description: "Paneer Kolhapuri — a North Indian classic from our veg garden, slow-cooked in Purnia style with house-ground spices.",
      allergens: 'Dairy',
      pairing: 'Butter naan or jeera rice',
      origin: 'New Pearl, Purnia'
    },
    {
      id: 'd059',
      name: "Paneer Punjabi",
      category: 'veg',
      priceINR: 260,
      diet: 'veg',
      isChefPick: false,
      spiceLevel: 2,
      image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=800&q=80',
      description: "Paneer Punjabi — a North Indian classic from our veg garden, slow-cooked in Purnia style with house-ground spices.",
      allergens: 'Dairy',
      pairing: 'Butter naan or jeera rice',
      origin: 'New Pearl, Purnia'
    },
    {
      id: 'd060',
      name: "Mushroom Butter Masala",
      category: 'veg',
      priceINR: 275,
      diet: 'veg',
      isChefPick: false,
      spiceLevel: 2,
      image: 'https://images.unsplash.com/photo-1567620832903-9fc6debc209f?auto=format&fit=crop&w=800&q=80',
      description: "Mushroom Butter Masala — a North Indian classic from our veg garden, slow-cooked in Purnia style with house-ground spices.",
      allergens: 'Dairy',
      pairing: 'Butter naan or jeera rice',
      origin: 'New Pearl, Purnia'
    },
    {
      id: 'd061',
      name: "Mushroom Do Pyaza",
      category: 'veg',
      priceINR: 275,
      diet: 'veg',
      isChefPick: false,
      spiceLevel: 2,
      image: 'https://images.unsplash.com/photo-1567620832903-9fc6debc209f?auto=format&fit=crop&w=800&q=80',
      description: "Mushroom Do Pyaza — a North Indian classic from our veg garden, slow-cooked in Purnia style with house-ground spices.",
      allergens: 'None',
      pairing: 'Butter naan or jeera rice',
      origin: 'New Pearl, Purnia'
    },
    {
      id: 'd062',
      name: "Mushroom Paneer with Capsicum",
      category: 'veg',
      priceINR: 285,
      diet: 'veg',
      isChefPick: false,
      spiceLevel: 2,
      image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=800&q=80',
      description: "Mushroom Paneer with Capsicum — a North Indian classic from our veg garden, slow-cooked in Purnia style with house-ground spices.",
      allergens: 'Dairy',
      pairing: 'Butter naan or jeera rice',
      origin: 'New Pearl, Purnia'
    },
    {
      id: 'd063',
      name: "Babycorn with Mushroom",
      category: 'veg',
      priceINR: 285,
      diet: 'veg',
      isChefPick: false,
      spiceLevel: 2,
      image: 'https://images.unsplash.com/photo-1567620832903-9fc6debc209f?auto=format&fit=crop&w=800&q=80',
      description: "Babycorn with Mushroom — a North Indian classic from our veg garden, slow-cooked in Purnia style with house-ground spices.",
      allergens: 'None',
      pairing: 'Butter naan or jeera rice',
      origin: 'New Pearl, Purnia'
    },
    {
      id: 'd064',
      name: "Mushroom Paneer with Babycorn",
      category: 'veg',
      priceINR: 290,
      diet: 'veg',
      isChefPick: false,
      spiceLevel: 2,
      image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=800&q=80',
      description: "Mushroom Paneer with Babycorn — a North Indian classic from our veg garden, slow-cooked in Purnia style with house-ground spices.",
      allergens: 'Dairy',
      pairing: 'Butter naan or jeera rice',
      origin: 'New Pearl, Purnia'
    },
    {
      id: 'd065',
      name: "Mushroom Handi",
      category: 'veg',
      priceINR: 280,
      diet: 'veg',
      isChefPick: false,
      spiceLevel: 2,
      image: 'https://images.unsplash.com/photo-1567620832903-9fc6debc209f?auto=format&fit=crop&w=800&q=80',
      description: "Mushroom Handi — a North Indian classic from our veg garden, slow-cooked in Purnia style with house-ground spices.",
      allergens: 'Dairy',
      pairing: 'Butter naan or jeera rice',
      origin: 'New Pearl, Purnia'
    },
    {
      id: 'd066',
      name: "Mushroom Korma",
      category: 'veg',
      priceINR: 270,
      diet: 'veg',
      isChefPick: false,
      spiceLevel: 1,
      image: 'https://images.unsplash.com/photo-1567620832903-9fc6debc209f?auto=format&fit=crop&w=800&q=80',
      description: "Mushroom Korma — a North Indian classic from our veg garden, slow-cooked in Purnia style with house-ground spices.",
      allergens: 'Dairy',
      pairing: 'Butter naan or jeera rice',
      origin: 'New Pearl, Purnia'
    },
    {
      id: 'd067',
      name: "Mushroom Karahi",
      category: 'veg',
      priceINR: 285,
      diet: 'veg',
      isChefPick: false,
      spiceLevel: 2,
      image: 'https://images.unsplash.com/photo-1567620832903-9fc6debc209f?auto=format&fit=crop&w=800&q=80',
      description: "Mushroom Karahi — a North Indian classic from our veg garden, slow-cooked in Purnia style with house-ground spices.",
      allergens: 'None',
      pairing: 'Butter naan or jeera rice',
      origin: 'New Pearl, Purnia'
    },
    {
      id: 'd068',
      name: "Veg Baroda Spl.",
      category: 'veg',
      priceINR: 375,
      diet: 'veg',
      isChefPick: true,
      spiceLevel: 3,
      image: 'https://images.unsplash.com/photo-1567620832903-9fc6debc209f?auto=format&fit=crop&w=800&q=80',
      description: "Veg Baroda Spl. — a North Indian classic from our veg garden, slow-cooked in Purnia style with house-ground spices.",
      allergens: 'None',
      pairing: 'Butter naan or jeera rice',
      origin: 'New Pearl, Purnia'
    },
    {
      id: 'd069',
      name: "Paneer Handi",
      category: 'veg',
      priceINR: 270,
      diet: 'veg',
      isChefPick: false,
      spiceLevel: 2,
      image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=800&q=80',
      description: "Paneer Handi — a North Indian classic from our veg garden, slow-cooked in Purnia style with house-ground spices.",
      allergens: 'Dairy',
      pairing: 'Butter naan or jeera rice',
      origin: 'New Pearl, Purnia'
    },
    {
      id: 'd070',
      name: "Veg Karahi",
      category: 'veg',
      priceINR: 250,
      diet: 'veg',
      isChefPick: false,
      spiceLevel: 2,
      image: 'https://images.unsplash.com/photo-1567620832903-9fc6debc209f?auto=format&fit=crop&w=800&q=80',
      description: "Veg Karahi — a North Indian classic from our veg garden, slow-cooked in Purnia style with house-ground spices.",
      allergens: 'None',
      pairing: 'Butter naan or jeera rice',
      origin: 'New Pearl, Purnia'
    },
    {
      id: 'd071',
      name: "Veg Handi",
      category: 'veg',
      priceINR: 250,
      diet: 'veg',
      isChefPick: false,
      spiceLevel: 2,
      image: 'https://images.unsplash.com/photo-1567620832903-9fc6debc209f?auto=format&fit=crop&w=800&q=80',
      description: "Veg Handi — a North Indian classic from our veg garden, slow-cooked in Purnia style with house-ground spices.",
      allergens: 'Dairy',
      pairing: 'Butter naan or jeera rice',
      origin: 'New Pearl, Purnia'
    },
    {
      id: 'd072',
      name: "Stuff Capsicum",
      category: 'veg',
      priceINR: 240,
      diet: 'veg',
      isChefPick: false,
      spiceLevel: 2,
      image: 'https://images.unsplash.com/photo-1567620832903-9fc6debc209f?auto=format&fit=crop&w=800&q=80',
      description: "Stuff Capsicum — a North Indian classic from our veg garden, slow-cooked in Purnia style with house-ground spices.",
      allergens: 'None',
      pairing: 'Butter naan or jeera rice',
      origin: 'New Pearl, Purnia'
    },
    {
      id: 'd073',
      name: "Stuff Tomato",
      category: 'veg',
      priceINR: 240,
      diet: 'veg',
      isChefPick: false,
      spiceLevel: 2,
      image: 'https://images.unsplash.com/photo-1567620832903-9fc6debc209f?auto=format&fit=crop&w=800&q=80',
      description: "Stuff Tomato — a North Indian classic from our veg garden, slow-cooked in Purnia style with house-ground spices.",
      allergens: 'None',
      pairing: 'Butter naan or jeera rice',
      origin: 'New Pearl, Purnia'
    },
    {
      id: 'd074',
      name: "Dal Fry",
      category: 'veg',
      priceINR: 145,
      diet: 'veg',
      isChefPick: false,
      spiceLevel: 1,
      image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=800&q=80',
      description: "Dal Fry — a North Indian classic from our veg garden, slow-cooked in Purnia style with house-ground spices.",
      allergens: 'Dairy',
      pairing: 'Butter naan or jeera rice',
      origin: 'New Pearl, Purnia'
    },
    {
      id: 'd075',
      name: "Dal Butter Fry",
      category: 'veg',
      priceINR: 155,
      diet: 'veg',
      isChefPick: false,
      spiceLevel: 1,
      image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=800&q=80',
      description: "Dal Butter Fry — a North Indian classic from our veg garden, slow-cooked in Purnia style with house-ground spices.",
      allergens: 'Dairy',
      pairing: 'Butter naan or jeera rice',
      origin: 'New Pearl, Purnia'
    },
    {
      id: 'd076',
      name: "Dal Makhani",
      category: 'veg',
      priceINR: 185,
      diet: 'veg',
      isChefPick: false,
      spiceLevel: 1,
      image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=800&q=80',
      description: "Dal Makhani — a North Indian classic from our veg garden, slow-cooked in Purnia style with house-ground spices.",
      allergens: 'Dairy',
      pairing: 'Butter naan or jeera rice',
      origin: 'New Pearl, Purnia'
    },
    {
      id: 'd077',
      name: "Dal Mughlai",
      category: 'veg',
      priceINR: 190,
      diet: 'veg',
      isChefPick: false,
      spiceLevel: 1,
      image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=800&q=80',
      description: "Dal Mughlai — a North Indian classic from our veg garden, slow-cooked in Purnia style with house-ground spices.",
      allergens: 'Dairy',
      pairing: 'Butter naan or jeera rice',
      origin: 'New Pearl, Purnia'
    },
    {
      id: 'd078',
      name: "Plain Dal",
      category: 'veg',
      priceINR: 115,
      diet: 'veg',
      isChefPick: false,
      spiceLevel: 1,
      image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=800&q=80',
      description: "Plain Dal — a North Indian classic from our veg garden, slow-cooked in Purnia style with house-ground spices.",
      allergens: 'Dairy',
      pairing: 'Butter naan or jeera rice',
      origin: 'New Pearl, Purnia'
    },
    {
      id: 'd079',
      name: "Dal Tarka",
      category: 'veg',
      priceINR: 160,
      diet: 'veg',
      isChefPick: false,
      spiceLevel: 1,
      image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=800&q=80',
      description: "Dal Tarka — a North Indian classic from our veg garden, slow-cooked in Purnia style with house-ground spices.",
      allergens: 'Dairy',
      pairing: 'Butter naan or jeera rice',
      origin: 'New Pearl, Purnia'
    },
    {
      id: 'd080',
      name: "Dal Maharani",
      category: 'veg',
      priceINR: 215,
      diet: 'veg',
      isChefPick: false,
      spiceLevel: 1,
      image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=800&q=80',
      description: "Dal Maharani — a North Indian classic from our veg garden, slow-cooked in Purnia style with house-ground spices.",
      allergens: 'Dairy',
      pairing: 'Butter naan or jeera rice',
      origin: 'New Pearl, Purnia'
    },
    {
      id: 'd081',
      name: "Veg Kolhapuri",
      category: 'veg',
      priceINR: 240,
      diet: 'veg',
      isChefPick: false,
      spiceLevel: 3,
      image: 'https://images.unsplash.com/photo-1567620832903-9fc6debc209f?auto=format&fit=crop&w=800&q=80',
      description: "Veg Kolhapuri — a North Indian classic from our veg garden, slow-cooked in Purnia style with house-ground spices.",
      allergens: 'None',
      pairing: 'Butter naan or jeera rice',
      origin: 'New Pearl, Purnia'
    },
    {
      id: 'd082',
      name: "Paneer Kassa",
      category: 'veg',
      priceINR: 290,
      diet: 'veg',
      isChefPick: false,
      spiceLevel: 3,
      image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=800&q=80',
      description: "Paneer Kassa — a North Indian classic from our veg garden, slow-cooked in Purnia style with house-ground spices.",
      allergens: 'Dairy',
      pairing: 'Butter naan or jeera rice',
      origin: 'New Pearl, Purnia'
    },
    {
      id: 'd083',
      name: "Paneer Tikka Masala",
      category: 'veg',
      priceINR: 320,
      diet: 'veg',
      isChefPick: false,
      spiceLevel: 2,
      image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=800&q=80',
      description: "Paneer Tikka Masala — a North Indian classic from our veg garden, slow-cooked in Purnia style with house-ground spices.",
      allergens: 'Dairy',
      pairing: 'Butter naan or jeera rice',
      origin: 'New Pearl, Purnia'
    },
    {
      id: 'd084',
      name: "Chicken Curry",
      category: 'nonveg',
      priceINR: 255,
      diet: 'non-veg',
      isChefPick: false,
      spiceLevel: 2,
      image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=800&q=80',
      description: "Chicken Curry, simmered slow in our North Indian kitchen with a rich, aromatic house gravy.",
      allergens: 'None',
      pairing: 'Butter naan or jeera rice',
      origin: 'New Pearl, Purnia'
    },
    {
      id: 'd085',
      name: "Chicken Do Pyaza",
      category: 'nonveg',
      priceINR: 270,
      diet: 'non-veg',
      isChefPick: false,
      spiceLevel: 2,
      image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=800&q=80',
      description: "Chicken Do Pyaza, simmered slow in our North Indian kitchen with a rich, aromatic house gravy.",
      allergens: 'None',
      pairing: 'Butter naan or jeera rice',
      origin: 'New Pearl, Purnia'
    },
    {
      id: 'd086',
      name: "Chicken Masala",
      category: 'nonveg',
      priceINR: 285,
      diet: 'non-veg',
      isChefPick: false,
      spiceLevel: 2,
      image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=800&q=80',
      description: "Chicken Masala, simmered slow in our North Indian kitchen with a rich, aromatic house gravy.",
      allergens: 'None',
      pairing: 'Butter naan or jeera rice',
      origin: 'New Pearl, Purnia'
    },
    {
      id: 'd087',
      name: "Chicken Mughlai",
      category: 'nonveg',
      priceINR: 270,
      diet: 'non-veg',
      isChefPick: false,
      spiceLevel: 2,
      image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=800&q=80',
      description: "Chicken Mughlai, simmered slow in our North Indian kitchen with a rich, aromatic house gravy.",
      allergens: 'Dairy',
      pairing: 'Butter naan or jeera rice',
      origin: 'New Pearl, Purnia'
    },
    {
      id: 'd088',
      name: "Chicken Korma",
      category: 'nonveg',
      priceINR: 270,
      diet: 'non-veg',
      isChefPick: false,
      spiceLevel: 1,
      image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=800&q=80',
      description: "Chicken Korma, simmered slow in our North Indian kitchen with a rich, aromatic house gravy.",
      allergens: 'Dairy',
      pairing: 'Butter naan or jeera rice',
      origin: 'New Pearl, Purnia'
    },
    {
      id: 'd089',
      name: "Chicken Fry Indian",
      category: 'nonveg',
      priceINR: 265,
      diet: 'non-veg',
      isChefPick: false,
      spiceLevel: 2,
      image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=800&q=80',
      description: "Chicken Fry Indian, simmered slow in our North Indian kitchen with a rich, aromatic house gravy.",
      allergens: 'None',
      pairing: 'Butter naan or jeera rice',
      origin: 'New Pearl, Purnia'
    },
    {
      id: 'd090',
      name: "Chicken Butter Masala (F) 8 pcs",
      category: 'nonveg',
      priceINR: 560,
      diet: 'non-veg',
      isChefPick: false,
      spiceLevel: 2,
      image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80',
      description: "Chicken Butter Masala (F) 8 pcs, simmered slow in our North Indian kitchen with a rich, aromatic house gravy.",
      allergens: 'Dairy',
      pairing: 'Butter naan or jeera rice',
      origin: 'New Pearl, Purnia'
    },
    {
      id: 'd091',
      name: "Chicken Butter Masala (H) 4 pcs",
      category: 'nonveg',
      priceINR: 345,
      diet: 'non-veg',
      isChefPick: false,
      spiceLevel: 2,
      image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80',
      description: "Chicken Butter Masala (H) 4 pcs, simmered slow in our North Indian kitchen with a rich, aromatic house gravy.",
      allergens: 'Dairy',
      pairing: 'Butter naan or jeera rice',
      origin: 'New Pearl, Purnia'
    },
    {
      id: 'd092',
      name: "Murgh Mussallam (F) 8 pcs",
      category: 'nonveg',
      priceINR: 590,
      diet: 'non-veg',
      isChefPick: false,
      spiceLevel: 2,
      image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=800&q=80',
      description: "Murgh Mussallam (F) 8 pcs, simmered slow in our North Indian kitchen with a rich, aromatic house gravy.",
      allergens: 'None',
      pairing: 'Butter naan or jeera rice',
      origin: 'New Pearl, Purnia'
    },
    {
      id: 'd093',
      name: "Murgh Mussallam (H) 4 pcs",
      category: 'nonveg',
      priceINR: 360,
      diet: 'non-veg',
      isChefPick: false,
      spiceLevel: 2,
      image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=800&q=80',
      description: "Murgh Mussallam (H) 4 pcs, simmered slow in our North Indian kitchen with a rich, aromatic house gravy.",
      allergens: 'None',
      pairing: 'Butter naan or jeera rice',
      origin: 'New Pearl, Purnia'
    },
    {
      id: 'd094',
      name: "Murgh Begum Bahar",
      category: 'nonveg',
      priceINR: 320,
      diet: 'non-veg',
      isChefPick: false,
      spiceLevel: 2,
      image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=800&q=80',
      description: "Murgh Begum Bahar, simmered slow in our North Indian kitchen with a rich, aromatic house gravy.",
      allergens: 'None',
      pairing: 'Butter naan or jeera rice',
      origin: 'New Pearl, Purnia'
    },
    {
      id: 'd095',
      name: "Murgh Kolhapuri (F) 8 pcs",
      category: 'nonveg',
      priceINR: 590,
      diet: 'non-veg',
      isChefPick: false,
      spiceLevel: 3,
      image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=800&q=80',
      description: "Murgh Kolhapuri (F) 8 pcs, simmered slow in our North Indian kitchen with a rich, aromatic house gravy.",
      allergens: 'None',
      pairing: 'Butter naan or jeera rice',
      origin: 'New Pearl, Purnia'
    },
    {
      id: 'd096',
      name: "Murgh Kolhapuri (H) 4 pcs",
      category: 'nonveg',
      priceINR: 370,
      diet: 'non-veg',
      isChefPick: false,
      spiceLevel: 3,
      image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=800&q=80',
      description: "Murgh Kolhapuri (H) 4 pcs, simmered slow in our North Indian kitchen with a rich, aromatic house gravy.",
      allergens: 'None',
      pairing: 'Butter naan or jeera rice',
      origin: 'New Pearl, Purnia'
    },
    {
      id: 'd097',
      name: "Murgh Kashmiri",
      category: 'nonveg',
      priceINR: 325,
      diet: 'non-veg',
      isChefPick: false,
      spiceLevel: 2,
      image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=800&q=80',
      description: "Murgh Kashmiri, simmered slow in our North Indian kitchen with a rich, aromatic house gravy.",
      allergens: 'None',
      pairing: 'Butter naan or jeera rice',
      origin: 'New Pearl, Purnia'
    },
    {
      id: 'd098',
      name: "Murgh Bharta (F)",
      category: 'nonveg',
      priceINR: 590,
      diet: 'non-veg',
      isChefPick: false,
      spiceLevel: 2,
      image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80',
      description: "Murgh Bharta (F), simmered slow in our North Indian kitchen with a rich, aromatic house gravy.",
      allergens: 'None',
      pairing: 'Butter naan or jeera rice',
      origin: 'New Pearl, Purnia'
    },
    {
      id: 'd099',
      name: "Murgh Bharta (H)",
      category: 'nonveg',
      priceINR: 370,
      diet: 'non-veg',
      isChefPick: false,
      spiceLevel: 2,
      image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80',
      description: "Murgh Bharta (H), simmered slow in our North Indian kitchen with a rich, aromatic house gravy.",
      allergens: 'None',
      pairing: 'Butter naan or jeera rice',
      origin: 'New Pearl, Purnia'
    },
    {
      id: 'd100',
      name: "Murgh Chandni",
      category: 'nonveg',
      priceINR: 320,
      diet: 'non-veg',
      isChefPick: false,
      spiceLevel: 2,
      image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=800&q=80',
      description: "Murgh Chandni, simmered slow in our North Indian kitchen with a rich, aromatic house gravy.",
      allergens: 'None',
      pairing: 'Butter naan or jeera rice',
      origin: 'New Pearl, Purnia'
    },
    {
      id: 'sig-pearl',
      name: "Pearl Spl. Chicken (F)",
      category: 'nonveg',
      priceINR: 650,
      diet: 'non-veg',
      isChefPick: true,
      spiceLevel: 3,
      image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80',
      description: "Pearl Spl. Chicken (F), simmered slow in our North Indian kitchen with a rich, aromatic house gravy.",
      allergens: 'None',
      pairing: 'Butter naan or jeera rice',
      origin: 'New Pearl, Purnia'
    },
    {
      id: 'd102',
      name: "Pearl Spl. Chicken (H)",
      category: 'nonveg',
      priceINR: 395,
      diet: 'non-veg',
      isChefPick: false,
      spiceLevel: 2,
      image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80',
      description: "Pearl Spl. Chicken (H), simmered slow in our North Indian kitchen with a rich, aromatic house gravy.",
      allergens: 'None',
      pairing: 'Butter naan or jeera rice',
      origin: 'New Pearl, Purnia'
    },
    {
      id: 'd103',
      name: "Murgh Afghani",
      category: 'nonveg',
      priceINR: 360,
      diet: 'non-veg',
      isChefPick: true,
      spiceLevel: 3,
      image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80',
      description: "Murgh Afghani, simmered slow in our North Indian kitchen with a rich, aromatic house gravy.",
      allergens: 'None',
      pairing: 'Butter naan or jeera rice',
      origin: 'New Pearl, Purnia'
    },
    {
      id: 'd104',
      name: "Murgh Karahi (F) 8 pcs",
      category: 'nonveg',
      priceINR: 570,
      diet: 'non-veg',
      isChefPick: false,
      spiceLevel: 2,
      image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=800&q=80',
      description: "Murgh Karahi (F) 8 pcs, simmered slow in our North Indian kitchen with a rich, aromatic house gravy.",
      allergens: 'None',
      pairing: 'Butter naan or jeera rice',
      origin: 'New Pearl, Purnia'
    },
    {
      id: 'd105',
      name: "Murgh Karahi (H) 4 pcs",
      category: 'nonveg',
      priceINR: 360,
      diet: 'non-veg',
      isChefPick: false,
      spiceLevel: 2,
      image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=800&q=80',
      description: "Murgh Karahi (H) 4 pcs, simmered slow in our North Indian kitchen with a rich, aromatic house gravy.",
      allergens: 'None',
      pairing: 'Butter naan or jeera rice',
      origin: 'New Pearl, Purnia'
    },
    {
      id: 'd106',
      name: "Murgh Handi (F) 8 pcs",
      category: 'nonveg',
      priceINR: 590,
      diet: 'non-veg',
      isChefPick: false,
      spiceLevel: 2,
      image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=800&q=80',
      description: "Murgh Handi (F) 8 pcs, simmered slow in our North Indian kitchen with a rich, aromatic house gravy.",
      allergens: 'None',
      pairing: 'Butter naan or jeera rice',
      origin: 'New Pearl, Purnia'
    },
    {
      id: 'd107',
      name: "Murgh Handi (H) 4 pcs",
      category: 'nonveg',
      priceINR: 375,
      diet: 'non-veg',
      isChefPick: false,
      spiceLevel: 2,
      image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=800&q=80',
      description: "Murgh Handi (H) 4 pcs, simmered slow in our North Indian kitchen with a rich, aromatic house gravy.",
      allergens: 'None',
      pairing: 'Butter naan or jeera rice',
      origin: 'New Pearl, Purnia'
    },
    {
      id: 'd108',
      name: "Murgh Kassa (F) 8 pcs",
      category: 'nonveg',
      priceINR: 599,
      diet: 'non-veg',
      isChefPick: false,
      spiceLevel: 3,
      image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=800&q=80',
      description: "Murgh Kassa (F) 8 pcs, simmered slow in our North Indian kitchen with a rich, aromatic house gravy.",
      allergens: 'Dairy',
      pairing: 'Butter naan or jeera rice',
      origin: 'New Pearl, Purnia'
    },
    {
      id: 'd109',
      name: "Murgh Kassa (H) 4 pcs",
      category: 'nonveg',
      priceINR: 375,
      diet: 'non-veg',
      isChefPick: false,
      spiceLevel: 3,
      image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=800&q=80',
      description: "Murgh Kassa (H) 4 pcs, simmered slow in our North Indian kitchen with a rich, aromatic house gravy.",
      allergens: 'Dairy',
      pairing: 'Butter naan or jeera rice',
      origin: 'New Pearl, Purnia'
    },
    {
      id: 'd110',
      name: "Murgh Shabnam",
      category: 'nonveg',
      priceINR: 320,
      diet: 'non-veg',
      isChefPick: false,
      spiceLevel: 2,
      image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=800&q=80',
      description: "Murgh Shabnam, simmered slow in our North Indian kitchen with a rich, aromatic house gravy.",
      allergens: 'None',
      pairing: 'Butter naan or jeera rice',
      origin: 'New Pearl, Purnia'
    },
    {
      id: 'd111',
      name: "Chicken Laziz (8pcs BL)",
      category: 'nonveg',
      priceINR: 330,
      diet: 'non-veg',
      isChefPick: false,
      spiceLevel: 2,
      image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=800&q=80',
      description: "Chicken Laziz (8pcs BL), simmered slow in our North Indian kitchen with a rich, aromatic house gravy.",
      allergens: 'None',
      pairing: 'Butter naan or jeera rice',
      origin: 'New Pearl, Purnia'
    },
    {
      id: 'd112',
      name: "Chicken Tikka (Butter Masala)",
      category: 'nonveg',
      priceINR: 370,
      diet: 'non-veg',
      isChefPick: true,
      spiceLevel: 3,
      image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80',
      description: "Chicken Tikka (Butter Masala), simmered slow in our North Indian kitchen with a rich, aromatic house gravy.",
      allergens: 'Dairy',
      pairing: 'Butter naan or jeera rice',
      origin: 'New Pearl, Purnia'
    },
  ];

  // --------------------------------------------------------------------------
  // 2. Data Store: Restaurant Atmosphere Gallery
  // --------------------------------------------------------------------------
  const GALLERY_DATA = [
    {
      id: 'gal-1',
      title: 'The Brutalist Basalt Hearth',
      category: 'space',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80',
      caption: 'Main dining room featuring hand-carved black basalt columns and ambient architectural shadows.'
    },
    {
      id: 'gal-2',
      title: 'Tasting Plating Choreography',
      category: 'gastronomy',
      image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80',
      caption: 'Every plate is finished tableside with live embers and single-estate cold-pressed infusions.'
    },
    {
      id: 'gal-3',
      title: 'The Botanical Alchemy Bar',
      category: 'mixology',
      image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=1200&q=80',
      caption: 'Bespoke zero-waste mixology utilizing wild herbs and indigenous fermentation vessels.'
    },
    {
      id: 'gal-4',
      title: 'Open Sigri Coal Station',
      category: 'kitchen',
      image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80',
      caption: 'Our culinary team maintaining continuous 36-hour slow embers for ancestral broth reductions.'
    },
    {
      id: 'gal-5',
      title: 'The Private Sommelier Cellar',
      category: 'space',
      image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=1200&q=80',
      caption: 'Temperature-controlled reserve featuring biodynamic wines and vintage Indian estate vintages.'
    },
    {
      id: 'gal-6',
      title: 'Kashmiri Morel & Dum Aromas',
      category: 'gastronomy',
      image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=1200&q=80',
      caption: 'Clay pot sealing (Dum) preserves fragrant saffron mists until the guest releases the aroma.'
    },
    {
      id: 'gal-7',
      title: 'Architectural Evening Facade',
      category: 'space',
      image: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1200&q=80',
      caption: 'The secluded sanctuary situated among Purnia’s heritage rain tree canopy.'
    },
    {
      id: 'gal-8',
      title: 'Master Chef Finishing Technique',
      category: 'kitchen',
      image: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=1200&q=80',
      caption: 'Precision garnish with edible wild borage flowers and 24k silver leaf.'
    }
  ];

  // --------------------------------------------------------------------------
  // 3. State Management
  // --------------------------------------------------------------------------
  const state = {
    currentCategory: 'all',
    currentDiet: 'all',
    searchQuery: '',
    currency: 'INR',
    exchangeRates: {
      INR: 1,
      USD: 0.012,
      GBP: 0.0095,
      EUR: 0.011,
      AED: 0.044
    },
    currencySymbols: {
      INR: '₹',
      USD: '$',
      GBP: '£',
      EUR: '€',
      AED: 'AED '
    },
    cart: JSON.parse(localStorage.getItem('noire_cart_demo')) || [],
    galleryCategory: 'all',
    lightboxIndex: 0
  };

  // --------------------------------------------------------------------------
  // 4. Currency Formatter Helper
  // --------------------------------------------------------------------------
  function formatPrice(baseINR) {
    const rate = state.exchangeRates[state.currency] || 1;
    const symbol = state.currencySymbols[state.currency] || '₹';
    const converted = Math.round(baseINR * rate);
    
    if (state.currency === 'INR') {
      return `${symbol}${converted.toLocaleString('en-IN')}`;
    }
    return `${symbol}${converted.toLocaleString()}`;
  }

  // --------------------------------------------------------------------------
  // 5. Toast Notification Utility
  // --------------------------------------------------------------------------
  function showToast(message, icon = '✦') {
    const container = document.getElementById('toastContainer');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `
      <span style="color:var(--gold-primary);font-size:1.1rem;">${icon}</span>
      <span>${message}</span>
    `;

    container.appendChild(toast);

    setTimeout(() => {
      toast.classList.add('toast-fade-out');
      toast.addEventListener('animationend', () => toast.remove());
    }, 3200);
  }

  // --------------------------------------------------------------------------
  // 6. Menu Rendering & Filtering
  // --------------------------------------------------------------------------
  const dishesGrid = document.getElementById('dishesGrid');
  const dishCountLabel = document.getElementById('dishCountLabel');
  const menuNoResults = document.getElementById('menuNoResults');
  const menuSearchInput = document.getElementById('menuSearchInput');
  const searchClearBtn = document.getElementById('searchClearBtn');

  function renderMenu() {
    if (!dishesGrid) return;

    // Filter items
    const filtered = MENU_DATA.filter(dish => {
      // Category match
      const matchCat = state.currentCategory === 'all' || dish.category === state.currentCategory;
      
      // Diet match
      let matchDiet = true;
      if (state.currentDiet === 'veg') matchDiet = dish.diet === 'veg';
      else if (state.currentDiet === 'non-veg') matchDiet = dish.diet === 'non-veg';
      else if (state.currentDiet === 'chef-pick') matchDiet = dish.isChefPick === true;

      // Search match
      let matchSearch = true;
      if (state.searchQuery.trim() !== '') {
        const q = state.searchQuery.toLowerCase();
        matchSearch = dish.name.toLowerCase().includes(q) ||
                      dish.description.toLowerCase().includes(q) ||
                      (dish.origin && dish.origin.toLowerCase().includes(q));
      }

      return matchCat && matchDiet && matchSearch;
    });

    // Update count label
    if (dishCountLabel) {
      dishCountLabel.textContent = `Showing ${filtered.length} of ${MENU_DATA.length} culinary creations`;
    }

    // Toggle No Results View
    if (filtered.length === 0) {
      dishesGrid.innerHTML = '';
      if (menuNoResults) menuNoResults.style.display = 'block';
      return;
    } else {
      if (menuNoResults) menuNoResults.style.display = 'none';
    }

    // Render cards
    dishesGrid.innerHTML = filtered.map(dish => {
      const spiceIcons = '🌶️'.repeat(dish.spiceLevel);
      const isVeg = dish.diet === 'veg';
      
      return `
        <article class="dish-card" data-id="${dish.id}">
          <div class="dish-card-media">
            <img 
              src="${dish.image}" 
              alt="${dish.name}" 
              loading="lazy" 
              class="dish-card-img"
              onerror="this.src='https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80'"
            >
            <div class="dish-card-badge-left">
              <span class="diet-indicator-badge ${isVeg ? 'veg' : 'non-veg'}" title="${isVeg ? 'Vegetarian' : 'Non-Vegetarian'}">
                <span class="dot ${isVeg ? 'veg' : 'non-veg'}"></span>
              </span>
              ${dish.isChefPick ? '<span class="chef-pick-badge">★ Signature</span>' : ''}
            </div>
          </div>

          <div class="dish-card-body">
            <div class="dish-header-row">
              <h3 class="dish-card-title">${dish.name}</h3>
              <span class="dish-price">${formatPrice(dish.priceINR)}</span>
            </div>

            ${dish.spiceLevel > 0 ? `
              <div class="dish-spice-meter" title="Spice Intensity">
                <span class="chili-icon">${spiceIcons}</span>
                <span>${dish.spiceLevel === 1 ? 'Subtle Warmth' : dish.spiceLevel === 2 ? 'Medium Ember' : 'Rich Heat'}</span>
              </div>
            ` : ''}

            <p class="dish-card-desc">${dish.description}</p>

            <div class="dish-card-actions">
              <button class="btn-quick-view" data-dish-id="${dish.id}">Quick View</button>
              <button class="btn-add-order" data-dish-id="${dish.id}">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 5v14M5 12h14"/></svg>
                <span>Add to Order</span>
              </button>
            </div>
          </div>
        </article>
      `;
    }).join('');

    // Attach event listeners to newly generated card buttons
    dishesGrid.querySelectorAll('.btn-quick-view').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const dishId = e.currentTarget.getAttribute('data-dish-id');
        openDishModal(dishId);
      });
    });

    dishesGrid.querySelectorAll('.btn-add-order').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const dishId = e.currentTarget.getAttribute('data-dish-id');
        addToCart(dishId);
      });
    });
  }

  // Category Filter Pills
  const catPills = document.querySelectorAll('.cat-pill');
  catPills.forEach(pill => {
    pill.addEventListener('click', () => {
      catPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      state.currentCategory = pill.getAttribute('data-category');
      renderMenu();
    });
  });

  // Dietary Filter Buttons
  const dietBtns = document.querySelectorAll('.diet-btn');
  dietBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      dietBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.currentDiet = btn.getAttribute('data-diet');
      renderMenu();
    });
  });

  // Search input live filtering
  if (menuSearchInput) {
    menuSearchInput.addEventListener('input', (e) => {
      state.searchQuery = e.target.value;
      if (searchClearBtn) {
        searchClearBtn.style.display = state.searchQuery.length > 0 ? 'inline' : 'none';
      }
      renderMenu();
    });
  }

  if (searchClearBtn) {
    searchClearBtn.addEventListener('click', () => {
      if (menuSearchInput) menuSearchInput.value = '';
      state.searchQuery = '';
      searchClearBtn.style.display = 'none';
      renderMenu();
    });
  }

  const resetFiltersBtn = document.getElementById('resetFiltersBtn');
  if (resetFiltersBtn) {
    resetFiltersBtn.addEventListener('click', () => {
      state.currentCategory = 'all';
      state.currentDiet = 'all';
      state.searchQuery = '';
      if (menuSearchInput) menuSearchInput.value = '';
      if (searchClearBtn) searchClearBtn.style.display = 'none';
      
      catPills.forEach(p => p.classList.toggle('active', p.getAttribute('data-category') === 'all'));
      dietBtns.forEach(b => b.classList.toggle('active', b.getAttribute('data-diet') === 'all'));
      renderMenu();
    });
  }

  // --------------------------------------------------------------------------
  // 7. Dish Quick View Modal
  // --------------------------------------------------------------------------
  const dishModalOverlay = document.getElementById('dishModalOverlay');
  const dishModalContent = document.getElementById('dishModalContent');
  const closeDishModalBtn = document.getElementById('closeDishModalBtn');

  function openDishModal(dishId) {
    const dish = MENU_DATA.find(d => d.id === dishId);
    if (!dish || !dishModalContent || !dishModalOverlay) return;

    dishModalContent.innerHTML = `
      <div class="dish-modal-media">
        <img src="${dish.image}" alt="${dish.name}" class="dish-modal-img" onerror="this.src='https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80'">
      </div>
      <div class="dish-modal-info">
        <div class="dish-badge-row">
          <span class="veg-badge-luxury">
            <span class="dot ${dish.diet === 'veg' ? 'veg' : 'non-veg'}"></span>
            ${dish.diet === 'veg' ? 'Vegetarian Selection' : 'Non-Vegetarian Selection'}
          </span>
          <span class="dish-origin-tag">${dish.origin || 'Signature Indian Gastronomy'}</span>
        </div>

        <h3>${dish.name}</h3>
        <div class="dish-modal-price">${formatPrice(dish.priceINR)}</div>
        <p class="dish-modal-desc">${dish.description}</p>

        <div class="dish-meta-section">
          <div class="dish-meta-row">
            <strong>Allergens:</strong> ${dish.allergens || 'None detected'}
          </div>
          <div class="dish-meta-row">
            <strong>Sommelier Pairing:</strong> ${dish.pairing || 'Chef crafted botanical brew'}
          </div>
        </div>

        <button class="btn btn-primary btn-block modal-add-cart-btn" data-dish-id="${dish.id}">
          <span>Add to Order Demo</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 5v14M5 12h14"/></svg>
        </button>
      </div>
    `;

    dishModalOverlay.classList.add('open');
    dishModalOverlay.setAttribute('aria-hidden', 'false');

    // Attach cart listener inside modal
    const modalAddBtn = dishModalContent.querySelector('.modal-add-cart-btn');
    if (modalAddBtn) {
      modalAddBtn.addEventListener('click', () => {
        addToCart(dish.id);
        closeDishModal();
      });
    }
  }

  function closeDishModal() {
    if (dishModalOverlay) {
      dishModalOverlay.classList.remove('open');
      dishModalOverlay.setAttribute('aria-hidden', 'true');
    }
  }

  if (closeDishModalBtn) {
    closeDishModalBtn.addEventListener('click', closeDishModal);
  }

  if (dishModalOverlay) {
    dishModalOverlay.addEventListener('click', (e) => {
      if (e.target === dishModalOverlay) closeDishModal();
    });
  }

  // --------------------------------------------------------------------------
  // 8. Signature Dish Feature Tabs & Button
  // --------------------------------------------------------------------------
  const featureTabBtns = document.querySelectorAll('.tab-btn');
  featureTabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      featureTabBtns.forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');

      const targetTab = btn.getAttribute('data-tab');
      document.querySelectorAll('.feature-tab-content').forEach(content => {
        content.classList.toggle('active', content.id === `tab-${targetTab}`);
      });
    });
  });

  const addSignatureDishBtn = document.getElementById('addSignatureDishBtn');
  if (addSignatureDishBtn) {
    addSignatureDishBtn.addEventListener('click', () => {
      addToCart('sig-pearl'); // Pearl Spl. Chicken (Full)
    });
  }

  // --------------------------------------------------------------------------
  // 9. Cart Drawer & Order Simulator
  // --------------------------------------------------------------------------
  const cartTriggerBtn = document.getElementById('cartTriggerBtn');
  const cartDrawerOverlay = document.getElementById('cartDrawerOverlay');
  const closeCartBtn = document.getElementById('closeCartBtn');
  const cartItemsList = document.getElementById('cartItemsList');
  const cartEmptyState = document.getElementById('cartEmptyState');
  const cartDrawerFooter = document.getElementById('cartDrawerFooter');
  const cartCountBadge = document.getElementById('cartCountBadge');
  const cartItemsCount = document.getElementById('cartItemsCount');
  const cartSubtotal = document.getElementById('cartSubtotal');
  const cartTax = document.getElementById('cartTax');
  const cartTotal = document.getElementById('cartTotal');
  const clearCartBtn = document.getElementById('clearCartBtn');
  const checkoutOrderBtn = document.getElementById('checkoutOrderBtn');
  const cartExploreMenuBtn = document.getElementById('cartExploreMenuBtn');

  function saveCart() {
    localStorage.setItem('noire_cart_demo', JSON.stringify(state.cart));
    updateCartUI();
  }

  function addToCart(dishId) {
    const dish = MENU_DATA.find(d => d.id === dishId);
    if (!dish) return;

    const existing = state.cart.find(item => item.id === dishId);
    if (existing) {
      existing.quantity += 1;
    } else {
      state.cart.push({
        id: dish.id,
        name: dish.name,
        priceINR: dish.priceINR,
        image: dish.image,
        quantity: 1
      });
    }

    saveCart();
    showToast(`Added "${dish.name}" to Tasting Order`);

    // Badge bounce animation
    if (cartCountBadge) {
      cartCountBadge.style.transform = 'scale(1.4)';
      setTimeout(() => cartCountBadge.style.transform = 'scale(1)', 250);
    }
  }

  function updateQuantity(dishId, delta) {
    const item = state.cart.find(i => i.id === dishId);
    if (!item) return;

    item.quantity += delta;
    if (item.quantity <= 0) {
      state.cart = state.cart.filter(i => i.id !== dishId);
    }
    saveCart();
  }

  function removeFromCart(dishId) {
    state.cart = state.cart.filter(i => i.id !== dishId);
    saveCart();
  }

  function updateCartUI() {
    const totalItems = state.cart.reduce((sum, item) => sum + item.quantity, 0);

    // Badges
    if (cartCountBadge) cartCountBadge.textContent = totalItems;
    if (cartItemsCount) cartItemsCount.textContent = `${totalItems} ${totalItems === 1 ? 'item' : 'items'}`;

    // Calculations
    const subtotalINR = state.cart.reduce((sum, item) => sum + (item.priceINR * item.quantity), 0);
    const taxINR = Math.round(subtotalINR * 0.05); // 5% GST
    const totalINR = subtotalINR + taxINR;

    if (cartSubtotal) cartSubtotal.textContent = formatPrice(subtotalINR);
    if (cartTax) cartTax.textContent = formatPrice(taxINR);
    if (cartTotal) cartTotal.textContent = formatPrice(totalINR);

    // Empty vs Filled State
    if (state.cart.length === 0) {
      if (cartEmptyState) cartEmptyState.style.display = 'flex';
      if (cartItemsList) cartItemsList.style.display = 'none';
      if (cartDrawerFooter) cartDrawerFooter.style.display = 'none';
    } else {
      if (cartEmptyState) cartEmptyState.style.display = 'none';
      if (cartItemsList) cartItemsList.style.display = 'flex';
      if (cartDrawerFooter) cartDrawerFooter.style.display = 'block';

      if (cartItemsList) {
        cartItemsList.innerHTML = state.cart.map(item => `
          <div class="cart-item" data-id="${item.id}">
            <img src="${item.image}" alt="${item.name}" class="cart-item-img" onerror="this.src='https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=150&q=80'">
            <div class="cart-item-details">
              <div class="cart-item-title">${item.name}</div>
              <div class="cart-item-price">${formatPrice(item.priceINR)} each</div>
            </div>
            <div class="cart-item-stepper">
              <button class="stepper-btn btn-dec" data-id="${item.id}" aria-label="Decrease quantity">−</button>
              <span class="stepper-count">${item.quantity}</span>
              <button class="stepper-btn btn-inc" data-id="${item.id}" aria-label="Increase quantity">+</button>
            </div>
            <button class="cart-item-remove" data-id="${item.id}" aria-label="Remove item">&times;</button>
          </div>
        `).join('');

        // Attach listeners
        cartItemsList.querySelectorAll('.btn-dec').forEach(btn => {
          btn.addEventListener('click', () => updateQuantity(btn.dataset.id, -1));
        });
        cartItemsList.querySelectorAll('.btn-inc').forEach(btn => {
          btn.addEventListener('click', () => updateQuantity(btn.dataset.id, 1));
        });
        cartItemsList.querySelectorAll('.cart-item-remove').forEach(btn => {
          btn.addEventListener('click', () => removeFromCart(btn.dataset.id));
        });
      }
    }
  }

  function openCart() {
    if (cartDrawerOverlay) {
      cartDrawerOverlay.classList.add('open');
      cartDrawerOverlay.setAttribute('aria-hidden', 'false');
    }
  }

  function closeCart() {
    if (cartDrawerOverlay) {
      cartDrawerOverlay.classList.remove('open');
      cartDrawerOverlay.setAttribute('aria-hidden', 'true');
    }
  }

  if (cartTriggerBtn) cartTriggerBtn.addEventListener('click', openCart);
  if (closeCartBtn) closeCartBtn.addEventListener('click', closeCart);
  if (cartDrawerOverlay) {
    cartDrawerOverlay.addEventListener('click', (e) => {
      if (e.target === cartDrawerOverlay) closeCart();
    });
  }

  if (cartExploreMenuBtn) {
    cartExploreMenuBtn.addEventListener('click', () => {
      closeCart();
      const menuSec = document.getElementById('menu');
      if (menuSec) menuSec.scrollIntoView({ behavior: 'smooth' });
    });
  }

  if (clearCartBtn) {
    clearCartBtn.addEventListener('click', () => {
      if (confirm('Clear all items from your tasting order?')) {
        state.cart = [];
        saveCart();
        showToast('Tasting order cleared');
      }
    });
  }

  // --------------------------------------------------------------------------
  // 10. Mock Order Checkout Modal & Simulated Receipt
  // --------------------------------------------------------------------------
  const checkoutModalOverlay = document.getElementById('checkoutModalOverlay');
  const receiptSummaryContent = document.getElementById('receiptSummaryContent');
  const closeCheckoutModalBtn = document.getElementById('closeCheckoutModalBtn');
  const finishCheckoutBtn = document.getElementById('finishCheckoutBtn');
  const printReceiptBtn = document.getElementById('printReceiptBtn');

  if (checkoutOrderBtn) {
    checkoutOrderBtn.addEventListener('click', () => {
      if (state.cart.length === 0) return;
      closeCart();
      generateMockReceipt();
    });
  }

  function generateMockReceipt() {
    if (!receiptSummaryContent || !checkoutModalOverlay) return;

    const orderNum = 'NOIRE-ORD-' + Math.floor(100000 + Math.random() * 900000);
    const dateStr = new Date().toLocaleDateString('en-US', {
      weekday: 'short',
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
    const timeStr = new Date().toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit'
    });

    const subtotalINR = state.cart.reduce((sum, item) => sum + (item.priceINR * item.quantity), 0);
    const taxINR = Math.round(subtotalINR * 0.05);
    const totalINR = subtotalINR + taxINR;

    const selectedTypeEl = document.querySelector('input[name="orderType"]:checked');
    const orderTypeLabel = selectedTypeEl ? selectedTypeEl.value === 'dine-in' ? 'Table Service Companion' : 'Takeaway Tasting Box' : 'Table Service';

    receiptSummaryContent.innerHTML = `
      <div style="display:flex;justify-content:space-between;margin-bottom:1rem;color:var(--text-dim);font-size:0.78rem;">
        <span>TICKET: <strong>${orderNum}</strong></span>
        <span>${dateStr} • ${timeStr}</span>
      </div>

      <div style="background:rgba(255,255,255,0.03);padding:0.75rem;border-radius:6px;margin-bottom:1.25rem;border:1px solid var(--border-subtle);">
        <div style="color:var(--gold-light);font-weight:600;font-size:0.82rem;">SERVICE: ${orderTypeLabel.toUpperCase()}</div>
        <div style="color:var(--text-dim);font-size:0.76rem;margin-top:2px;">Table 14 • Hearth Section • Server: Tandoor Captain</div>
      </div>

      <div style="margin-bottom:1.5rem;">
        ${state.cart.map(item => `
          <div style="display:flex;justify-content:space-between;padding:0.35rem 0;border-bottom:1px solid rgba(255,255,255,0.04);">
            <div>
              <span style="color:var(--gold-primary);font-weight:600;margin-right:0.4rem;">${item.quantity}x</span>
              <span style="color:var(--text-ivory);">${item.name}</span>
            </div>
            <span style="color:var(--text-warm-muted);">${formatPrice(item.priceINR * item.quantity)}</span>
          </div>
        `).join('')}
      </div>

      <div style="border-top:1px dashed var(--border-gold);padding-top:0.75rem;margin-bottom:1.5rem;">
        <div style="display:flex;justify-content:space-between;font-size:0.84rem;color:var(--text-dim);margin-bottom:0.3rem;">
          <span>Subtotal</span>
          <span>${formatPrice(subtotalINR)}</span>
        </div>
        <div style="display:flex;justify-content:space-between;font-size:0.84rem;color:var(--text-dim);margin-bottom:0.5rem;">
          <span>GST (5%)</span>
          <span>${formatPrice(taxINR)}</span>
        </div>
        <div style="display:flex;justify-content:space-between;font-size:1.15rem;font-weight:700;color:var(--gold-primary);">
          <span>Total Payable</span>
          <span>${formatPrice(totalINR)}</span>
        </div>
      </div>

      <div style="text-align:center;padding:0.8rem;background:rgba(56,76,57,0.2);border-radius:6px;color:#a8d5aa;font-size:0.78rem;">
        ✓ Client Demo Order Simulated • Sent to Hearthside Kitchen Display
      </div>
    `;

    checkoutModalOverlay.classList.add('open');
    checkoutModalOverlay.setAttribute('aria-hidden', 'false');
  }

  function closeCheckoutModal() {
    if (checkoutModalOverlay) {
      checkoutModalOverlay.classList.remove('open');
      checkoutModalOverlay.setAttribute('aria-hidden', 'true');
    }
  }

  if (closeCheckoutModalBtn) closeCheckoutModalBtn.addEventListener('click', closeCheckoutModal);
  if (finishCheckoutBtn) finishCheckoutBtn.addEventListener('click', closeCheckoutModal);
  if (printReceiptBtn) {
    printReceiptBtn.addEventListener('click', () => {
      window.print();
    });
  }

  // --------------------------------------------------------------------------
  // 11. Gallery Grid & Lightbox
  // --------------------------------------------------------------------------
  const galleryGrid = document.getElementById('galleryGrid');
  const galleryPills = document.querySelectorAll('.gallery-pill');
  const lightboxOverlay = document.getElementById('lightboxOverlay');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxCaption = document.getElementById('lightboxCaption');
  const closeLightboxBtn = document.getElementById('closeLightboxBtn');
  const lightboxPrevBtn = document.getElementById('lightboxPrevBtn');
  const lightboxNextBtn = document.getElementById('lightboxNextBtn');

  function renderGallery() {
    if (!galleryGrid) return;

    const filtered = GALLERY_DATA.filter(item => {
      return state.galleryCategory === 'all' || item.category === state.galleryCategory;
    });

    galleryGrid.innerHTML = filtered.map((item, idx) => `
      <div class="gallery-item ${idx === 0 || idx === 3 ? 'span-2' : ''}" data-index="${idx}">
        <img 
          src="${item.image}" 
          alt="${item.title}" 
          loading="lazy" 
          class="gallery-item-img"
          onerror="this.src='https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80'"
        >
        <div class="gallery-item-overlay">
          <span class="gallery-item-tag">${item.category}</span>
          <h4 class="gallery-item-title">${item.title}</h4>
        </div>
      </div>
    `).join('');

    galleryGrid.querySelectorAll('.gallery-item').forEach(itemEl => {
      itemEl.addEventListener('click', () => {
        const idx = parseInt(itemEl.dataset.index, 10);
        openLightbox(idx, filtered);
      });
    });
  }

  galleryPills.forEach(pill => {
    pill.addEventListener('click', () => {
      galleryPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      state.galleryCategory = pill.dataset.galleryCat;
      renderGallery();
    });
  });

  let currentActiveGallery = GALLERY_DATA;

  function openLightbox(index, list = GALLERY_DATA) {
    currentActiveGallery = list;
    state.lightboxIndex = index;
    updateLightbox();
    if (lightboxOverlay) {
      lightboxOverlay.classList.add('open');
      lightboxOverlay.setAttribute('aria-hidden', 'false');
    }
  }

  function updateLightbox() {
    const item = currentActiveGallery[state.lightboxIndex];
    if (!item) return;

    if (lightboxImg) {
      lightboxImg.src = item.image;
      lightboxImg.alt = item.title;
    }
    if (lightboxCaption) {
      lightboxCaption.innerHTML = `<strong>${item.title}</strong> — ${item.caption}`;
    }
  }

  function nextLightbox() {
    state.lightboxIndex = (state.lightboxIndex + 1) % currentActiveGallery.length;
    updateLightbox();
  }

  function prevLightbox() {
    state.lightboxIndex = (state.lightboxIndex - 1 + currentActiveGallery.length) % currentActiveGallery.length;
    updateLightbox();
  }

  function closeLightbox() {
    if (lightboxOverlay) {
      lightboxOverlay.classList.remove('open');
      lightboxOverlay.setAttribute('aria-hidden', 'true');
    }
  }

  if (closeLightboxBtn) closeLightboxBtn.addEventListener('click', closeLightbox);
  if (lightboxNextBtn) lightboxNextBtn.addEventListener('click', nextLightbox);
  if (lightboxPrevBtn) lightboxPrevBtn.addEventListener('click', prevLightbox);
  if (lightboxOverlay) {
    lightboxOverlay.addEventListener('click', (e) => {
      if (e.target === lightboxOverlay) closeLightbox();
    });
  }

  // Keyboard navigation for Lightbox & Modals
  window.addEventListener('keydown', (e) => {
    if (lightboxOverlay && lightboxOverlay.classList.contains('open')) {
      if (e.key === 'ArrowRight') nextLightbox();
      if (e.key === 'ArrowLeft') prevLightbox();
      if (e.key === 'Escape') closeLightbox();
    } else if (dishModalOverlay && dishModalOverlay.classList.contains('open') && e.key === 'Escape') {
      closeDishModal();
    } else if (cartDrawerOverlay && cartDrawerOverlay.classList.contains('open') && e.key === 'Escape') {
      closeCart();
    }
  });

  // --------------------------------------------------------------------------
  // 12. Interactive Table Reservation Engine
  // --------------------------------------------------------------------------
  const reservationForm = document.getElementById('reservationForm');
  const resDateInput = document.getElementById('resDate');
  const timeSlotsContainer = document.getElementById('timeSlotsContainer');
  const selectedTimeSlotInput = document.getElementById('selectedTimeSlot');
  const slotAvailabilityHint = document.getElementById('slotAvailabilityHint');
  const reservationModalOverlay = document.getElementById('reservationModalOverlay');
  const reservationTicketSummary = document.getElementById('reservationTicketSummary');
  const closeReservationModalBtn = document.getElementById('closeReservationModalBtn');
  const doneReservationBtn = document.getElementById('doneReservationBtn');
  const downloadDemoTicketBtn = document.getElementById('downloadDemoTicketBtn');

  // Preset Date to Tomorrow
  if (resDateInput) {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const yyyy = tomorrow.getFullYear();
    const mm = String(tomorrow.getMonth() + 1).padStart(2, '0');
    const dd = String(tomorrow.getDate()).padStart(2, '0');
    resDateInput.value = `${yyyy}-${mm}-${dd}`;
    resDateInput.min = `${yyyy}-${mm}-${dd}`;
  }

  // Render Time Slots
  const TIME_SLOTS = [
    { time: '12:30 PM', val: '12:30', service: 'Lunch', status: 'Available' },
    { time: '1:15 PM',  val: '13:15', service: 'Lunch', status: 'Available' },
    { time: '2:00 PM',  val: '14:00', service: 'Lunch', status: 'Few tables' },
    { time: '7:00 PM',  val: '19:00', service: 'Dinner', status: 'Few tables' },
    { time: '7:30 PM',  val: '19:30', service: 'Dinner', status: 'Popular', isDefault: true },
    { time: '8:15 PM',  val: '20:15', service: 'Dinner', status: 'Popular' },
    { time: '9:00 PM',  val: '21:00', service: 'Dinner', status: 'Available' },
    { time: '9:45 PM',  val: '21:45', service: 'Dinner', status: 'Available' }
  ];

  function renderTimeSlots() {
    if (!timeSlotsContainer) return;

    timeSlotsContainer.innerHTML = TIME_SLOTS.map(slot => `
      <button 
        type="button" 
        class="slot-btn ${slot.isDefault ? 'selected' : ''}" 
        data-val="${slot.val}"
        data-label="${slot.time} (${slot.service})"
      >
        <span>${slot.time}</span>
        <span class="slot-meta">${slot.status}</span>
      </button>
    `).join('');

    timeSlotsContainer.querySelectorAll('.slot-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        timeSlotsContainer.querySelectorAll('.slot-btn').forEach(b => b.classList.remove('selected'));
        btn.classList.add('selected');
        if (selectedTimeSlotInput) selectedTimeSlotInput.value = btn.dataset.val;
        if (slotAvailabilityHint) slotAvailabilityHint.textContent = `Selected: ${btn.dataset.label}`;
      });
    });
  }

  // Reservation Form Submission
  if (reservationForm) {
    reservationForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('resName').value.trim();
      const phone = document.getElementById('resPhone').value.trim();
      const email = document.getElementById('resEmail').value.trim();
      const guests = document.getElementById('resGuests').value;
      const date = resDateInput ? resDateInput.value : '';
      const seating = document.querySelector('input[name="seating"]:checked')?.value || 'Main Dining Room';
      const slotBtn = timeSlotsContainer?.querySelector('.slot-btn.selected');
      const timeSlotText = slotBtn ? slotBtn.dataset.label : '7:30 PM (Dinner Service)';
      const requests = document.getElementById('resRequests')?.value.trim() || 'No dietary restrictions noted';

      if (!name || !phone || !email || !date) {
        alert('Please provide your name, phone number, email address, and select a dining date.');
        return;
      }

      // Generate Reference Code
      const refCode = 'NOIRE-RSV-' + Math.floor(1000 + Math.random() * 9000);

      // Render Confirmation Ticket Card
      if (reservationTicketSummary) {
        reservationTicketSummary.innerHTML = `
          <div class="ticket-row">
            <span class="ticket-label">Confirmation Code</span>
            <span class="ticket-val" style="color:var(--gold-primary);font-family:monospace;font-size:1.05rem;">${refCode}</span>
          </div>
          <div class="ticket-row">
            <span class="ticket-label">Primary Guest</span>
            <span class="ticket-val">${name}</span>
          </div>
          <div class="ticket-row">
            <span class="ticket-label">Table Party</span>
            <span class="ticket-val">${guests} ${guests === '1' ? 'Guest' : 'Guests'}</span>
          </div>
          <div class="ticket-row">
            <span class="ticket-label">Date &amp; Seating</span>
            <span class="ticket-val">${date} at ${timeSlotText}</span>
          </div>
          <div class="ticket-row">
            <span class="ticket-label">Atmosphere Zone</span>
            <span class="ticket-val">${seating}</span>
          </div>
          <div class="ticket-row">
            <span class="ticket-label">Special Inquiries</span>
            <span class="ticket-val" style="max-width:240px;text-align:right;">${requests}</span>
          </div>
        `;
      }

      if (reservationModalOverlay) {
        reservationModalOverlay.classList.add('open');
        reservationModalOverlay.setAttribute('aria-hidden', 'false');
      }

      showToast(`Reservation Confirmed for ${name}!`, '✓');
    });
  }

  function closeReservationModal() {
    if (reservationModalOverlay) {
      reservationModalOverlay.classList.remove('open');
      reservationModalOverlay.setAttribute('aria-hidden', 'true');
    }
  }

  if (closeReservationModalBtn) closeReservationModalBtn.addEventListener('click', closeReservationModal);
  if (doneReservationBtn) doneReservationBtn.addEventListener('click', closeReservationModal);
  if (reservationModalOverlay) {
    reservationModalOverlay.addEventListener('click', (e) => {
      if (e.target === reservationModalOverlay) closeReservationModal();
    });
  }

  // Simulated .ICS Calendar Download
  if (downloadDemoTicketBtn) {
    downloadDemoTicketBtn.addEventListener('click', () => {
      const icsData = [
        'BEGIN:VCALENDAR',
        'VERSION:2.0',
        'PRODID:-//NOIRE Restaurant//Table Booking Demo//EN',
        'BEGIN:VEVENT',
        'SUMMARY:Dinner at NEW PEARL Contemporary Indian',
        'DESCRIPTION:Table reservation demo at NEW PEARL - Opposite Ford Co, PWD Colony, Purnia.',
        'LOCATION:Opposite Ford Co, PWD Colony, Purnia, Bihar 854301',
        'STATUS:CONFIRMED',
        'END:VEVENT',
        'END:VCALENDAR'
      ].join('\r\n');

      const blob = new Blob([icsData], { type: 'text/calendar;charset=utf-8' });
      const link = document.createElement('a');
      link.href = window.URL.createObjectURL(blob);
      link.setAttribute('download', 'noire-reservation-pass.ics');
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      showToast('Simulated Calendar Pass (.ICS) Downloaded', '📅');
    });
  }

  // --------------------------------------------------------------------------
  // 13. Live Restaurant Hours & Status Calculator
  // --------------------------------------------------------------------------
  function updateOperatingStatus() {
    const headerStatusText = document.getElementById('headerStatusText');
    const headerStatusPill = document.getElementById('headerStatusPill');
    if (!headerStatusText) return;

    const now = new Date();
    const currentHour = now.getHours();
    const currentDay = now.getDay(); // 0 = Sunday, 1 = Monday, etc.

    if (false) {
      // Monday Closed
      headerStatusText.textContent = 'Kitchen Open • 11 AM – 11 PM';
      if (headerStatusPill) headerStatusPill.querySelector('.status-dot').style.background = '#e53935';
    } else if (currentHour >= 11 && currentHour < 23) {
      // Open
      headerStatusText.textContent = 'Kitchen Open • 11 AM – 11 PM';
      if (headerStatusPill) headerStatusPill.querySelector('.status-dot').style.background = '#4caf50';
    } else {
      // Closed for the night
      headerStatusText.textContent = 'Opens Today at 11:00 AM';
      if (headerStatusPill) headerStatusPill.querySelector('.status-dot').style.background = '#ffa000';
    }
  }

  // --------------------------------------------------------------------------
  // 14. Mobile Navigation Drawer Controller
  // --------------------------------------------------------------------------
  const mobileMenuToggle = document.getElementById('mobileMenuToggle');
  const mobileDrawer = document.getElementById('mobileDrawer');
  const mobileDrawerClose = document.getElementById('mobileDrawerClose');
  const mobileDrawerBackdrop = document.getElementById('mobileDrawerBackdrop');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link, .mobile-reserve-btn');

  function openMobileDrawer() {
    if (mobileDrawer) {
      mobileDrawer.classList.add('open');
      mobileDrawer.setAttribute('aria-hidden', 'false');
      if (mobileMenuToggle) mobileMenuToggle.setAttribute('aria-expanded', 'true');
    }
  }

  function closeMobileDrawer() {
    if (mobileDrawer) {
      mobileDrawer.classList.remove('open');
      mobileDrawer.setAttribute('aria-hidden', 'true');
      if (mobileMenuToggle) mobileMenuToggle.setAttribute('aria-expanded', 'false');
    }
  }

  if (mobileMenuToggle) mobileMenuToggle.addEventListener('click', openMobileDrawer);
  if (mobileDrawerClose) mobileDrawerClose.addEventListener('click', closeMobileDrawer);
  if (mobileDrawerBackdrop) mobileDrawerBackdrop.addEventListener('click', closeMobileDrawer);
  mobileNavLinks.forEach(link => link.addEventListener('click', closeMobileDrawer));

  // --------------------------------------------------------------------------
  // 15. Header Scroll Effect & Active Section Spy
  // --------------------------------------------------------------------------
  const siteHeader = document.getElementById('siteHeader');
  const navLinks = document.querySelectorAll('.desktop-nav .nav-link');
  const sections = document.querySelectorAll('section[id]');

  window.addEventListener('scroll', () => {
    if (siteHeader) {
      if (window.scrollY > 50) {
        siteHeader.classList.add('scrolled');
      } else {
        siteHeader.classList.remove('scrolled');
      }
    }

    // Scroll spy
    let currentId = '';
    const scrollPos = window.scrollY + 120;

    sections.forEach(sec => {
      const top = sec.offsetTop;
      const height = sec.offsetHeight;
      if (scrollPos >= top && scrollPos < top + height) {
        currentId = sec.getAttribute('id');
      }
    });

    if (currentId) {
      navLinks.forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === `#${currentId}`);
      });
    }
  }, { passive: true });

  // --------------------------------------------------------------------------
  // 16. Agency Pitch Mode & Customizer Controller
  // --------------------------------------------------------------------------
  const agencyBar = document.getElementById('agencyBar');
  const closeAgencyBarBtn = document.getElementById('closeAgencyBarBtn');
  const openPitchModalBtn = document.getElementById('openPitchModalBtn');
  const footerAgencyPitchBtn = document.getElementById('footerAgencyPitchBtn');
  const viewPitchModalLink = document.getElementById('viewPitchModalLink');
  const pitchModalOverlay = document.getElementById('pitchModalOverlay');
  const closePitchModalBtn = document.getElementById('closePitchModalBtn');
  const currencySelect = document.getElementById('currencySelect');
  const themePickBtns = document.querySelectorAll('.theme-pick-btn');
  const agencyContactForm = document.getElementById('agencyContactForm');
  const agencyFormFeedback = document.getElementById('agencyFormFeedback');

  if (closeAgencyBarBtn && agencyBar) {
    closeAgencyBarBtn.addEventListener('click', () => {
      agencyBar.classList.add('collapsed');
      showToast('Agency banner dismissed. Re-open via Footer "Agency Pitch Deck" link.');
    });
  }

  function openPitchModal() {
    if (pitchModalOverlay) {
      pitchModalOverlay.classList.add('open');
      pitchModalOverlay.setAttribute('aria-hidden', 'false');
    }
  }

  function closePitchModal() {
    if (pitchModalOverlay) {
      pitchModalOverlay.classList.remove('open');
      pitchModalOverlay.setAttribute('aria-hidden', 'true');
    }
  }

  if (openPitchModalBtn) openPitchModalBtn.addEventListener('click', openPitchModal);
  if (footerAgencyPitchBtn) footerAgencyPitchBtn.addEventListener('click', openPitchModal);
  if (viewPitchModalLink) {
    viewPitchModalLink.addEventListener('click', (e) => {
      e.preventDefault();
      openPitchModal();
    });
  }
  if (closePitchModalBtn) closePitchModalBtn.addEventListener('click', closePitchModal);
  if (pitchModalOverlay) {
    pitchModalOverlay.addEventListener('click', (e) => {
      if (e.target === pitchModalOverlay) closePitchModal();
    });
  }

  // Currency Switcher
  if (currencySelect) {
    currencySelect.addEventListener('change', (e) => {
      state.currency = e.target.value;
      renderMenu();
      updateCartUI();

      // Also update signature price
      const sigPriceVal = document.querySelector('.signature-price-display .price-val');
      const sigCurrencySymbol = document.querySelector('.signature-price-display .currency-symbol');
      if (sigPriceVal && sigCurrencySymbol) {
        const base = parseInt(sigPriceVal.dataset.basePrice, 10) || 950;
        const rate = state.exchangeRates[state.currency] || 1;
        const symbol = state.currencySymbols[state.currency] || '₹';
        sigCurrencySymbol.textContent = symbol;
        sigPriceVal.textContent = Math.round(base * rate);
      }

      showToast(`Currency changed to ${state.currency} (${state.currencySymbols[state.currency]})`);
    });
  }

  // Theme Accent Switcher (Olive, Gold, Terracotta)
  themePickBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      themePickBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const theme = btn.dataset.theme;
      document.body.setAttribute('data-theme-accent', theme);
      showToast(`Switched theme accent to: ${theme.toUpperCase()}`);
    });
  });

  // Agency Lead Contact Form
  if (agencyContactForm) {
    agencyContactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const clientName = document.getElementById('agencyClientName')?.value.trim();
      const restName = document.getElementById('agencyRestaurantName')?.value.trim();

      if (agencyFormFeedback) {
        agencyFormFeedback.textContent = `Thank you, ${clientName}! Proposal request for "${restName}" has been logged in Agency Demo Mode. Our student agency team will reach out within 24 hours.`;
        agencyFormFeedback.style.display = 'block';
      }

      showToast('Proposal request demo logged!', '★');
      agencyContactForm.reset();
    });
  }

  // --------------------------------------------------------------------------
  // 17. Initial Boot
  // --------------------------------------------------------------------------
  renderMenu();
  renderGallery();
  renderTimeSlots();
  updateOperatingStatus();
  updateCartUI();

  // Periodic hours check
  setInterval(updateOperatingStatus, 60000);
};

