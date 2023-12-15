---
to: <%= h.sharedFunctionsPath(`${h.inflection.camelize(name, true)}/index.ts`) %>
---
export * from "./<%= h.inflection.camelize(name, true) %>"
