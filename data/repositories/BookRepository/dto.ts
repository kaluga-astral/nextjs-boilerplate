import { BookNetworkSourcesDTO } from '../../sources';

export namespace BookRepositoryDTO {
  export type GenreListDTO = BookNetworkSourcesDTO.GenreListDTO;
  export type GenreDTO = BookNetworkSourcesDTO.GenreDTO;

  export type BookByNameDTO = Omit<
    BookNetworkSourcesDTO.BookByNameDTO,
    'genreID'
  > & {
    genre: GenreDTO;
  };

  export type BookListDTO = BookNetworkSourcesDTO.BookListDTO;
  export type BookListItemDTO = BookNetworkSourcesDTO.BookListItemDTO;
  export type BookListInputDTO = BookNetworkSourcesDTO.BookListInputDTO;
}
