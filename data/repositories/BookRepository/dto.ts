import {
  BookByNameNetworkDTO,
  GenreListNetworkDTO,
  GenreNetworkDTO,
} from '../../sources';

export namespace BookRepositoryDTO {
  export type GenreListDTO = GenreListNetworkDTO;
  export type GenreDTO = GenreNetworkDTO;

  export type BookByNameDTO = Omit<BookByNameNetworkDTO, 'genreID'> & {
    genre: GenreDTO;
  };
}
