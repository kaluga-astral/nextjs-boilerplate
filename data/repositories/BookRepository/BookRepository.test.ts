import { mock } from '@example/shared/_tests';
import { createCacheService } from '@example/shared';

import type { BookNetworkSources } from '../../sources';
import { bookNetworkSourcesFaker, makeFakeSourceRes } from '../../sources';

import { BookRepository } from './BookRepository';

describe('BookRepository', () => {
  it('Запрос книги по имени отдает подробную информацию об авторе', async () => {
    const fakeGenreRes = bookNetworkSourcesFaker.makeGenre();
    const fakeBookRes = bookNetworkSourcesFaker.makeBookByName();

    const bookSourcesStub = mock<BookNetworkSources>({
      getBookByName: async () => makeFakeSourceRes(fakeBookRes),
      getGenreByID: async () => makeFakeSourceRes(fakeGenreRes),
    });
    const sut = new BookRepository(bookSourcesStub, createCacheService());

    const bookByNameQuery = sut.getBookByNameQuery(fakeBookRes.name);

    const { genre } = await bookByNameQuery.async();

    expect(genre).toEqual(fakeGenreRes);
  });
});
