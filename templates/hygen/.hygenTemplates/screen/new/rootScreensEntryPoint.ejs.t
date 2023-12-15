---
inject: true
to: <%=h.screensPath(`index.ts`) %>
prepend: true
---

export * from './<%= h.inflection.camelize(name, false) %>';
