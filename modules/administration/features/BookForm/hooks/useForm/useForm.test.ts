import { when } from 'mobx';

import { mock, rtl } from '@example/shared/_tests';
import { bookRepositoryFaker } from '@example/data';
import type { BookRepository } from '@example/data';
import { cacheService, faker, v } from '@example/shared';
import type { notify } from '@example/shared';

import { BookFormStore } from '../../store';

import { useBookForm } from './useForm';

describe('useBookForm', () => {
  describe('Автозаполнение полей формы', () => {
    it('Происходит при изменении поля name', async () => {
      const fakeBook = bookRepositoryFaker.makeBookByName();

      const bookRepositoryStub = mock<BookRepository>({
        getBookByNameQuery: () =>
          cacheService.createQuery(['id'], async () => fakeBook),
      });
      const notifyMock = mock<typeof notify>();

      const bookFormStore = new BookFormStore(bookRepositoryStub, notifyMock);

      const { result } = rtl.renderHook(() =>
        useBookForm(bookFormStore, { onSubmit: async () => {} }),
      );
      const sut = result.current;

      rtl.act(() => {
        sut.form.setValue('name', faker.person.firstName());
      });

      await when(() => bookFormStore.isLoadingBookByName);
      await when(() => !bookFormStore.isLoadingBookByName);

      const { genre, author } = sut.form.getValues();

      expect(genre).toEqual(fakeBook.genre);
      expect(author).toEqual(fakeBook.author);
    });
  });

  describe('Соавтор', () => {
    it('По-дефолту отсутствует', async () => {
      const bookRepositoryStub = mock<BookRepository>();
      const notifyMock = mock<typeof notify>();

      const bookFormStore = new BookFormStore(bookRepositoryStub, notifyMock);

      const { result } = rtl.renderHook(() =>
        useBookForm(bookFormStore, { onSubmit: async () => {} }),
      );
      const sut = result.current;

      expect(sut.isPresentCoAuthor).toBeFalsy();
    });

    it('Обязателен, если isPresentCoAuthor true', async () => {
      const bookRepositoryStub = mock<BookRepository>();
      const notifyMock = mock<typeof notify>();

      const bookFormStore = new BookFormStore(bookRepositoryStub, notifyMock);

      const { result } = rtl.renderHook(() =>
        useBookForm(bookFormStore, {
          onSubmit: async () => {},
          initialValues: {
            isPresentCoAuthor: true,
            author: {},
            coAuthor: {},
          },
        }),
      );
      const sut = result.current;

      await rtl.waitFor(() => {
        sut.form.trigger();
      });

      const surnameField = sut.form.getFieldState('coAuthor.surname');
      const nameField = sut.form.getFieldState('coAuthor.name');

      expect(surnameField.error?.message).toBe(v.REQUIRED_ERROR_INFO.message);
      expect(nameField.error?.message).toBe(v.REQUIRED_ERROR_INFO.message);
    });
  });
});
