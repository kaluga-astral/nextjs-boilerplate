import { makeAutoObservable, runInAction } from 'mobx';

import { debounce } from '@example/shared';
import {
  BookRepository,
  BookRepositoryDTO,
  bookRepository as bookRepositoryInstance,
} from '@example/data';

type SubOnAutocompleteByName = (data: BookRepositoryDTO.BookByNameDTO) => void;

export class BookFormStore {
  private subOnAutocomplete?: SubOnAutocompleteByName;

  public isLoadingBookByName = false;

  constructor(private readonly bookRepository: BookRepository) {
    makeAutoObservable(this);
  }

  public onAutocompleteByName = (sub: SubOnAutocompleteByName): void => {
    this.subOnAutocomplete = sub;
  };

  public findBook = debounce((name: string): void => {
    this.isLoadingBookByName = true;

    this.bookRepository
      .getBookByName(name)
      .then(this.subOnAutocomplete)
      .finally(() => {
        runInAction(() => {
          this.isLoadingBookByName = false;
        });
      });
  }, 1000);
}

export const createBookFormStore = () =>
  new BookFormStore(bookRepositoryInstance);
