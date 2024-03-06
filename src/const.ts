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

const CITIES = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'];

const DEFAULT_CITY = CITIES[0];

export { AppRoute, AuthorizationStatus, RatingsStar, CITIES, DEFAULT_CITY };
