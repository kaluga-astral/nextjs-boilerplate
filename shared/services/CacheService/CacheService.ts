import type { Mutation, Query } from '@astral/mobx-query';
import { MobxQuery } from '@astral/mobx-query';

import type { ApiDataError } from '../ApiHttpClient';

export const createCacheService = () =>
  new MobxQuery<ApiDataError>({
    enabledAutoFetch: true,
  });

export const cacheService = createCacheService();

export { MobxQuery as CacheService };

export type { Query as CacheQuery, Mutation as CacheMutation };
