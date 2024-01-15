import { makeAutoObservable } from 'mobx';

export class <FTName | capitalize> {
  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
  }
}

export const create<FTName | pascalcase> = () => new <FTName | capitalize>();
