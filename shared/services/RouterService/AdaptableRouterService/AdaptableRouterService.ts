import { makeAutoObservable } from 'mobx';

import type { NavigateHandler, RouterService } from '../RouterService';

type RouterParams = {
  navigate: NavigateHandler;
};

export class AdaptableRouterService implements RouterService {
  private navigateHandler?: NavigateHandler;

  private currentPathname: string;

  constructor() {
    this.currentPathname = globalThis.location?.pathname ?? '';
    makeAutoObservable(this);
  }

  public navigate: NavigateHandler = (path, params) => {
    this.navigateHandler?.(path, params);
  };

  public setParams = (params: RouterParams) => {
    this.navigateHandler = params.navigate;
  };

  public get pathname() {
    return this.currentPathname;
  }

  public updatePathname = (pathname: string) => {
    this.currentPathname = pathname;
  };
}

export const router = new AdaptableRouterService();
