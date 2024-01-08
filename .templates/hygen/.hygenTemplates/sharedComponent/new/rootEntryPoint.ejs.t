---
inject: true
to: <%=h.sharedComponentsPath('index.ts') %>
prepend: true
---
export * from "./<%= h.inflection.camelize(name, false) %>";
