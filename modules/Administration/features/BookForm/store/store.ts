import { makeAutoObservable, runInAction } from 'mobx';

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

  public subscribeOnAutocompleteByName = (
    sub: SubOnAutocompleteByName,
  ): void => {
    this.subOnAutocomplete = sub;
  };

  public findBook = (name: string): void => {
    this.isLoadingBookByName = true;

    this.bookRepository
      .getBookByName(name)
      .then(this.subOnAutocomplete)
      .finally(() => {
        runInAction(() => {
          this.isLoadingBookByName = true;
        });
      });
  };
}

export const createBookFormStore = () =>
  new BookFormStore(bookRepositoryInstance);
