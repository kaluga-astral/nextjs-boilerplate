import {
  type CacheService,
  cacheService,
} from '@example/shared';

export class <FTName | capitalize> {
  constructor(private readonly cache: CacheService) {}
}

export const <FTName | camelcase> = new <FTName | capitalize>(cacheService);
