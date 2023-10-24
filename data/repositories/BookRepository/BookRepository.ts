import { CacheService, cacheService } from '@example/shared';

import {
  BookNetworkSources,
  bookNetworkSources as bookNetworkSourcesInstance,
} from '../../sources';

import { BookRepositoryDTO } from './dto';

/**
 * @description Работает с данными о книгах
 * */
export class BookRepository {
  private bookListBaseKey = 'book-list';

  constructor(
    private readonly bookNetworkSources: BookNetworkSources,
    private readonly cache: CacheService,
  ) {}

  public getGenreByID = (id: string): Promise<BookRepositoryDTO.GenreDTO> =>
    this.bookNetworkSources.getGenreByID(id).then(({ data }) => data);

  public getGenreList = (): Promise<BookRepositoryDTO.GenreListDTO> =>
    this.bookNetworkSources.getGenreList().then(({ data }) => data);

  public getBookByName = async (
    name: string,
  ): Promise<BookRepositoryDTO.BookByNameDTO> => {
    const { data } = await this.bookNetworkSources.getBookByName({
      name,
    });

    const { genreID, ...book } = data;

    const genre = await this.getGenreByID(genreID);

    return { ...book, genre };
  };

  public getBookListQuery = (params: BookRepositoryDTO.BookListInputDTO) =>
    this.cache.createQuery<BookRepositoryDTO.BookListDTO>(
      [this.bookListBaseKey, params],
      async () =>
        this.bookNetworkSources.getBookList(params).then(({ data }) => data),
    );
}

export const bookRepository = new BookRepository(
  bookNetworkSourcesInstance,
  cacheService,
);
