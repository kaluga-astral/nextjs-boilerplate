---
to: <%= h.sharedFunctionsPath(`${h.inflection.camelize(name, true)}/${h.inflection.camelize(name, true)}.test.ts`) %>
---
import { describe, it } from 'vitest';

import { <%= h.inflection.camelize(name, true) %> } from './<%= h.inflection.camelize(name, true) %>';

describe('<%= h.inflection.camelize(name, true) %>', () => {
 describe('', () => {
   it('', () => {

   });
 };
});
