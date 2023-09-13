import { makeAutoObservable, runInAction } from 'mobx';

import {
  BookRepository,
  bookRepository as bookRepositoryInstance,
} from '@example/data';

import { BookFormValues } from '../../useForm';

export class GenreStore {
  public genreList: Array<BookFormValues['genre']> = [];

  public isLoading = true;

  constructor(private readonly bookRepository: BookRepository) {
    makeAutoObservable(this);

    bookRepository.getGenreList().then(({ list }) => {
      runInAction(() => {
        this.genreList = list;
      });
    });
  }
}

export const createGenreStore = () => new GenreStore(bookRepositoryInstance);
