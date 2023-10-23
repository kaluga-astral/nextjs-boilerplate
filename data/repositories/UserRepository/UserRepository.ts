import { CacheService, cacheService } from '@example/shared';

import {
  UserNetworkSources,
  userNetworkSources as userNetworkSourcesInstance,
} from '../../sources';

import { UserRepositoryDTO } from './dto';

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
      this.userNetworkSources.getContactInfo,
    );

  public getPersonInfoQuery = () =>
    this.cache.createQuery<UserRepositoryDTO.UserPersonDTO>(
      this.contactInfoCacheKey,
      this.userNetworkSources.getPersonInfo,
    );
}

export const userRepository = new UserRepository(
  userNetworkSourcesInstance,
  cacheService,
);
