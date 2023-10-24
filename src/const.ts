const AppRoutes = {
  ROOT: '/',
  LOGIN: '/login',
  FAVORITES: '/favorites',
  OFFER: '/offer',
} as const;

const AuthorizationStatus = {
  AUTH: 'AUTH',
  NO_AUTH: 'NO_AUTH',
  UNKNOWN: 'UNKNOWN',
} as const;

const TypePage = {
  MAIN: 'cities',
  OFFER: 'offer',
} as const;

const TypeCard = {
  MAIN: 'cities',
  NEAR_PLACES: 'near-places',
  FAVORITES: 'favorites',
} as const;

const ImgSize = {
  MAIN: {
    width: 260,
    height: 110,
  },
  FAVORITES: {
    width: 150,
    height: 200,
  },
}as const;

const Cities = {
  PARIS: 'Paris',
  COLOGNE: 'Cologne',
  BRUSSELS: 'Brussels',
  AMSTERDAM: 'Amsterdam',
  HAMBURG: 'Hamburg',
  DUSSELDORF: 'Dusseldorf',
} as const;

const Rating = {
  '5': 'perfect',
  '4': 'good',
  '3': 'not bad',
  '2': 'badly',
  '1': 'terribly'
} as const;

export {AuthorizationStatus, AppRoutes, TypeCard, TypePage, ImgSize, Cities, Rating};
