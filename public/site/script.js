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
      id: 'pop-01',
      name: 'Chicken Lollipop',
      category: 'starters',
      priceINR: 260,
      diet: 'non-veg',
      isChefPick: true,
      spiceLevel: 3,
      image: 'https://images.unsplash.com/photo-1567620832903-9fc6debc209f?auto=format&fit=crop&w=800&q=80',
      description: 'Our most-ordered plate. Frenched chicken winglets marinated in ginger, garlic and red chilli, fried crisp and tossed in a house schezwan glaze.',
      allergens: 'Soy, Gluten',
      pairing: 'Chilled lime soda or draught lager',
      origin: 'House favourite at New Pearl, Purnia'
    },
    {
      id: 'pop-02',
      name: 'Chicken Tikka Butter Masala (6 pcs)',
      category: 'mains',
      priceINR: 380,
      diet: 'non-veg',
      isChefPick: true,
      spiceLevel: 2,
      image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=800&q=80',
      description: 'Tandoor-charred chicken tikka simmered in a silky tomato, cashew and butter gravy, finished with cream and crushed fenugreek.',
      allergens: 'Dairy, Nuts',
      pairing: 'Butter naan or jeera rice',
      origin: 'North Indian classic, Purnia style'
    },
    // Starters / Small Plates
    {
      id: 'str-01',
      name: 'Truffle & Burrata Warqi Kulcha',
      category: 'starters',
      priceINR: 620,
      diet: 'veg',
      isChefPick: true,
      spiceLevel: 1,
      image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80',
      description: 'Flaky woodfire flatbread stuffed with fresh artisanal burrata, drizzled with Kashmiri winter truffle honey and crushed pink peppercorns.',
      allergens: 'Dairy, Gluten',
      pairing: 'Sparkling Rosé or Kokum Elixir',
      origin: 'Modern adaptation of Old Delhi tandoor breads'
    },
    {
      id: 'str-02',
      name: 'Charred Pahadi Morel & Apricot Kebab',
      category: 'starters',
      priceINR: 780,
      diet: 'veg',
      isChefPick: true,
      spiceLevel: 2,
      image: 'https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=800&q=80',
      description: 'Himalayan wild morels stuffed with dried apricot paste and smoked chhena, seared over babool charcoal embers.',
      allergens: 'Dairy, Nuts',
      pairing: 'Light Oak Pinot Noir',
      origin: 'Kumaon & Kashmir foothills'
    },
    {
      id: 'str-03',
      name: 'Bhatti Smoked Wild Salmon Tikka',
      category: 'starters',
      priceINR: 890,
      diet: 'non-veg',
      isChefPick: false,
      spiceLevel: 2,
      image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=800&q=80',
      description: 'Line-caught salmon steeped in cold-pressed mustard oil, ajwain seeds, and roasted yellow chili powder, smoked in our clay tandoor.',
      allergens: 'Fish, Mustard',
      pairing: 'Crisp Dry Riesling',
      origin: 'Punjab clay hearth tradition'
    },
    {
      id: 'str-04',
      name: 'Pulled Duck Chettinad Tartlets',
      category: 'starters',
      priceINR: 740,
      diet: 'non-veg',
      isChefPick: true,
      spiceLevel: 3,
      image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80',
      description: 'Slow-braised duck leg in 18-spice roasted Chettinad masala, served over crispy curry leaf and ragi tart shells with shallot relish.',
      allergens: 'Gluten',
      pairing: 'Smoked Tamarind Bourbon',
      origin: 'Karaikudi, Tamil Nadu'
    },
    {
      id: 'str-05',
      name: 'Jackfruit & Raw Mango Carpaccio',
      category: 'starters',
      priceINR: 560,
      diet: 'veg',
      isChefPick: false,
      spiceLevel: 1,
      image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80',
      description: 'Razor-thin tender jackfruit cured in Gondhoraj lime juice, tempered curry leaves, roasted mustard pearls, and lotus stem crisps.',
      allergens: 'None',
      pairing: 'Botanical Marigold Spritz',
      origin: 'Coastal Konkan'
    },
    {
      id: 'str-06',
      name: 'Sigri-Fired Kasundi Jumbo Prawns',
      category: 'starters',
      priceINR: 850,
      diet: 'non-veg',
      isChefPick: false,
      spiceLevel: 2,
      image: 'https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&w=800&q=80',
      description: 'Bay of Bengal tiger prawns brushed with fermented artisanal kasundi mustard, crushed green chilies, and smoked raw banana chips.',
      allergens: 'Crustaceans, Mustard',
      pairing: 'Chilled Chenin Blanc',
      origin: 'Bengal delta estuaries'
    },

    // Main Courses
    {
      id: 'main-01',
      name: '24-Hour Smoked Dal Moradabadi',
      category: 'mains',
      priceINR: 950,
      diet: 'veg',
      isChefPick: true,
      spiceLevel: 1,
      image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=800&q=80',
      description: 'Heirloom yellow moong lentils simmered over dying teak embers for twenty-four continuous hours with raw mango reduction and churned A2 butter.',
      allergens: 'Dairy',
      pairing: 'Sula Dindori Reserve Viognier',
      origin: 'Royal Moradabad & Awadh'
    },
    {
      id: 'main-02',
      name: 'Nalli Nihari Osso Buco',
      category: 'mains',
      priceINR: 1250,
      diet: 'non-veg',
      isChefPick: true,
      spiceLevel: 3,
      image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80',
      description: 'Eight-hour slow-cooked baby lamb shank with bone marrow jus, rose petal powder, long pepper (pippali), and fresh ginger juliennes.',
      allergens: 'Gluten',
      pairing: 'Full-bodied Syrah / Shiraz',
      origin: 'Old Delhi Walled City'
    },
    {
      id: 'main-03',
      name: 'Smoked Paneer Mille-Feuille',
      category: 'mains',
      priceINR: 790,
      diet: 'veg',
      isChefPick: false,
      spiceLevel: 2,
      image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=800&q=80',
      description: 'Compressed layers of artisanal house-churned cottage cheese, forest morels, and fenugreek emulsion in a velvety charred tomato velouté.',
      allergens: 'Dairy, Nuts',
      pairing: 'Oaked Chardonnay',
      origin: 'Contemporary North Indian'
    },
    {
      id: 'main-04',
      name: 'Kundan Qaliya Braised Lamb',
      category: 'mains',
      priceINR: 1320,
      diet: 'non-veg',
      isChefPick: false,
      spiceLevel: 2,
      image: 'https://images.unsplash.com/photo-1545247181-516773cae754?auto=format&fit=crop&w=800&q=80',
      description: 'Tender mountain mutton braised with Kashmiri saffron, yellow chili cream, fragrant mace, and finished with 24k edible silver leaf.',
      allergens: 'Dairy, Nuts',
      pairing: 'Mature Bordeaux Blend',
      origin: 'Lucknowi Dastarkhwan'
    },
    {
      id: 'main-05',
      name: 'Coastal Kokum Sea Bass',
      category: 'mains',
      priceINR: 1180,
      diet: 'non-veg',
      isChefPick: true,
      spiceLevel: 2,
      image: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=800&q=80',
      description: 'Pan-seared Chilean sea bass bathed in a clarified coconut-kokum reduction, tempered black mustard, and toasted coastal curry oil.',
      allergens: 'Fish',
      pairing: 'Sauvignon Blanc or Kokum Spritz',
      origin: 'Malabar & Mangalorean coast'
    },
    {
      id: 'main-06',
      name: 'Tandoori Portobello & Edamame Khichdi',
      category: 'mains',
      priceINR: 750,
      diet: 'veg',
      isChefPick: false,
      spiceLevel: 1,
      image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80',
      description: 'Ancient grain Govindobhog rice slow cooked with green mung and edamame, crowned with tandoori charcoal portobello mushroom and truffle ghee.',
      allergens: 'Dairy, Soy',
      pairing: 'Earthy Pinot Noir',
      origin: 'Bengal heritage comfort'
    },

    // Breads & Rice
    {
      id: 'brd-01',
      name: 'Kashmiri Morel Dum Biryani',
      category: 'breads',
      priceINR: 980,
      diet: 'veg',
      isChefPick: true,
      spiceLevel: 2,
      image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80',
      description: 'Aged basmati rice sealed in a clay pot with foraged Himalayan morels, saffron milk, mint, and caramelized silver onions.',
      allergens: 'Dairy',
      pairing: 'Cucumber & Burnt Cumin Raita',
      origin: 'Kashmiri Valley Dum Craft'
    },
    {
      id: 'brd-02',
      name: 'Awadhi Gosht Parda Biryani',
      category: 'breads',
      priceINR: 1150,
      diet: 'non-veg',
      isChefPick: false,
      spiceLevel: 2,
      image: 'https://images.unsplash.com/photo-1633945274405-b6c8069047b0?auto=format&fit=crop&w=800&q=80',
      description: 'Succulent goat cuts layered with long-grain rice, sealed under a flaky puff-pastry dome (parda) to trap every wisp of royal aroma.',
      allergens: 'Dairy, Gluten',
      pairing: 'Burani Garlic Raita',
      origin: 'Oudh Royal Court'
    },
    {
      id: 'brd-03',
      name: 'Wild Chive & Garlic Warqi Paratha',
      category: 'breads',
      priceINR: 240,
      diet: 'veg',
      isChefPick: false,
      spiceLevel: 1,
      image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80',
      description: 'Laminated whole wheat paratha layered with roasted garlic butter, wild Himalayan chives, and carom seeds.',
      allergens: 'Gluten, Dairy',
      pairing: 'Ideal with Dal Moradabadi',
      origin: 'Northern Hearth Tradition'
    },
    {
      id: 'brd-04',
      name: 'Saffron Sheermal with Gold Leaf',
      category: 'breads',
      priceINR: 280,
      diet: 'veg',
      isChefPick: false,
      spiceLevel: 0,
      image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80',
      description: 'Delicately sweet, saffron-kneaded milk bread baked in an iron tandoor and finished with clarified ghee and edible silver shimmer.',
      allergens: 'Gluten, Dairy',
      pairing: 'Ideal with Nalli Nihari',
      origin: 'Mughlai & Persian fusion'
    },

    // Desserts
    {
      id: 'des-01',
      name: 'Smoked Jaggery & Dark Cocoa Mysore Pak',
      category: 'desserts',
      priceINR: 520,
      diet: 'veg',
      isChefPick: true,
      spiceLevel: 0,
      image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=800&q=80',
      description: 'Deconstructed 70% Single-Estate Kerala chocolate ganache, warm melting ghee Mysore Pak crumbs, and salted smoked jaggery caramel.',
      allergens: 'Dairy',
      pairing: 'Aged Single Malt or Espresso',
      origin: 'Mysore Palace Modernized'
    },
    {
      id: 'des-02',
      name: 'Saffron & Rose Pistachio Sphere',
      category: 'desserts',
      priceINR: 480,
      diet: 'veg',
      isChefPick: false,
      spiceLevel: 0,
      image: 'https://images.unsplash.com/photo-1579954115545-a95591f28bfc?auto=format&fit=crop&w=800&q=80',
      description: 'Frozen artisan kulfi sphere encased in white chocolate velvet, rose petal gelée, and caramelized Iranian pistachios.',
      allergens: 'Dairy, Nuts',
      pairing: 'Dessert Tokaji Wine',
      origin: 'Delhi Darbar Delicacy'
    },
    {
      id: 'des-03',
      name: 'Fennel Malpua Crisp with Rabri Cream',
      category: 'desserts',
      priceINR: 510,
      diet: 'veg',
      isChefPick: false,
      spiceLevel: 0,
      image: 'https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&w=800&q=80',
      description: 'Golden lace-crisped wild fennel malpua served with aerated clotted buffalo milk rabri, candied ginger, and saffron syrup.',
      allergens: 'Gluten, Dairy',
      pairing: 'Chilled Sweet Kahwa',
      origin: 'Pushkar & Benares Ghats'
    },

    // Botanical Beverages & Mixology
    {
      id: 'bev-01',
      name: 'Smoked Kokum & Vetiver Old Fashioned',
      category: 'beverages',
      priceINR: 680,
      diet: 'veg',
      isChefPick: true,
      spiceLevel: 1,
      image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=800&q=80',
      description: 'Subcontinental oak-aged spirit infused with wild Konkan kokum, vetiver root (khus) distillate, and Himalayan honey smoked over sal embers.',
      allergens: 'None',
      pairing: 'Signature Dish Companion',
      origin: 'NEW PEARL Botanical Laboratory'
    },
    {
      id: 'bev-02',
      name: 'Himalayan Juniper & Marigold Spritz',
      category: 'beverages',
      priceINR: 620,
      diet: 'veg',
      isChefPick: false,
      spiceLevel: 0,
      image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=800&q=80',
      description: 'Small-batch craft gin infused with wild juniper berries, marigold tincture, elderflower tonic, and a fresh sprig of charred rosemary.',
      allergens: 'None',
      pairing: 'Ideal Aperitif',
      origin: 'Uttarakhand Foraging'
    },
    {
      id: 'bev-03',
      name: 'Clarified Kahwa & Saffron Elixir',
      category: 'beverages',
      priceINR: 540,
      diet: 'veg',
      isChefPick: false,
      spiceLevel: 1,
      image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=800&q=80',
      description: 'Milk-clarified green tea infused with cinnamon bark, crushed green cardamoms, toasted almond syrup, and Pampore saffron essence (Non-alcoholic available).',
      allergens: 'Nuts',
      pairing: 'Any course / Digestif',
      origin: 'Kashmir Valley'
    }
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
      addToCart('main-01'); // 24-Hour Smoked Dal Moradabadi
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

