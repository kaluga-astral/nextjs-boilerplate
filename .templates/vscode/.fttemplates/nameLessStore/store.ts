import { makeAutoObservable } from 'mobx';

export class <FTName | capitalize>Store {
  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
  }
}

export const create<FTName | pascalcase>Store = () => new <FTName | capitalize>Store();
