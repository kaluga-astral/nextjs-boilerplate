import {
  QueryClient,
  queryClient as queryClientInstance,
} from '@example/shared';

import { RepositoryCachedQueryParams } from '../../types';
import {
  OwnerNetworkSources,
  ownerNetworkSources as ownerNetworkSourcesInstance,
} from '../../sources';

import { OwnerRepositoryDTO } from './dto';

/**
 * @description Repository для работы с даннми владельце
 * */
export class OwnerRepository {
  constructor(
    private readonly ownerNetworkSources: OwnerNetworkSources,
    private readonly queryClient: QueryClient,
  ) {
    this.ownerNetworkSources = ownerNetworkSources;
    this.queryClient = queryClient;
  }

  public getOwnerInfoCacheKey = (ownerID: string) => [
    'ownerInfoCacheKey',
    ownerID,
  ];

  /**
   * @description Получение полной информации о владельце
   * */
  public getOwnerInfo = async (
    ownerID: string,
    params?: RepositoryCachedQueryParams,
  ) =>
    this.queryClient.fetchQuery<OwnerRepositoryDTO.OwnerDTO>(
      this.getOwnerInfoCacheKey(ownerID),
      () => this.ownerNetworkSources.getInfo(ownerID),
      params,
    );
}

export const ownerRepository = new OwnerRepository(
  ownerNetworkSourcesInstance,
  queryClientInstance,
);
