import { makeAutoObservable, runInAction } from 'mobx';

import { DraftRequestFormValues } from '../../../features';
import {
  RequestRepository,
  requestRepository as requestRepositoryInstance,
} from '../../../data';

type Handlers = {
  onSuccessCreateRequest: (requestID: string) => void;
};

export class CreateDraftRequestStore {
  public isLoading = false;

  public errorMessage: string | undefined;

  public isSuccess = false;

  private createRequestCache: DraftRequestFormValues | undefined;

  constructor(
    private readonly requestRepository: RequestRepository,
    private readonly handlers: Handlers,
  ) {
    makeAutoObservable(this, {}, { autoBind: true });
  }

  public createRequest = async (
    data: DraftRequestFormValues,
  ): Promise<void> => {
    this.isLoading = true;
    this.isSuccess = false;
    this.errorMessage = undefined;
    this.createRequestCache = data;

    try {
      const requestID = await this.requestRepository.createDraftRequest({
        tariffID: data.tariff.id,
        description: data.description,
      });

      runInAction(() => {
        this.isLoading = false;
        this.isSuccess = true;
      });

      this.requestRepository.updateRequestWithTariffCache(
        requestID,
        () =>
          ({
            description: data.description,
            // any потому что тестовый пример
            //  eslint-disable-next-line
          } as any),
      );

      this.handlers.onSuccessCreateRequest(requestID);
    } catch (err) {
      runInAction(() => {
        this.isLoading = false;
        this.errorMessage = (err as Error).message;
      });
    }
  };

  public retryCreateRequest = () => {
    if (this.createRequestCache) {
      this.createRequest(this.createRequestCache);
    }
  };
}

export const createDraftRequestStore = (handlers: Handlers) =>
  new CreateDraftRequestStore(requestRepositoryInstance, handlers);
