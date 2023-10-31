import { CacheService, cacheService } from '@example/shared';

import {
  AdministrationNetworkSources,
  administrationNetworkSources as administrationNetworkSourcesInstance,
} from '../../sources';

import { AdministrationRepositoryDTO } from './dto';

/**
 * @description Repository для работы с данными админской части приложения
 * */
export class AdministrationRepository {
  constructor(
    private readonly administrationNetworkSources: AdministrationNetworkSources,
    private readonly cache: CacheService,
  ) {
    this.administrationNetworkSources = administrationNetworkSources;
  }

  public createBookMutation = () =>
    this.cache.createMutation(
      (data: AdministrationRepositoryDTO.CreateBookInputDTO) =>
        this.administrationNetworkSources.createBook(data),
    );
}

export const administrationRepository = new AdministrationRepository(
  administrationNetworkSourcesInstance,
  cacheService,
);
