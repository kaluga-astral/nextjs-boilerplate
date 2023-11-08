import type { CacheService } from '@example/shared';
import { cacheService } from '@example/shared';

import type { UserNetworkSources } from '../../sources';
import { userNetworkSources as userNetworkSourcesInstance } from '../../sources';

import type { UserRepositoryDTO } from './dto';

/**
 * @description Repository для работы с даннми юзере
 * */
export class UserRepository {
  private fullInfoCacheKey = ['fullInfoCacheKey'];

  private contactInfoCacheKey = ['contactInfoCacheKey'];

  private personInfoCacheKey = ['personInfoCacheKey'];

  constructor(
    private readonly userNetworkSources: UserNetworkSources,
    private readonly cache: CacheService,
  ) {}

  public getFullInfoQuery = () =>
    this.cache.createQuery<UserRepositoryDTO.UserFullInfoDTO>(
      this.fullInfoCacheKey,
      async () => {
        const [contactInfo, personInfo] = await Promise.all([
          this.getContactInfoQuery().async(),
          this.getPersonInfoQuery().async(),
        ]);

        return {
          ...contactInfo,
          ...personInfo,
        };
      },
    );

  public getContactInfoQuery = () =>
    this.cache.createQuery<UserRepositoryDTO.UserContactDTO>(
      this.contactInfoCacheKey,
      () => this.userNetworkSources.getContactInfo().then(({ data }) => data),
    );

  public getPersonInfoQuery = () =>
    this.cache.createQuery<UserRepositoryDTO.UserPersonDTO>(
      this.personInfoCacheKey,
      () => this.userNetworkSources.getPersonInfo().then(({ data }) => data),
    );
}

export const userRepository = new UserRepository(
  userNetworkSourcesInstance,
  cacheService,
);
