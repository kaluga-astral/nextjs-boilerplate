import { apiHttpClient } from '@example/shared';

import {
  BookByNameNetworkDTO,
  BookByNameNetworkInputDTO,
  BookListNetworkDTO,
  BookListNetworkInputDTO,
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

  getBookList: (params: BookListNetworkInputDTO) =>
    apiHttpClient.get<BookListNetworkInputDTO, BookListNetworkDTO>('/books', {
      params,
    }),
};

export type BookNetworkSources = typeof bookNetworkSources;
