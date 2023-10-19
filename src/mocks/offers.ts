import { TOffers } from '../types/offer';

const Offers: TOffers = [
  {
    id: 'b0889b31-5563-4811-8272-e0ac09aec10b',
    title: 'Amazing and Extremely Central Flat',
    description: 'I rent out a very sunny and bright apartment only 7 minutes walking distance to the metro station. The apartment has a spacious living room with a kitchen, one bedroom and a bathroom with mit bath. A terrace can be used in summer.',
    type: 'apartment',
    price: 198,
    previewImage: 'https://13.design.pages.academy/static/hotel/1.jpg',
    images: [
      'https://13.design.pages.academy/static/hotel/1.jpg',
      'https://13.design.pages.academy/static/hotel/20.jpg',
      'https://13.design.pages.academy/static/hotel/5.jpg',
      'https://13.design.pages.academy/static/hotel/7.jpg',
      'https://13.design.pages.academy/static/hotel/14.jpg',
      'https://13.design.pages.academy/static/hotel/13.jpg'
    ],
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 13
      }
    },
    location: {
      latitude: 48.868610000000004,
      longitude: 2.342499,
      zoom: 16
    },
    goods: [
      'Fridge',
      'Dishwasher',
      'Coffee machine',
      'Baby seat',
      'Kitchen',
      'Laptop friendly workspace',
      'Wi-Fi',
      'Washer',
      'Breakfast',
      'Towels',
      'Cable TV',
      'Heating'
    ],
    host: {
      isPro: true,
      name: 'Jane',
      avatarUrl: 'https://13.design.pages.academy/static/host/avatar-angelina.jpg'
    },
    isFavorite: true,
    isPremium: true,
    rating: 4.1,
    bedrooms: 5,
    maxAdults: 9
  },
  {
    id: '436c1f42-0f6d-4579-acf0-add5b8d427fa',
    title: 'Loft Studio in the Central Area',
    description: 'Discover daily local life in city center, friendly neighborhood, clandestine casino, karaoke, old-style artisans, art gallery and artist studio downstairs.',
    type: 'hotel',
    price: 258,
    previewImage: 'https://13.design.pages.academy/static/hotel/18.jpg',
    images: [
      'https://13.design.pages.academy/static/hotel/16.jpg',
      'https://13.design.pages.academy/static/hotel/2.jpg',
      'https://13.design.pages.academy/static/hotel/1.jpg',
      'https://13.design.pages.academy/static/hotel/3.jpg',
      'https://13.design.pages.academy/static/hotel/6.jpg',
      'https://13.design.pages.academy/static/hotel/13.jpg'
    ],
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 13
      }
    },
    location: {
      latitude: 48.858610000000006,
      longitude: 2.330499,
      zoom: 16
    },
    goods: [
      'Washer',
      'Baby seat',
      'Wi-Fi',
      'Air conditioning',
      'Dishwasher',
      'Breakfast',
      'Coffee machine',
      'Kitchen',
      'Towels',
      'Fridge'
    ],
    host: {
      isPro: false,
      name: 'Angelina',
      avatarUrl: 'https://13.design.pages.academy/static/host/avatar-angelina.jpg'
    },
    isFavorite: false,
    isPremium: false,
    rating: 1.3,
    bedrooms: 1,
    maxAdults: 3
  },
  {
    id: '9fa3f477-9e17-4eee-8f26-4b0e1eaabad4',
    title: 'The house among olive' ,
    description: 'A new spacious villa, one floor. All commodities, jacuzzi and beautiful scenery. Ideal for families or friends.',
    type: 'room',
    price: 156,
    previewImage: 'https://13.design.pages.academy/static/hotel/16.jpg',
    images: [
      'https://13.design.pages.academy/static/hotel/17.jpg',
      'https://13.design.pages.academy/static/hotel/5.jpg',
      'https://13.design.pages.academy/static/hotel/16.jpg',
      'https://13.design.pages.academy/static/hotel/18.jpg',
      'https://13.design.pages.academy/static/hotel/20.jpg',
      'https://13.design.pages.academy/static/hotel/3.jpg'
    ],
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 13
      }
    },
    location: {
      latitude: 48.834610000000005,
      longitude: 2.335499,
      zoom: 16
    },
    goods: [
      'Baby seat',
      'Cable TV',
      'Fridge'
    ],
    host: {
      isPro: true,
      name: 'Martha',
      avatarUrl: 'https://13.design.pages.academy/static/host/avatar-angelina.jpg'
    },
    isFavorite: true,
    isPremium: false,
    rating: 2.3,
    bedrooms: 3,
    maxAdults: 3
  },
  {
    id: 'e1c8bcff-b30d-42c3-a5f6-e3c5ed1a049b',
    title: 'The house among olive',
    description: 'Peaceful studio in the most wanted area in town. Quiet house Near of everything. Completely renovated. Lovely neighbourhood, lot of trendy shops, restaurants and bars in a walking distance.',
    type: 'hotel',
    price: 420,
    previewImage: 'https://13.design.pages.academy/static/hotel/3.jpg',
    images: [
      'https://13.design.pages.academy/static/hotel/4.jpg',
      'https://13.design.pages.academy/static/hotel/20.jpg',
      'https://13.design.pages.academy/static/hotel/9.jpg',
      'https://13.design.pages.academy/static/hotel/12.jpg',
      'https://13.design.pages.academy/static/hotel/8.jpg',
      'https://13.design.pages.academy/static/hotel/11.jpg'
    ],
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 13
      }
    },
    location: {
      latitude: 48.85761,
      longitude: 2.358499,
      zoom: 16
    },
    goods: [
      'Dishwasher',
      'Breakfast',
      'Air conditioning',
      'Fridge',
      'Washer'
    ],
    host: {
      isPro: false,
      name: 'Olivia',
      avatarUrl: 'https://13.design.pages.academy/static/host/avatar-angelina.jpg'
    },
    isFavorite: false,
    isPremium: true,
    rating: 4.3,
    bedrooms: 5,
    maxAdults: 4
  },
];

export { Offers };
