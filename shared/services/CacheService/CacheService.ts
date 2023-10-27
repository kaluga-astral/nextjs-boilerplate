import { MobxQuery, Query } from '@astral/mobx-query';

import { ApiDataError } from '../ApiHttpClient';

export const cacheService = new MobxQuery<ApiDataError>({
  enabledAutoFetch: true,
});

export { MobxQuery as CacheService };

export type { Query as CacheQuery };
