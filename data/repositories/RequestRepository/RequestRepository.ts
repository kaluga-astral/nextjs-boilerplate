import {
  LocalStorageService,
  QueryClient,
  localStorageService,
  queryClient as queryClientInstance,
} from '@example/shared';

import { RepositoryCachedQueryParams } from '../../types';
import {
  RequestNetworkSources,
  requestNetworkSources as requestNetworkSourcesInstance,
} from '../../sources';
import {
  OwnerRepository,
  ownerRepository as ownerRepositoryInstance,
} from '../OwnerRepository';
import {
  TariffDTO,
  TariffRepository,
  tariffRepository as tariffRepositoryInstance,
} from '../TariffRepository';

import {
  CreateDraftRequestInputDTO,
  EditRequestInputDTO,
  RequestDTO,
  RequestFullInfoDTO,
  RequestStoreInputDTO,
  RequestWithTariffDTO,
} from './dto';

/**
 * @description Repository для работы с даннми заявке
 * */
export class RequestRepository {
  private readonly requestStoreID = 'request';

  private readonly requestWithTariffCacheID = 'requestWithTariffCacheID';

  constructor(
    private readonly requestNetworkSources: RequestNetworkSources,
    private readonly ownerRepository: OwnerRepository,
    private readonly tariffRepository: TariffRepository,
    private readonly queryClient: QueryClient,
    private readonly storageService: LocalStorageService,
  ) {
    this.requestNetworkSources = requestNetworkSources;
    this.ownerRepository = ownerRepository;
    this.tariffRepository = tariffRepository;
    this.queryClient = queryClient;
    this.storageService = storageService;
  }

  /**
   * @description Получение полной информации о заявке
   * */
  public getRequestFullInfo = async (
    requestID: string,
  ): Promise<RequestFullInfoDTO> => {
    const { ownerID, ...request } = await this.getRequestInfo(requestID);
    const owner = await this.ownerRepository.getOwnerInfo(ownerID);

    return {
      ...request,
      owner,
    };
  };

  public getRequestInfo = (requestID: string): Promise<RequestDTO> =>
    this.requestNetworkSources.getRequestInfo(requestID);

  public getRequestWithTariffCacheID = (requestID: string): string[] => [
    this.requestWithTariffCacheID,
    requestID,
  ];

  public getRequestWithTariff = async (
    requestID: string,
    params?: RepositoryCachedQueryParams,
  ) =>
    this.queryClient.fetchQuery(
      this.getRequestWithTariffCacheID(requestID),
      async () => {
        const [request, tariffs] = await Promise.all([
          this.getRequestInfo(requestID),
          this.tariffRepository.getTariffs(),
        ]);

        const { tariffID, ...requestData } = request;

        return {
          ...requestData,
          tariff: tariffs.data.find(({ id }) => id === tariffID) as TariffDTO,
        };
      },
      params,
    );

  public updateRequestWithTariffCache = (
    requestID: string,
    updater: (data?: RequestWithTariffDTO) => RequestWithTariffDTO | undefined,
  ): void => {
    this.queryClient.setQueryData<RequestWithTariffDTO>(
      this.getRequestWithTariffCacheID(requestID),
      updater,
    );
  };

  public createDraftRequest = (
    data: CreateDraftRequestInputDTO,
  ): Promise<string> => this.requestNetworkSources.createDraftRequest(data);

  public editDraftRequest = (data: EditRequestInputDTO): Promise<void> =>
    this.requestNetworkSources.editRequest(data);

  public saveRequestToStore = (request: RequestStoreInputDTO) =>
    this.storageService.setItem(this.requestStoreID, JSON.stringify(request));
}

export const requestRepository = new RequestRepository(
  requestNetworkSourcesInstance,
  ownerRepositoryInstance,
  tariffRepositoryInstance,
  queryClientInstance,
  localStorageService,
);
