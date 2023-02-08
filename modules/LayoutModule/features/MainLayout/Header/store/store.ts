import { makeAutoObservable } from 'mobx';

import { UserFullInfoDTO } from '@example/data';

type UserViewModel = {
  displayName: string;
};

class HeaderLogic {
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
    data: UserFullInfoDTO;
  }) => {
    const { displayName } = data;

    this.isLoading = isLoading;
    this.user = { displayName };
  };
}

export const createHeaderLogic = () => new HeaderLogic();
