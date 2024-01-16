type NavigateHandlerParams = {
  search?: string;
};

export type NavigateHandler = (
  path: string,
  params?: NavigateHandlerParams,
) => void;

export abstract class RouterService {
  public abstract navigate: NavigateHandler;

  public abstract pathname: string;
}
