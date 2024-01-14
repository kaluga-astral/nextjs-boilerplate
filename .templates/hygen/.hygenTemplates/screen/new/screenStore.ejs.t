---
to: <%= h.screensPath(`${h.inflection.camelize(name, false)}/${h.inflection.camelize(name, false)}/store/[FTName].ts`) %>
---
import { makeAutoObservable } from 'mobx';

export class <%= h.inflection.camelize(name, false) %>ScreenStore {
  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
  }
}

export const create<%= h.inflection.camelize(name, true) %>ScreenStore = new <%= h.inflection.camelize(name, false)%>ScreenStore();
