import { apiHttpClient } from '@example/shared';

import type { AdministrationNetworkSourcesDTO } from './dto';

export const administrationNetworkSources = {
  createBook: (data: AdministrationNetworkSourcesDTO.CreateBookInputDTO) =>
    apiHttpClient.post<
      AdministrationNetworkSourcesDTO.CreateBookInputDTO,
      void
    >('/administration/books/create', data),
};

export type AdministrationNetworkSources = typeof administrationNetworkSources;
