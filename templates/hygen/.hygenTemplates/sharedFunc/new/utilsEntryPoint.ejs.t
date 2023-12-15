---
inject: true
to: <%= h.sharedFunctionsPath(`index.ts`) %>
append: true
---
export * from "./<%= h.inflection.camelize(name, true) %>"
