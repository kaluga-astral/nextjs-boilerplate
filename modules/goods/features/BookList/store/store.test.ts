import { when } from 'mobx';

import { BookRepository, bookRepositoryFaker } from '@example/data';
import { mock } from '@example/shared/_tests';
import { cacheService } from '@example/shared';

import { GoodsListStore } from './store';

describe('GoodsListStore', () => {
  it('Форматирует list для отображения', async () => {
    const fakeBookList = bookRepositoryFaker.makeBookList(2, { price: 1000 });
    const fakeBookListItem = fakeBookList.data[0];

    const bookRepositoryStub = mock<BookRepository>({
      getBookListQuery: () =>
        cacheService.createQuery(['id'], async () => fakeBookList),
    });
    const sut = new GoodsListStore(bookRepositoryStub);

    // ждем автоматической загрузки данных
    await when(() => Boolean(sut.list?.length));

    expect(sut.list[0]).toContain({
      id: fakeBookListItem.id,
      name: fakeBookListItem.name,
      price: '1 000 руб.',
    });
  });

  // with sources stub
  // it('Форматирует list для отображения', async () => {
  //   const fakeBookList = bookRepositoryFaker.makeBookList(2, { price: 1000 });
  //   const fakeBookListItem = fakeBookList.data[0];
  //
  //   const bookNetworkSourcesStub = mock<BookNetworkSources>({
  //     getBookList: async () => makeFakeSourceRes(fakeBookList),
  //   });
  //   const sut = new GoodsListStore(
  //     new BookRepository(bookNetworkSourcesStub, cacheService),
  //   );
  //
  //   // ждем автоматической загрузки данных
  //   await when(() => Boolean(sut.list?.length));
  //
  //   expect(sut.list[0]).toContain({
  //     id: fakeBookListItem.id,
  //     name: fakeBookListItem.name,
  //     price: '1 000 руб.',
  //   });
  // });
});
