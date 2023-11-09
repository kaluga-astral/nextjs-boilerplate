import { vi } from 'vitest';

import { createRouterMock, mock } from '@example/shared/_tests';
import type { notify } from '@example/shared';
import { bookRepositoryFaker } from '@example/data';
import type { AdministrationRepository } from '@example/data';
import type { BookFormValues } from '@example/modules/administration';
import { APP_ROUTES, cacheService } from '@example/shared';

import { CreateBookScreenStore } from './store';

describe('CreateBookScreenStore', () => {
  const makeFakeBookFormValues = (): BookFormValues => ({
    ...bookRepositoryFaker.makeBookByName(),
    name: 'Чистый код',
    pageCount: '22',
    isPresentCoAuthor: false,
  });

  const setupSuccessCreation = () => {
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

  it('При создании книги форматирует values формы в данные для репозитория', async () => {
    const fakeBook = bookRepositoryFaker.makeBookByName();
    const fakeBookFormValues: BookFormValues = {
      name: fakeBook.name,
      genre: fakeBook.genre,
      pageCount: '22',
      author: fakeBook.author,
      isPresentCoAuthor: false,
    };

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

  it('После успешного создании книги появляется уведомление об успешности', async () => {
    const fakeBookFormValues = makeFakeBookFormValues();
    const { sut, notifyMock } = setupSuccessCreation();

    await sut.createBook(fakeBookFormValues);
    expect(notifyMock.success).toBeCalledWith('Чистый код успешно создана');
  });

  it('После успешного создании книги происходит редирект на страницу списка книг', async () => {
    const fakeBookFormValues = makeFakeBookFormValues();
    const { sut, routerMock } = setupSuccessCreation();

    await sut.createBook(fakeBookFormValues);

    expect(routerMock).toMatchObject({
      pathname: APP_ROUTES.books.getRedirectPath(),
    });
  });
});