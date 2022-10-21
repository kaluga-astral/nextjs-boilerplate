import { createStylesCache as createCache } from '@astral/ui/server';

// TODO: move config to @astral/ui
export function createStylesCache() {
  return createCache({ key: 'css', prepend: true });
}

export default createStylesCache;
