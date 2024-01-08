---
to: <%=h.dataRepositoriesPath(`${h.inflection.camelize(name, false)}Repository/index.ts`) %>
---

export * from './<%= h.inflection.camelize(name, false) %>Repository';

export * from './dto';
