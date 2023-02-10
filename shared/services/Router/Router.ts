import NextRouter, { NextRouter as INextRouter } from 'next/router';

type OriginPushParams = Parameters<typeof NextRouter.push>;

type PushParams = [as?: OriginPushParams[1], options?: OriginPushParams[2]];

export interface Router extends INextRouter {
  editDraftRequestRoute: string;
  pushToEditDraftRequest(
    requestID: string,
    ...params: PushParams
  ): Promise<boolean>;

  createDraftRequestRoute: string;
  pushToCreateDraftRequest(...params: PushParams): Promise<boolean>;

  requestRoute: string;
  pushToRequest(requestID: string, ...params: PushParams): Promise<boolean>;

  ownersRoute: string;
  pushToOwners(...params: PushParams): Promise<boolean>;
}

/**
 * @description Модифицирует singleton роутера nextjs для того, чтобы можно было прямо из него контролировать роутинг
 * */
const createRouter = (): Router => {
  // приведенеи типов для возможности модифицировать экземпляр в рантайме
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const router = NextRouter as any as Router;

  router.editDraftRequestRoute = '/editDraftRequest/:id';

  router.pushToEditDraftRequest = (requestID, ...params) =>
    NextRouter.push(`/editDraftRequest/${requestID}`, ...params);

  router.createDraftRequestRoute = '/createDraftRequest';

  router.pushToCreateDraftRequest = (...params) =>
    NextRouter.push('/createDraftRequest', ...params);

  router.requestRoute = '/request';

  router.pushToRequest = (requestID, ...params) =>
    NextRouter.push(`/request/${requestID}`, ...params);

  router.ownersRoute = '/owners';

  router.pushToOwners = (...params) =>
    NextRouter.push('/createDraftRequest', ...params);

  return router;
};

export const router = createRouter();
