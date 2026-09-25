export const states = [
  {
    id: 1,
    name: 'Karnataka',
    slug: 'karnataka',
    description: 'Known for Mysore Pak, dosas, rice-based meals and rich South Indian flavours.',
    image: '/images/mysore-pak.jpg'
  },
  {
    id: 2,
    name: 'Kerala',
    slug: 'kerala',
    description: 'Famous for coconut-based dishes, appam, stew, and fresh seafood traditions.',
    image: '/images/masala-dosa.jpg'
  },
  {
    id: 3,
    name: 'Tamil Nadu',
    slug: 'tamil-nadu',
    description: 'A treasure of idlis, dosas, sambar, and vibrant temple-style vegetarian food.',
    image: '/images/bisi-bele-bath.jpg'
  },
  {
    id: 4,
    name: 'Punjab',
    slug: 'punjab',
    description: 'Rich in butter, breads, Punjabi curries, and comforting home-style meals.',
    image: '/images/mysore-pak.jpg'
  },
  {
    id: 5,
    name: 'Rajasthan',
    slug: 'rajasthan',
    description: 'Brings together spicy curries, dal, bajra breads, and sweet treats.',
    image: '/images/masala-dosa.jpg'
  },
  {
    id: 6,
    name: 'Gujarat',
    slug: 'gujarat',
    description: 'A mix of sweet snacks, farsan, khichdi, and vibrant vegetarian classics.',
    image: '/images/bisi-bele-bath.jpg'
  }
];

export const dishes = [
  {
    id: 1,
    name: 'Mysore Pak',
    state: 'Karnataka',
    description: 'A rich, ghee-laden sweet famous for its melt-in-the-mouth texture and classic Mysuru flavour.',
    image: '/images/mysore-pak.jpg',
    slug: 'mysore-pak'
  },
  {
    id: 2,
    name: 'Masala Dosa',
    state: 'Karnataka',
    description: 'A crisp dosa filled with spiced potato masala and served with chutneys and sambar.',
    image: '/images/masala-dosa.jpg',
    slug: 'masala-dosa'
  },
  {
    id: 3,
    name: 'Bisi Bele Bath',
    state: 'Karnataka',
    description: 'A one-pot rice dish cooked with lentils, vegetables, spice powders and a touch of ghee.',
    image: '/images/bisi-bele-bath.jpg',
    slug: 'bisi-bele-bath'
  },
  {
    id: 4,
    name: 'Appam',
    state: 'Kerala',
    description: 'Soft, lace-like rice pancakes often paired with coconut-based curries and stew.',
    image: '/images/bisi-bele-bath.jpg',
    slug: 'appam'
  },
  {
    id: 5,
    name: 'Dal Baati Churma',
    state: 'Rajasthan',
    description: 'A traditional Rajasthani meal of baked wheat balls, lentils and a sweet crumbled mixture.',
    image: '/images/mysore-pak.jpg',
    slug: 'dal-baati-churma'
  },
  {
    id: 6,
    name: 'Dhokla',
    state: 'Gujarat',
    description: 'A light and fluffy steamed snack made from gram flour, known for its tangy taste.',
    image: '/images/masala-dosa.jpg',
    slug: 'dhokla'
  }
];

export const places = [
  {
    id: 1,
    name: 'Mysuru Sweet Shop',
    slug: 'mysuru-sweet-shop',
    dish: 'mysore-pak',
    location: 'Mysuru, Karnataka',
    rating: 4.9,
    description: 'A classic stop for authentic Mysore Pak, fresh sweets and a nostalgic local feel.'
  },
  {
    id: 2,
    name: 'Traditional Food Corner',
    slug: 'traditional-food-corner',
    dish: 'mysore-pak',
    location: 'Mysuru, Karnataka',
    rating: 4.7,
    description: 'Known for family-style sweets and a warm, old-school Karnataka dining experience.'
  },
  {
    id: 3,
    name: 'Mysuru Food Street',
    slug: 'mysuru-food-street',
    dish: 'mysore-pak',
    location: 'Mysuru, Karnataka',
    rating: 4.8,
    description: 'A lively local area filled with food stalls serving heritage sweets and snacks.'
  },
  {
    id: 4,
    name: 'Mysuru Dosa House',
    slug: 'mysuru-dosa-house',
    dish: 'masala-dosa',
    location: 'Mysuru, Karnataka',
    rating: 4.8,
    description: 'Popular for golden, crispy dosas paired with hot chutneys and chutney powder.'
  },
  {
    id: 5,
    name: 'South Indian Food Corner',
    slug: 'south-indian-food-corner',
    dish: 'masala-dosa',
    location: 'Bengaluru, Karnataka',
    rating: 4.6,
    description: 'A simple and reliable place for authentic South Indian breakfast favourites.'
  },
  {
    id: 6,
    name: 'Karnataka Meals House',
    slug: 'karnataka-meals-house',
    dish: 'bisi-bele-bath',
    location: 'Bengaluru, Karnataka',
    rating: 4.7,
    description: 'Famous for wholesome Karnataka meals and rich, spicy Bisi Bele Bath.'
  },
  {
    id: 7,
    name: 'Traditional Karnataka Kitchen',
    slug: 'traditional-karnataka-kitchen',
    dish: 'bisi-bele-bath',
    location: 'Hubballi, Karnataka',
    rating: 4.5,
    description: 'A homely place serving classic Karnataka comfort food with strong regional flavours.'
  }
];

export const reviews = [
  {
    id: 1,
    place: 'mysuru-sweet-shop',
    author: 'Priya',
    rating: 5,
    review: 'The Mysore Pak was soft and delicious.',
    date: '2026-09-01'
  },
  {
    id: 2,
    place: 'mysuru-sweet-shop',
    author: 'Rahul',
    rating: 4,
    review: 'I really enjoyed the traditional taste.',
    date: '2026-09-02'
  },
  {
    id: 3,
    place: 'mysuru-sweet-shop',
    author: 'Anu',
    rating: 5,
    review: 'A nice place to try authentic Mysore Pak.',
    date: '2026-09-03'
  },
  {
    id: 4,
    place: 'mysuru-dosa-house',
    author: 'Nisha',
    rating: 5,
    review: 'The dosa was crisp and served with excellent chutney.',
    date: '2026-09-04'
  },
  {
    id: 5,
    place: 'karnataka-meals-house',
    author: 'Karthik',
    rating: 4,
    review: 'Bisi Bele Bath had a comforting homemade taste.',
    date: '2026-09-05'
  }
];
