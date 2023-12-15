---
inject: true
to: <%=h.dataRepositoriesPath(`index.ts`) %>
prepend: true
---

export * from './<%= h.inflection.camelize(name, false) %>Repository';
