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

const TypeCard = {
  MAIN: 'cities',
  OFFER: 'offer',
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

export {AuthorizationStatus, AppRoutes, TypeCard, ImgSize, Cities, Rating};
