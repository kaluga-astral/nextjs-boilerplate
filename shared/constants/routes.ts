export const APP_ROUTES = {
  cart: {
    route: '/cart',
    getRedirectPath() {
      return '/cart';
    },
  },
} as const;
