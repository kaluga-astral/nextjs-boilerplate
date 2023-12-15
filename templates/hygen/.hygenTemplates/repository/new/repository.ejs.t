---
to: <%=h.dataRepositoriesPath(`${h.inflection.camelize(name, false)}Repository/${h.inflection.camelize(name, false)}Repository.ts`) %>
---

import { cacheService, type CacheService } from '<%= h.sharedPath() %>';

import type { <%= h.inflection.camelize(name, false) %>RepositoryDTO } from './dto';


export class <%= h.inflection.camelize(name, false) %>Repository {
  constructor(
    private readonly cache: CacheService,
  ) {}
}

export const <%= h.inflection.camelize(name, true) %>Repository = new <%= h.inflection.camelize(name, false)%>Repository(
  cacheService,
);
