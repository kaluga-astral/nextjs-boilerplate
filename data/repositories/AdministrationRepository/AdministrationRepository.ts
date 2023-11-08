import type { CacheService } from '@example/shared';
import { cacheService } from '@example/shared';

import type { AdministrationNetworkSources } from '../../sources';
import { administrationNetworkSources as administrationNetworkSourcesInstance } from '../../sources';

import type { AdministrationRepositoryDTO } from './dto';

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
