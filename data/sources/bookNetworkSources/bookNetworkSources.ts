import { HttpServiceResponse, apiHttpClient } from '@example/shared';

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
    apiHttpClient.get<void, HttpServiceResponse<GenreListNetworkDTO>>(
      '/book/genreList',
    ),

  getGenreByID: (id: string) =>
    apiHttpClient.get<string, HttpServiceResponse<GenreNetworkDTO>>(
      `/book/genre/${id}`,
    ),

  getBookByName: (data: BookByNameNetworkInputDTO) =>
    apiHttpClient.get<
      BookByNameNetworkInputDTO,
      HttpServiceResponse<BookByNameNetworkDTO>
    >('/book/byName', { params: data }),

  getBookList: (params: BookListNetworkInputDTO) =>
    apiHttpClient.get<
      BookListNetworkInputDTO,
      HttpServiceResponse<BookListNetworkDTO>
    >('/books', {
      params,
    }),
  //
  // getBookList: async (
  //   params: BookListNetworkInputDTO,
  // ): Promise<HttpServiceResponse<BookListNetworkDTO>> => ({
  //   status: 200,
  //   statusText: 'text',
  //   headers: {},
  //   config: {} as any,
  //   data: {
  //     data: [
  //       { id: '1', price: 2000, name: 'Name' },
  //       { id: '2', price: 2000, name: 'Name' },
  //     ],
  //     meta: { totalCount: 5 },
  //   },
  // }),
};

export type BookNetworkSources = typeof bookNetworkSources;
