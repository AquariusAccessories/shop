export const products = [
  {
    id: 1,
    title: { en: 'Teal Drop Earrings', fa: 'گوشواره قطره‌ای فیروزه‌ای' },
    description: { en: 'Vibrant teal acrylic drop earrings with a glossy finish.', fa: 'گوشواره‌های قطره‌ای فیروزه‌ای با روکش براق.' },
    image: './assets/images/earring1.jpg',
    category: 'Earrings',
    material: { en: 'Acrylic', fa: 'اکریلیک' },
    dimensions: { en: '5 cm', fa: '۵ سانتی‌متر' },
    price: { en: '$25', fa: '۱,۲۰۰,۰۰۰ تومان' },
    thumbnailsByColor: {
      '#00CED1': [
        './assets/images/earring1.jpg',
        './assets/images/earring1.jpg',
        './assets/images/earring1.jpg',
      ],
      '#FF69B4': [
        './assets/images/earring1 (3).jpg',
        './assets/images/earring1 (3).jpg',
      ],
      '#FFD700': [
        './assets/images/earring1 (2).jpg',
        './assets/images/earring1 (2).jpg',
      ],
    },
    colors: [
      { hex: '#00CED1', transparent: false }, // Teal
      { hex: '#FF69B4', transparent: true }, // Hot Pink, transparent
      { hex: '#FFD700', transparent: false }, // Gold
    ],
    thumbnails: [], // Empty for products with colors
    hasFixedPrice: true,
    inStock: true,
    packaging: { size: { en: 'Small', fa: 'کوچک' }, engravingEligible: true }
  },
  {
    id: 2,
    title: { en: 'Coral Hoop Earrings', fa: 'گوشواره حلقه‌ای مرجانی' },
    description: { en: 'Bold coral hoop earrings made from lightweight acrylic.', fa: 'گوشواره‌های حلقه‌ای مرجانی سبک و جذاب.' },
    image: './assets/images/earring2.jpg',
    category: 'Earrings',
    material: { en: 'Acrylic', fa: 'اکریلیک' },
    dimensions: { en: '4 cm', fa: '۴ سانتی‌متر' },
    price: { en: '$30', fa: '۱,۴۵۰,۰۰۰ تومان' },
    thumbnailsByColor: {
      '#FF7F50': [
        './assets/images/earring2.jpg',
        './assets/images/earring2 (2).jpg',
      ],
      '#40E0D0': [
        './assets/images/earring2 (3).jpg',
        './assets/images/earring2 (3).jpg',
      ],
    },
    colors: [
      { hex: '#FF7F50', transparent: false }, // Coral
      { hex: '#40E0D0', transparent: true }, // Turquoise, transparent
    ],
    thumbnails: [], // Empty for products with colors
    hasFixedPrice: true,
    inStock: true,
    packaging: { size: { en: 'Small', fa: 'کوچک' }, engravingEligible: true }
  },
  {
    id: 3,
    title: { en: 'Star Keychain', fa: 'جاکلیدی ستاره‌ای' },
    description: { en: 'Shiny star-shaped acrylic keychain with glitter accents.', fa: 'جاکلیدی ستاره‌ای براق با تزئینات اکلیلی.' },
    image: './assets/images/keychain1.jpg',
    category: 'Keychains',
    material: { en: 'Acrylic', fa: 'اکریلیک' },
    dimensions: { en: '6 cm', fa: '۶ سانتی‌متر' },
    price: { en: '$15', fa: '۷۵۰,۰۰۰ تومان' },
    thumbnailsByColor: {
      '#FFD700': [
        './assets/images/keychain1.jpg',
        './assets/images/keychain1.jpg',
      ],
      '#C0C0C0': [
        './assets/images/keychain1 (2).jpg',
        './assets/images/keychain1 (2).jpg',
      ],
      '#800080': [
        './assets/images/keychain1.jpg',
        './assets/images/keychain1 (2).jpg',
      ],
    },
    colors: [
      { hex: '#FFD700', transparent: false }, // Gold
      { hex: '#C0C0C0', transparent: true }, // Silver, transparent
      { hex: '#800080', transparent: false }, // Purple
    ],
    thumbnails: [], // Empty for products with colors
    hasFixedPrice: true,
    inStock: true,
    packaging: { size: { en: 'Medium', fa: 'متوسط' }, engravingEligible: true }
  },
  {
    id: 4,
    title: { en: 'Heart Keychain', fa: 'جاکلیدی قلبی' },
    description: { en: 'Cute heart-shaped acrylic keychain in pastel pink.', fa: 'جاکلیدی قلبی زیبا به رنگ صورتی پاستلی.' },
    image: './assets/images/keychain2.jpg',
    category: 'Keychains',
    material: { en: 'Acrylic', fa: 'اکریلیک' },
    dimensions: { en: '5 cm', fa: '۵ سانتی‌متر' },
    price: { en: '$12', fa: '۶۰۰,۰۰۰ تومان' },
    thumbnailsByColor: {
      '#FFC1CC': [
        './assets/images/keychain2.jpg',
        './assets/images/keychain2.jpg',
      ],
      '#87CEEB': [
        './assets/images/keychain2 (2).jpg',
        './assets/images/keychain2 (2).jpg',
      ],
    },
    colors: [
      { hex: '#FFC1CC', transparent: false }, // Pastel Pink
      { hex: '#87CEEB', transparent: true }, // Sky Blue, transparent
    ],
    thumbnails: [], // Empty for products with colors
    hasFixedPrice: true,
    inStock: false,
    packaging: { size: { en: 'Medium', fa: 'متوسط' }, engravingEligible: true }
  },
  {
    id: 5,
    title: { en: 'Geometric Stud Earrings', fa: 'گوشواره میخی هندسی' },
    description: { en: 'Minimalist geometric acrylic stud earrings.', fa: 'گوشواره‌های میخی هندسی مینیمال.' },
    image: './assets/images/earring3.jpg',
    category: 'Earrings',
    material: { en: 'Acrylic', fa: 'اکریلیک' },
    dimensions: { en: '2 cm', fa: '۲ سانتی‌متر' },
    price: { en: 'Contact for price', fa: 'تماس بگیرید' },
    thumbnailsByColor: {},
    colors: [], // No color options
    thumbnails: [
      './assets/images/earring3.jpg',
      './assets/images/earring3 (2).jpg',
    ],
    hasFixedPrice: false,
    inStock: true,
    packaging: { size: { en: 'Small', fa: 'کوچک' }, engravingEligible: false }
  },
  {
    id: 6,
    title: { en: 'Fancy Stud Earrings', fa: 'گوشواره میخی فانتزی' },
    description: { en: 'Minimalist fancy acrylic stud earrings.', fa: 'گوشواره‌های میخی فانتزی مینیمال.' },
    image: './assets/images/earring4.jpg',
    category: 'Earrings',
    material: { en: 'Acrylic', fa: 'اکریلیک' },
    dimensions: { en: '2 cm', fa: '۲ سانتی‌متر' },
    price: { en: 'Contact for price', fa: 'تماس بگیرید' },
    thumbnailsByColor: {},
    colors: [], // No color options
    thumbnails: [
      './assets/images/earring4.jpg',
      './assets/images/earring4 (2).jpg',
    ],
    hasFixedPrice: false,
    inStock: false,
    packaging: { size: { en: 'Small', fa: 'کوچک' }, engravingEligible: false }
  },
];