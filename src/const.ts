enum AppRoute {
  Root = '/',
  Login = '/login',
  Favorites = '/favorites',
  Offer = '/offer',
  NotFound = '/*'
}

enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN'
}

const RatingsStar = [
  ['perfect', '5'],
  ['good', '4'],
  ['not bad', '3'],
  ['badly', '2'],
  ['terribly', '1']
];

const CITIES = [
  {
    name: 'Paris',
    location: {
      latitude: 48.85661,
      longitude: 2.351499,
      zoom: 13
    }
  },
  {
    name: 'Cologne',
    location: {
      latitude: 50.938361,
      longitude: 6.959974,
      zoom: 13
    }
  },
  {
    name: 'Brussels',
    location: {
      latitude: 50.846557,
      longitude: 4.351697,
      zoom: 13
    }
  },
  {
    name: 'Amsterdam',
    location: {
      latitude: 52.37454,
      longitude: 4.897976,
      zoom: 13
    }
  },
  {
    name: 'Hamburg',
    location: {
      latitude: 53.550341,
      longitude: 10.000654,
      zoom: 13
    }
  },
  {
    name: 'Dusseldorf',
    location: {
      latitude: 51.225402,
      longitude: 6.776314,
      zoom: 13
    }
  }
];

const DEFAULT_CITY = CITIES[0];

const SORT_TYPES = {
  Popular: 'Popular',
  PriceLowToHigh: 'Price: low to high',
  PriceHighToLow: 'Price: high to low',
  TopRatedFirst: 'Top rated first'
};

enum APIRoute {
  Offers = '/offers',
  Comments = '/comments',
  Favorite = '/favorite',
  Login = '/login',
  Logout = '/logout'
}

const DEFAULT_SORT_TYPE = SORT_TYPES.Popular;

enum RequestStatus {
  Idle,
  Loading,
  Success,
  Failed
}

enum FavoriteStatus {
  Removed,
  Added
}

const MAX_NEAR_OFFERS = 3;
const MAX_IMAGES_COUNT = 6;
const MIN_CHARACTERS = 50;
const MAX_CHARACTERS = 300;
const DEFAULT_COMMENT_COUNT = 10;

const COMMENT_DATE_FORMAT = 'MMMM YYYY';
const ISO_DATE_FORMAT = 'YYYY-MM-DD';

export {
  AppRoute,
  AuthorizationStatus,
  RatingsStar,
  CITIES,
  DEFAULT_CITY,
  SORT_TYPES,
  DEFAULT_SORT_TYPE,
  APIRoute,
  RequestStatus,
  FavoriteStatus,
  MAX_NEAR_OFFERS,
  MAX_IMAGES_COUNT,
  MIN_CHARACTERS,
  MAX_CHARACTERS,
  DEFAULT_COMMENT_COUNT,
  COMMENT_DATE_FORMAT,
  ISO_DATE_FORMAT,
};
