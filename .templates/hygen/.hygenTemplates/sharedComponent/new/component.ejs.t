---
to: <%=h.sharedComponentsPath(`${h.inflection.camelize(name, false)}/${h.inflection.camelize(name, false)}.tsx`) %>
---

export const <%= h.inflection.camelize(name, false) %> = () => {
    return ()
};
