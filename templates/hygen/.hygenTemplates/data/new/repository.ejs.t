---
to: <%=h.dataRepositoriesPath(`${h.inflection.camelize(name, false)}Repository/${h.inflection.camelize(name, false)}Repository.ts`) %>
---

import { cacheService, type CacheService } from '<%= h.sharedPath() %>';

import { <%= h.inflection.camelize(name, true) %>NetworkSources, type <%= h.inflection.camelize(name, false)%>NetworkSources  } from '../../sources';

import type { <%= h.inflection.camelize(name, false) %>RepositoryDTO } from './dto';


export class <%= h.inflection.camelize(name, false) %>Repository {
  constructor(
    private readonly <%= h.inflection.camelize(name, true) %>NetworkSources: <%= h.inflection.camelize(name, false) %>NetworkSources,
    private readonly cache: CacheService,
  ) {
    this.<%= h.inflection.camelize(name, true) %>NetworkSources = <%= h.inflection.camelize(name, true) %>NetworkSources;
  }

}

export const <%= h.inflection.camelize(name, true) %>Repository = new <%= h.inflection.camelize(name, false) %>Repository(
  <%= h.inflection.camelize(name, true) %>NetworkSources,
  cacheService,
);
