import {
  QueryClient,
  queryClient as queryClientInstance,
} from '@example/shared';

import { RepositoryCachedQueryParams } from '../../types';
import {
  TariffsNetworkSources,
  tariffsNetworkStubSources,
} from '../../sources';

import { TariffRepositoryDTO } from './dto';

/**
 * @description Repository для работы с даннми тарифов
 * */
export class TariffRepository {
  private readonly tariffsCacheID = 'tariffsCacheID';

  constructor(
    private readonly tariffNetworkSources: TariffsNetworkSources,
    private readonly queryClient: QueryClient,
  ) {
    this.tariffNetworkSources = tariffNetworkSources;
    this.queryClient = queryClient;
  }

  public getTariffsCacheKey = () => [this.tariffsCacheID];

  /**
   * @description Получение списка всех тарифов
   * */
  public getTariffs = async (params?: RepositoryCachedQueryParams) =>
    this.queryClient.fetchQuery<TariffRepositoryDTO.TariffListDTO>(
      this.getTariffsCacheKey(),
      () => this.tariffNetworkSources.getTariffs(),
      params,
    );
}

export const tariffRepository = new TariffRepository(
  tariffsNetworkStubSources,
  queryClientInstance,
);
