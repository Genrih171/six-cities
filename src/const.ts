const StartSettings = {
  amountPlaces: 312,
} as const;

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

export {StartSettings, AuthorizationStatus, AppRoutes};
