import { ApiDataError, CacheService, cacheService } from '@example/shared';

import { BookNetworkSources, fakeBookNetworkSources } from '../../sources';

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

  public getGenreByIDQuery = (id: string) =>
    this.cache.createQuery(
      ['genre', id],
      (): Promise<BookRepositoryDTO.GenreDTO> =>
        this.bookNetworkSources.getGenreByID(id).then(({ data }) => data),
    );

  public getGenreListQuery = () =>
    this.cache.createQuery(
      ['genre-list'],
      (): Promise<BookRepositoryDTO.GenreListDTO> =>
        this.bookNetworkSources.getGenreList().then(({ data }) => data),
    );

  public getBookByNameQuery = (name: string) =>
    this.cache.createQuery<BookRepositoryDTO.BookByNameDTO, ApiDataError>(
      ['book-by-name', name],
      async () => {
        const { data } = await this.bookNetworkSources.getBookByName({
          name,
        });

        const { genreID, ...book } = data;

        const genre = await this.getGenreByIDQuery(genreID).async();

        return { ...book, genre };
      },
    );

  public getBookListQuery = (params: BookRepositoryDTO.BookListInputDTO) =>
    this.cache.createQuery<BookRepositoryDTO.BookListDTO>(
      [this.bookListBaseKey, params],
      async () =>
        this.bookNetworkSources.getBookList(params).then(({ data }) => data),
    );
}

export const bookRepository = new BookRepository(
  fakeBookNetworkSources,
  cacheService,
);
