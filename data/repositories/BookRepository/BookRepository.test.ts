import { mock } from '@example/shared/_tests';
import { createCacheService } from '@example/shared';

import type { BookNetworkSources } from '../../sources';
import { bookNetworkSourcesFaker, makeFakeSourceRes } from '../../sources';

import { BookRepository } from './BookRepository';

describe('BookRepository', () => {
  it('getBookByNameQuery добавляет в ответ подробную информацию о поле автора', async () => {
    const genreResStub = bookNetworkSourcesFaker.makeGenre();
    const bookResStub = bookNetworkSourcesFaker.makeBookByName();

    const bookSourcesStub = mock<BookNetworkSources>({
      getBookByName: async () => makeFakeSourceRes(bookResStub),
      getGenreByID: async () => makeFakeSourceRes(genreResStub),
    });
    const sut = new BookRepository(bookSourcesStub, createCacheService());

    const bookByNameQuery = sut.getBookByNameQuery(bookResStub.name);

    const { genre } = await bookByNameQuery.async();

    expect(genre).toEqual(genreResStub);
  });
});
