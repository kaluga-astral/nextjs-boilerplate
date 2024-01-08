---
to: <%= h.screensPath(`${h.inflection.camelize(name, true)}/${h.inflection.camelize(name, true)}/store/${h.inflection.camelize(name, false)}.test.ts`) %>
---

import { describe, it } from 'vitest';

import { <%= h.inflection.camelize(name, false) %>ScreenStore } from './store';

describe('<%= h.inflection.camelize(name, true) %>ScreenStore', () => {
 describe('', () => {
   it('', () => {

   });
 });
});
