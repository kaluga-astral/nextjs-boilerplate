export const APP_ROUTES = {
  owners: {
    route: '/owners',
    getRedirectPath() {
      return '/owners';
    },
  },
  createDraftRequest: {
    route: '/createDraftRequest',
    getRedirectPath() {
      return '/createDraftRequest';
    },
  },
  editDraftRequest: {
    route: '/editDraftRequest/:id',
    getRedirectPath(requestID: string) {
      return `/editDraftRequest/${requestID}`;
    },
  },
  request: {
    route: '/request/:id',
    getRedirectPath(requestID: string) {
      return `/request/${requestID}`;
    },
  },
} as const;
