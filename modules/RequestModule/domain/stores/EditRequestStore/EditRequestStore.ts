import { makeAutoObservable, runInAction } from 'mobx';

import { AsyncState, AsyncStateStore } from '@example/shared';
import {
  RequestRepository,
  TariffRepository,
  TariffRepositoryDTO,
  requestRepository as requestRepositoryInstance,
  tariffRepository as tariffRepositoryInstance,
} from '@example/data';

import { DraftRequestFormValues } from '../../../features';

export type EditRequestData = DraftRequestFormValues;

type Handlers = {
  onSuccessEditRequest: () => void;
};

export class EditDraftRequestStore {
  private editRequestCache: EditRequestData | undefined;

  constructor(
    private readonly requestRepository: RequestRepository,
    private readonly editRequestStateStore: AsyncStateStore,
    private readonly tariffRepository: TariffRepository,
    private readonly requestID: string,
    private readonly handlers: Handlers,
  ) {
    makeAutoObservable(this, {}, { autoBind: true });
  }

  get editRequestState(): AsyncState {
    return this.editRequestStateStore.state;
  }

  public editRequest = async (data: EditRequestData): Promise<void> => {
    this.editRequestStateStore.start();
    this.editRequestCache = data;

    const { tariff, description } = data;

    try {
      await this.requestRepository.editDraftRequest({
        id: this.requestID,
        tariffID: tariff.id,
        description,
      });

      const tariffs = await this.tariffRepository.getTariffs({
        fetchPolicy: 'cache-first',
      });

      this.requestRepository.updateRequestWithTariffCache(
        this.requestID,
        (prevRequestData) => {
          if (prevRequestData) {
            return {
              ...prevRequestData,
              ...data,
              tariff: tariffs.data.find(
                ({ id }) => id === data.tariff.id,
              ) as TariffRepositoryDTO.TariffDTO,
              updatedDate: new Date().toISOString(),
            };
          }

          return undefined;
        },
      );

      runInAction(() => {
        this.editRequestStateStore.success();
      });

      this.handlers.onSuccessEditRequest();
    } catch (err) {
      runInAction(() => {
        this.editRequestStateStore.fail((err as Error).message);
      });
    }
  };

  public retryEditRequest = () => {
    if (this.editRequestCache) {
      this.editRequest(this.editRequestCache);
    }
  };
}

export const createEditRequestDraftStore = (
  requestID: string,
  handlers: Handlers,
) =>
  new EditDraftRequestStore(
    requestRepositoryInstance,
    new AsyncStateStore(),
    tariffRepositoryInstance,
    requestID,
    handlers,
  );
