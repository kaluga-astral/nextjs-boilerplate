import { makeAutoObservable, runInAction } from 'mobx';

import { debounce, notify } from '@example/shared';
import type { BookRepository, BookRepositoryDTO } from '@example/data';
import { bookRepository as bookRepositoryInstance } from '@example/data';

type SubOnAutocompleteByName = (data: BookRepositoryDTO.BookByNameDTO) => void;

export class BookFormStore {
  private subOnAutocomplete?: SubOnAutocompleteByName;

  public isLoadingBookByName = false;

  constructor(
    private readonly bookRepository: BookRepository,
    private readonly notifyService: typeof notify,
  ) {
    makeAutoObservable(this);
  }

  public onAutocompleteByName = (sub: SubOnAutocompleteByName): void => {
    this.subOnAutocomplete = sub;
  };

  public findBook = debounce((name: string): void => {
    runInAction(() => {
      this.isLoadingBookByName = true;
    });

    this.bookRepository
      .getBookByNameQuery(name)
      .async()
      .then(this.subOnAutocomplete)
      .catch(() => {
        console.log('error');

        this.notifyService.info(
          'Не удалось автоматически заполнить форму по имени книги',
        );
      })
      .finally(() => {
        runInAction(() => {
          this.isLoadingBookByName = false;
        });
      });
  }, 1000);
}

export const createBookFormStore = () =>
  new BookFormStore(bookRepositoryInstance, notify);
