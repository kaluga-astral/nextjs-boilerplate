import {
  PaginationInputDTO,
  SortInputDTO,
  WithPaginationDTO,
} from '../../types';

export type GenreNetworkDTO = {
  id: string;
  name: string;
  description: string;
};

export type GenreListNetworkDTO = {
  list: GenreNetworkDTO[];
  totalCount: number;
};

export type BookByNameNetworkInputDTO = {
  name: string;
};

export type BookByNameNetworkDTO = {
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

export type BookListItemNetworkDTO = {
  id: string;
  name: string;
  price: number;
};

export type BookListNetworkDTO = WithPaginationDTO<BookListItemNetworkDTO>;

export type BookListNetworkInputDTO = PaginationInputDTO & SortInputDTO;
