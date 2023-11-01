import { HttpServiceResponse, apiHttpClient } from '@example/shared';

import { BookNetworkSourcesDTO } from './dto';

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
