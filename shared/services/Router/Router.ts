import NextRouter, { NextRouter as INextRouter } from 'next/router';

export interface Router extends INextRouter {
  routes: {
    editDraftRequest: {
      route: string;
      getRedirectPath: (requestID: string) => string;
    };
    createDraftRequest: {
      route: string;
      getRedirectPath: () => string;
    };
    request: {
      route: string;
      getRedirectPath: (requestID: string) => string;
    };
    owners: {
      route: string;
      getRedirectPath: () => string;
    };
  };
}

/**
 * @description Модифицирует singleton роутера nextjs для того, чтобы можно было прямо из него контролировать роутинг
 * */
const createRouter = (): Router => {
  // приведенеи типов для возможности модифицировать экземпляр в рантайме
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const router = NextRouter as any as Router;

  router.routes = {
    editDraftRequest: {
      route: '/editDraftRequest/:id',
      getRedirectPath: (requestID) => `/editDraftRequest/${requestID}`,
    },
    createDraftRequest: {
      route: '/createDraftRequest',
      getRedirectPath: () => '/createDraftRequest',
    },
    request: {
      route: '/request',
      getRedirectPath: (requestID) => `/request/${requestID}`,
    },
    owners: {
      route: '/owners',
      getRedirectPath: () => '/owners',
    },
  };

  return router;
};

export const router = createRouter();
