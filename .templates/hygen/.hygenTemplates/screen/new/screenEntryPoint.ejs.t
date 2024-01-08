---
to: <%=h.screensPath(`${h.inflection.camelize(name, false)}/index.ts`) %>
---

export * from './<%= h.inflection.camelize(name, false) %>';

