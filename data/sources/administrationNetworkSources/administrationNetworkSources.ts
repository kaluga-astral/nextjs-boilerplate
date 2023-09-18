import { apiHttpClient } from '@example/shared';

import { CreateBookNetworkInputDTO } from './dto';

export const administrationNetworkSources = {
  createBook: (data: CreateBookNetworkInputDTO) =>
    apiHttpClient.post<CreateBookNetworkInputDTO, void>(
      '/administration/books/create',
      data,
    ),
};

export type AdministrationNetworkSources = typeof administrationNetworkSources;
