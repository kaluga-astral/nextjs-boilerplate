import {
  type CacheService,
  cacheService,
} from '@example/shared';


class <FTName | capitalize>Repository = {
    constructor(private readonly cache: CacheService) {}
}

export const <FTName | camelcase>Repository = new <FTName | capitalize>Repository(
  cacheService,
);
