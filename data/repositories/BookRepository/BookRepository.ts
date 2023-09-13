import {
  BookNetworkSources,
  bookNetworkSources as bookNetworkSourcesInstance,
} from '../../sources';

import { BookRepositoryDTO } from './dto';

/**
 * @description Работает с данными о книгах
 * */
export class BookRepository {
  constructor(private readonly bookNetworkSources: BookNetworkSources) {
    this.bookNetworkSources = bookNetworkSourcesInstance;
  }

  public getGenreByID = (id: string): Promise<BookRepositoryDTO.GenreDTO> =>
    this.bookNetworkSources.getGenreByID(id);

  public getGenreList = (): Promise<BookRepositoryDTO.GenreListDTO> =>
    this.bookNetworkSources.getGenreList();

  public getBookByName = async (
    name: string,
  ): Promise<BookRepositoryDTO.BookByNameDTO> => {
    const { genreID, ...data } = await this.bookNetworkSources.getBookByName({
      name,
    });

    const genre = await this.getGenreByID(genreID);

    return { ...data, genre };
  };
}

export const bookRepository = new BookRepository(bookNetworkSourcesInstance);
