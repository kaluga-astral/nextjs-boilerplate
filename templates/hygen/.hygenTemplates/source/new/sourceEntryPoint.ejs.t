---
to: <%=h.dataSourcesPath(`${h.inflection.camelize(name, true)}NetworkSources/index.ts`) %>
---

export * from './<%= h.inflection.camelize(name, true) %>NetworkSources';

export * from './dto';
