import { vi } from 'vitest';

import { createRouterMock, mock } from '@example/shared/_tests';
import type { notify } from '@example/shared';
import { bookRepositoryFaker } from '@example/data';
import type { AdministrationRepository } from '@example/data';
import type { BookFormValues } from '@example/modules/administration';
import { APP_ROUTES, createCacheService } from '@example/shared';

import { CreateBookScreenStore } from './store';

describe('CreateBookScreenStore', () => {
  const makeFakeBookFormValues = (
    values?: Partial<BookFormValues>,
  ): BookFormValues => ({
    ...bookRepositoryFaker.makeBookByName(),
    pageCount: '22',
    isPresentCoAuthor: false,
    ...values,
  });

  const setupSuccessCreation = () => {
    const cacheService = createCacheService();
    const adminRepositoryMock = mock<AdministrationRepository>({
      createBookMutation: () =>
        cacheService.createMutation(async () => undefined),
    });
    const routerMock = createRouterMock();
    const notifyMock = mock<typeof notify>();
    const sut = new CreateBookScreenStore(
      adminRepositoryMock,
      routerMock,
      notifyMock,
    );

    return { sut, notifyMock, routerMock };
  };

  it('CreateBook отправляет измененные values формы в репозиторий', async () => {
    const fakeBook = bookRepositoryFaker.makeBookByName();
    const fakeBookFormValues: BookFormValues = {
      name: fakeBook.name,
      genre: fakeBook.genre,
      pageCount: '22',
      author: fakeBook.author,
      isPresentCoAuthor: false,
    };

    const cacheService = createCacheService();
    const creationBookMock = vi.fn().mockResolvedValue(undefined);
    const adminRepositoryMock = mock<AdministrationRepository>({
      createBookMutation: () => cacheService.createMutation(creationBookMock),
    });
    const notifyMock = mock<typeof notify>();

    const sut = new CreateBookScreenStore(
      adminRepositoryMock,
      createRouterMock(),
      notifyMock,
    );

    await sut.createBook(fakeBookFormValues);

    expect(creationBookMock).toBeCalledWith({
      name: fakeBook.name,
      genreID: fakeBook.genre.id,
      pageCount: 22,
      author: fakeBook.author,
    });
  });

  describe('Успешное создание книги', () => {
    it('Показывает уведомление об успешности', async () => {
      const fakeBookFormValues = makeFakeBookFormValues({ name: 'Чистый код' });
      const { sut, notifyMock } = setupSuccessCreation();

      await sut.createBook(fakeBookFormValues);
      expect(notifyMock.success).toBeCalledWith('Чистый код успешно создана');
    });

    it('Редиректит на страницу списка книг', async () => {
      const fakeBookFormValues = makeFakeBookFormValues();
      const { sut, routerMock } = setupSuccessCreation();

      await sut.createBook(fakeBookFormValues);

      expect(routerMock).toMatchObject({
        pathname: APP_ROUTES.books.getRedirectPath(),
      });
    });
  });
});
