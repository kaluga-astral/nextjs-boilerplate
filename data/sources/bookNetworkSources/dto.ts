import {
  PaginationInputDTO,
  SortInputDTO,
  WithPaginationDTO,
} from '../../types';

export namespace BookNetworkSourcesDTO {
  export type GenreDTO = {
    id: string;
    name: string;
    description: string;
  };

  export type GenreListDTO = {
    list: GenreDTO[];
    totalCount: number;
  };

  export type BookByNameInputDTO = {
    name: string;
  };

  export type BookByNameDTO = {
    name: string;
    genreID: string;
    pageCount: number;
    author: {
      name: string;
      surname: string;
    };
    coAuthor?: {
      name: string;
      surname: string;
    };
  };

  export type BookListItemDTO = {
    id: string;
    name: string;
    price: number;
  };

  export type BookListDTO = WithPaginationDTO<BookListItemDTO>;

  export type BookListInputDTO = PaginationInputDTO & SortInputDTO;
}
