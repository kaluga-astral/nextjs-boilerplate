import { makeAutoObservable } from 'mobx';

import {
  BacklogRepository,
  backlogRepository as backlogRepositoryInstance,
} from '@example/data';
import type { BacklogRepositoryDTO } from '@example/data';

export class BacklogStore {
  public isLoading = false;

  public data: BacklogRepositoryDTO.BacklogDTO | Record<string, never> = {};

  public errorMessage = '';

  constructor(private readonly backlogRepository: BacklogRepository) {
    makeAutoObservable(this, {}, { autoBind: true });
  }

  public async getBacklogList() {
    const query = this.backlogRepository.getBacklogList();

    this.isLoading = true;

    query
      .async()
      .then((data) => {
        this.data = data;
      })
      .catch((e) => {
        this.errorMessage = e.message;
      })
      .finally(() => {
        this.isLoading = false;
      });
  }

  public deleteBacklogListItem(id: string) {
    this.backlogRepository.deleteBacklogListItem(id);
  }
}

export const createBacklogStore = () =>
  new BacklogStore(backlogRepositoryInstance);
