import type { NavigateHandler, RouterService } from '@example/shared';

export class MockingRouterService implements RouterService {
  constructor(initPath: string) {
    this.pathname = initPath;
  }

  public pathname = '/';

  public navigate: NavigateHandler = (path) => {
    this.pathname = path;
  };
}
