import { makeAutoObservable, runInAction } from 'mobx';

import {
  BookRepository,
  BookRepositoryDTO,
  bookRepository as bookRepositoryInstance,
} from '@example/data';

export class GenreStore {
  public genreList: BookRepositoryDTO.GenreDTO[] = [];

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
