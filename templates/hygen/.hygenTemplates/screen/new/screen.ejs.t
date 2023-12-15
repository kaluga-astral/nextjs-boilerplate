---
to: <%= h.screensPath(`${h.inflection.camelize(name, false)}/${h.inflection.camelize(name, false)}.tsx`) %>
---
import { PageLayout } from "<%= h.sharedPath() %>"

export const <%= h.inflection.camelize(name, false) %>Screen = () => {
  return (
    <PageLayout
      header={{ title: '' }}
      content={{ children: null }}
    />
  );
};
