---
to: <%= h.sharedFunctionsPath(`${h.inflection.camelize(name, true)}/${h.inflection.camelize(name, true)}.ts`) %>
---
export const <%= h.inflection.camelize(name, true) %> = () => {

};

