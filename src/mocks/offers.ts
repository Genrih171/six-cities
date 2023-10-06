import { TOffers } from '../types/offer';

const Offers: TOffers = [
  {
    id: 'b0889b31-5563-4811-8272-e0ac09aec10b',
    title: 'Amazing and Extremely Central Flat',
    type: 'apartment',
    price: 198,
    previewImage: 'https://13.design.pages.academy/static/hotel/1.jpg',
    city: {
      name: 'Paris',
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
    isFavorite: true,
    isPremium: true,
    rating: 4.1
  },
  {
    id: '436c1f42-0f6d-4579-acf0-add5b8d427fa',
    title: 'Loft Studio in the Central Area',
    type: 'hotel',
    price: 258,
    previewImage: 'https://13.design.pages.academy/static/hotel/18.jpg',
    city: {
      name: 'Paris',
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
    isFavorite: false,
    isPremium: false,
    rating: 1.3
  },
  {
    id: '9fa3f477-9e17-4eee-8f26-4b0e1eaabad4',
    title: 'The house among olive' ,
    type: 'room',
    price: 156,
    previewImage: 'https://13.design.pages.academy/static/hotel/16.jpg',
    city: {
      name: 'Paris',
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
    isFavorite: true,
    isPremium: false,
    rating: 2.3
  },
  {
    id: 'e1c8bcff-b30d-42c3-a5f6-e3c5ed1a049b',
    title: 'The house among olive',
    type: 'hotel',
    price: 420,
    previewImage: 'https://13.design.pages.academy/static/hotel/3.jpg',
    city: {
      name: 'Paris',
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
    isFavorite: false,
    isPremium: true,
    rating: 4.3
  },
];

export { Offers };
