export const APP_ROUTES = {
  cart: {
    route: '/cart',
    getRedirectPath() {
      return '/cart';
    },
  },
  books: {
    route: '/',
    getRedirectPath() {
      return '/';
    },
  },
  creatingBook: {
    route: '/admin/createBook',
    getRedirectPath() {
      return '/admin/createBook';
    },
  },
} as const;
