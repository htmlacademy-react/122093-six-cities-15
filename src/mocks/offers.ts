import { Offer } from '../types/offer';

const offers: Offer[] = [
  {
    id: '4367aa15-eb08-49cd-ba6e-f32ac3e95aff',
    title: 'The house among olive ',
    description: 'I rent out a very sunny and bright apartment only 7 minutes walking distance to the metro station. The apartment has a spacious living room with a kitchen, one bedroom and a bathroom with mit bath. A terrace can be used in summer.',
    type: 'apartment',
    price: 441,
    images: [
      'https://15.design.htmlacademy.pro/static/hotel/10.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/4.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/13.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/19.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/14.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/5.jpg'
    ],
    previewImage: 'https://15.design.htmlacademy.pro/static/hotel/10.jpg',
    city: {
      name: 'Hamburg',
      location: {
        latitude: 53.550341,
        longitude: 10.000654,
        zoom: 13
      }
    },
    location: {
      latitude: 53.528341000000005,
      longitude: 9.982654,
      zoom: 16
    },
    goods: [
      'Towels',
      'Washer',
      'Breakfast',
      'Coffee machine',
      'Fridge',
      'Baby seat'
    ],
    host: {
      isPro: true,
      name: 'Angelina',
      avatarUrl: 'https://15.design.htmlacademy.pro/static/host/avatar-angelina.jpg'
    },
    isPremium: false,
    isFavorite: true,
    rating: 4.1,
    bedrooms: 3,
    maxAdults: 6
  },
  {
    id: 'faa6a3dd-ffbd-4b21-93d5-98a2319bee44',
    title: 'Canal View Prinsengracht',
    description: 'I am happy to welcome you to my apartment in the city center! Three words: location, cosy and chic!',
    type: 'house',
    price: 254,
    images: [
      'https://15.design.htmlacademy.pro/static/hotel/7.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/1.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/18.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/10.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/11.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/5.jpg'
    ],
    previewImage: 'https://15.design.htmlacademy.pro/static/hotel/7.jpg',
    city: {
      name: 'Hamburg',
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 13
      }
    },
    location: {
      latitude: 53.540341000000005,
      longitude: 10.025654000000001,
      zoom: 16
    },
    goods: [
      'Washing machine',
      'Cable TV',
      'Air conditioning',
      'Dishwasher'
    ],
    host: {
      isPro: true,
      name: 'Angelina',
      avatarUrl: 'https://15.design.htmlacademy.pro/static/host/avatar-angelina.jpg'
    },
    isPremium: false,
    isFavorite: true,
    rating: 2.9,
    bedrooms: 4,
    maxAdults: 8
  },
  {
    id: '37dcc624-5f97-4725-82fa-923ad6df044d',
    title: 'Tile House',
    description: 'A new spacious villa, one floor. All commodities, jacuzzi and beautiful scenery. Ideal for families or friends.',
    type: 'apartment',
    price: 248,
    images: [
      'https://15.design.htmlacademy.pro/static/hotel/7.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/13.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/18.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/14.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/4.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/1.jpg'
    ],
    previewImage: 'https://15.design.htmlacademy.pro/static/hotel/7.jpg',
    city: {
      name: 'Cologne',
      location: {
        latitude: 50.938361,
        longitude: 6.959974,
        zoom: 13
      }
    },
    location: {
      latitude: 50.917361,
      longitude: 6.977974,
      zoom: 16
    },
    goods: [
      'Cable TV',
      'Baby seat',
      'Laptop friendly workspace',
      'Kitchen',
      'Towels',
      'Coffee machine',
      'Breakfast',
      'Fridge'
    ],
    host: {
      isPro: true,
      name: 'Angelina',
      avatarUrl: 'https://15.design.htmlacademy.pro/static/host/avatar-angelina.jpg'
    },
    isPremium: true,
    isFavorite: true,
    rating: 2.3,
    bedrooms: 5,
    maxAdults: 5
  },
  {
    id: '5abfb091-2aad-4a88-8ea4-f788bbbe0863',
    title: 'Loft Studio in the Central Area',
    description: 'This is a place for dreamers to reset, reflect, and create. Designed with a \'slow\' pace in mind, our hope is that you enjoy every part of your stay; from making local coffee by drip in the morning, choosing the perfect record to put on as the sun sets.',
    type: 'apartment',
    price: 294,
    images: [
      'https://15.design.htmlacademy.pro/static/hotel/8.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/6.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/4.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/14.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/11.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/12.jpg'
    ],
    previewImage: 'https://15.design.htmlacademy.pro/static/hotel/8.jpg',
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
    goods: [
      'Dishwasher',
      'Breakfast',
      'Washing machine',
      'Wi-Fi',
      'Kitchen',
      'Washer',
      'Laptop friendly workspace',
      'Coffee machine',
      'Heating'
    ],
    host: {
      isPro: true,
      name: 'Angelina',
      avatarUrl: 'https://15.design.htmlacademy.pro/static/host/avatar-angelina.jpg'
    },
    isPremium: false,
    isFavorite: true,
    rating: 2.6,
    bedrooms: 1,
    maxAdults: 9
  },
  {
    id: '7a63a345-e808-46fa-8b08-eda8e7f495c3',
    title:'Penthouse, 4-5 rooms + 5 balconies',
    description: 'Relax, rejuvenate and unplug in this ultimate rustic getaway experience in the country. In our beautiful screened Pondhouse, you can gaze at the stars and listen to the sounds of nature from your cozy warm bed.',
    type: 'apartment',
    price: 396,
    images: [
      'https://15.design.htmlacademy.pro/static/hotel/2.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/7.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/11.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/5.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/8.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/12.jpg'
    ],
    previewImage: 'https://15.design.htmlacademy.pro/static/hotel/2.jpg',
    city: {
      name: 'Cologne',
      location: {
        latitude: 50.938361,
        longitude: 6.959974,
        zoom: 13
      }
    },
    location: {
      latitude: 50.930361,
      longitude: 6.937974,
      zoom: 16
    },
    goods: [
      'Washing machine',
      'Washer',
      'Air conditioning',
      'Baby seat',
      'Heating',
      'Wi-Fi',
      'Cable TV',
      'Laptop friendly workspace',
      'Breakfast',
      'Towels',
      'Fridge'
    ],
    host: {
      isPro: true,
      name: 'Angelina',
      avatarUrl: 'https://15.design.htmlacademy.pro/static/host/avatar-angelina.jpg'
    },
    isPremium: true,
    isFavorite: false,
    rating: 4,
    bedrooms: 2,
    maxAdults: 10
  }
];

export default offers;
