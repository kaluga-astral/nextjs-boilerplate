import { apiHttpClient } from '@example/shared';

import {
  BookByNameNetworkDTO,
  BookByNameNetworkInputDTO,
  GenreListNetworkDTO,
  GenreNetworkDTO,
} from './dto';

export const bookNetworkSources = {
  getGenreList: () =>
    apiHttpClient.get<void, GenreListNetworkDTO>('/book/genreList'),

  getGenreByID: (id: string) =>
    apiHttpClient.get<string, GenreNetworkDTO>(`/book/genre/${id}`),

  getBookByName: (data: BookByNameNetworkInputDTO) =>
    apiHttpClient.get<BookByNameNetworkInputDTO, BookByNameNetworkDTO>(
      '/book/byName',
      { params: data },
    ),
};

export type BookNetworkSources = typeof bookNetworkSources;
