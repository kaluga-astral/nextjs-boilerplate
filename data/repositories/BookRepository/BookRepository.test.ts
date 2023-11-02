import { mock } from '@example/shared/_tests';
import { cacheService } from '@example/shared';

import { BookNetworkSources, bookNetworkSourcesFaker } from '../../sources';
import { makeFakeSourceRes } from '../../sources/_tests';

import { BookRepository } from './BookRepository';

describe('BookRepository', () => {
  it('getBookByNameQuery добавляет в ответ подробную информацию о поле автора', async () => {
    const genreResStub = bookNetworkSourcesFaker.makeGenre();
    const bookResStub = bookNetworkSourcesFaker.makeBookByName();

    const bookSourcesStub = mock<BookNetworkSources>({
      getBookByName: async () => makeFakeSourceRes(bookResStub),
      getGenreByID: async () => makeFakeSourceRes(genreResStub),
    });
    const sut = new BookRepository(bookSourcesStub, cacheService);

    const bookByNameQuery = sut.getBookByNameQuery(bookResStub.name);

    const { genre } = await bookByNameQuery.async();

    expect(genre).toEqual(genreResStub);
  });
});
