import { makeAutoObservable } from 'mobx';

export class FlagStore {
  public flag: boolean = false;

  constructor() {
    makeAutoObservable(this);
  }

  public toggle = () => {
    this.flag = !this.flag;
  };

  public setTrue = () => {
    this.flag = true;
  };

  public setFalse = () => {
    this.flag = false;
  };
}

export const createFlagStore = () => new FlagStore();
