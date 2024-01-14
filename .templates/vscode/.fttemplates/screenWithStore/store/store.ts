import { makeAutoObservable } from 'mobx';

export class <FTName | capitalize>ScreenStore {
  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
  }
}

export const create<FTName | pascalcase>ScreenStore = () => new <FTName | capitalize>ScreenStore();
