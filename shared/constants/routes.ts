export const APP_ROUTES = {
  owners: {
    route: '/owners',
    getRedirectPath() {
      return '/owners';
    },
  },
  createDraftRequest: {
    route: '/',
    getRedirectPath() {
      return '/createDraftRequest';
    },
  },
  editDraftRequest: {
    route: '/editDraftRequest/:requestID',
    getRedirectPath(requestID: string) {
      return `/editDraftRequest/${requestID}`;
    },
  },
  request: {
    route: '/request/:requestID',
    getRedirectPath(requestID: string) {
      return `/request/${requestID}`;
    },
  },
} as const;
