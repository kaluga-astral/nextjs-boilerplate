---
to:  <%=h.dataSourcesPath(`${h.inflection.camelize(name, true)}NetworkSources/${h.inflection.camelize(name, true)}NetworkSources.ts`) %>
---

import type { <%= h.inflection.camelize(name, false) %>NetworkSourcesDTO } from './dto';

export const <%= h.inflection.camelize(name, true) %>NetworkSources = {

};

export type <%=h.inflection.camelize(name, false)%>NetworkSources = typeof <%= h.inflection.camelize(name, true) %>NetworkSources;
