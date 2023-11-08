import { makeAutoObservable } from 'mobx';

import type { UserRepositoryDTO } from '@example/data';

type UserViewModel = {
  displayName: string;
};

class HeaderStore {
  isLoading: boolean = true;

  user: UserViewModel = { displayName: '...' };

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
  }

  public setUserData = ({
    isLoading,
    data,
  }: {
    isLoading: boolean;
    data: UserRepositoryDTO.UserFullInfoDTO;
  }) => {
    const { displayName } = data;

    this.isLoading = isLoading;
    this.user.displayName = displayName;
  };
}

export const createHeaderStore = () => new HeaderStore();
