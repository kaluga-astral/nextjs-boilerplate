import { makeAutoObservable } from 'mobx';

import {
  BookRepository,
  bookRepository as bookRepositoryInstance,
} from '@example/data';

export class GenreStore {
  constructor(private readonly bookRepository: BookRepository) {
    makeAutoObservable(this);
  }

  private get genreListQuery() {
    return this.bookRepository.getGenreListQuery();
  }

  public get genreList() {
    return this.genreListQuery.data?.list || [];
  }

  public get isLoading() {
    return this.genreListQuery.isLoading;
  }
}

export const createGenreStore = () => new GenreStore(bookRepositoryInstance);
