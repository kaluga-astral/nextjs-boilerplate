import { MobxQuery } from '@astral/mobx-query';

export const cacheService = new MobxQuery({ enabledAutoFetch: true });

export { MobxQuery as CacheService };
