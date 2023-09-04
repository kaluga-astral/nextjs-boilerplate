import { makeAutoObservable } from 'mobx';

import {
  BacklogRepository,
  BacklogRepositoryDTO,
  backlogRepository as backlogRepositoryInstance,
} from '@example/data';

export class BacklogItemStore {
  public isLoading = false;

  public data: BacklogRepositoryDTO.BacklogItemDTO | Record<string, never> = {};

  public errorMessage = '';

  constructor(private readonly backlogRepository: BacklogRepository) {
    makeAutoObservable(this);
  }

  public async getOneBacklogItem(id: string) {
    const query = this.backlogRepository.getOneBacklogItem(id);

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

  public createOneBacklogItem(props: BacklogRepositoryDTO.BacklogItemDTO) {
    this.backlogRepository.createOneBacklogItem(this.formatToInput(props));
  }

  private formatToInput = (props: BacklogRepositoryDTO.BacklogItemDTO) => {
    const { title, description } = props;

    return {
      theme: title,
      description: description,
    };
  };
}

export const createBacklogItemStore = () =>
  new BacklogItemStore(backlogRepositoryInstance);
