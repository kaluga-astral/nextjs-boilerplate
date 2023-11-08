import type { HttpServiceResponse } from '@example/shared';
import { apiHttpClient } from '@example/shared';

import type { BookNetworkSourcesDTO } from './dto';

export const bookNetworkSources = {
  getGenreList: () =>
    apiHttpClient.get<
      void,
      HttpServiceResponse<BookNetworkSourcesDTO.GenreListDTO>
    >('/book/genreList'),

  getGenreByID: (id: string) =>
    apiHttpClient.get<
      string,
      HttpServiceResponse<BookNetworkSourcesDTO.GenreDTO>
    >(`/book/genre/${id}`),

  getBookByName: (data: BookNetworkSourcesDTO.BookByNameInputDTO) =>
    apiHttpClient.get<
      BookNetworkSourcesDTO.BookByNameInputDTO,
      HttpServiceResponse<BookNetworkSourcesDTO.BookByNameDTO>
    >('/book/byName', { params: data }),

  getBookList: (params: BookNetworkSourcesDTO.BookListInputDTO) =>
    apiHttpClient.get<
      BookNetworkSourcesDTO.BookListInputDTO,
      HttpServiceResponse<BookNetworkSourcesDTO.BookListDTO>
    >('/books', {
      params,
    }),
};

export type BookNetworkSources = typeof bookNetworkSources;
