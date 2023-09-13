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
  ) {
    this.administrationNetworkSources = administrationNetworkSources;
  }

  public createBook = (
    data: AdministrationRepositoryDTO.CreateBookInputDTO,
  ): Promise<void> => this.administrationNetworkSources.createBook(data);
}

export const administrationRepository = new AdministrationRepository(
  administrationNetworkSourcesInstance,
);
