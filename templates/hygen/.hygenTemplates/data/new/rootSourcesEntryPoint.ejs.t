---
inject: true
to: <%=h.dataSourcesPath('index.ts') %>
prepend: true
---

export * from './<%= h.inflection.camelize(name, true) %>NetworkSources';
