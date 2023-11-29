import { when } from 'mobx';

import { mock } from '@example/shared/_tests';
import type { BookRepository, BookRepositoryDTO } from '@example/data';
import { cacheService } from '@example/shared';
import type { notify } from '@example/shared';

import { BookFormStore } from './store';

describe('BookFormStore', () => {
  it('Показывает уведомление при ошибке загрузки данных по имени', async () => {
    const notifyMock = mock<typeof notify>();
    const bookRepositoryStub = mock<BookRepository>({
      getBookByNameQuery: () =>
        cacheService.createQuery<BookRepositoryDTO.BookByNameDTO>(
          [],
          async () => {
            throw Error();
          },
        ),
    });
    const sut = new BookFormStore(bookRepositoryStub, notifyMock);

    sut.findBook('name');
    await when(() => sut.isLoadingBookByName);
    await when(() => !sut.isLoadingBookByName);

    expect(notifyMock.info).toBeCalledWith(
      'Не удалось автоматически заполнить форму по имени книги',
    );
  });
});
