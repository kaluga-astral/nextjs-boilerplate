import {
    type CacheService,
    cacheService,
} from '@example/shared';


export class <FTName | capitalize>Repository {
  constructor(private readonly cache: CacheService) {}
}

export const <FTName | camelcase>Repository = new <FTName | capitalize>Repository(cacheService);
