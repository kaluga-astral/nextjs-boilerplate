import { makeAutoObservable } from "mobx";

export class <FTName | capitalize>Store {
    constructor(){
        makeAutoObservable(this);
    }
}

export const create<FTName | pascalcase> = () =>
  new <FTName | capitalize>Store();
