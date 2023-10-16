import {
  QueryClient,
  QueryFetchPolicy,
  queryClient as queryClientInstance,
} from '@example/shared';

import {
  UserContactNetworkDTO,
  UserNetworkSources,
  UserPersonNetworkDTO,
  userNetworkSources as userNetworkSourcesInstance,
} from '../../sources';

import { UserRepositoryDTO } from './dto';

/**
 * @description Repository для работы с даннми юзере
 * */
export class UserRepository {
  public fullInfoCacheKey = ['fullInfoCacheKey'];

  public contactInfoCacheKey = ['contactInfoCacheKey'];

  public personInfoCacheKey = ['personInfoCacheKey'];

  constructor(
    private readonly userNetworkSources: UserNetworkSources,
    private readonly queryClient: QueryClient,
  ) {
    this.userNetworkSources = userNetworkSources;
    this.queryClient = queryClient;
  }

  /**
   * @description Получение полной информации о юзере
   * */
  public getFullInfo = (params?: { fetchPolicy?: QueryFetchPolicy }) =>
    this.queryClient.fetchQuery<UserRepositoryDTO.UserFullInfoDTO>(
      this.fullInfoCacheKey,
      async () => {
        const [contactInfo, personInfo] = await Promise.all([
          this.getContactInfo(params),
          this.getPersonInfo(params),
        ]);

        return {
          ...contactInfo,
          ...personInfo,
        };
      },
      params,
    );

  public getContactInfo = (params?: { fetchPolicy?: QueryFetchPolicy }) =>
    this.queryClient.fetchQuery<UserContactNetworkDTO>(
      this.contactInfoCacheKey,
      this.userNetworkSources.getContactInfo,
      params,
    );

  public getPersonInfo = (params?: { fetchPolicy?: QueryFetchPolicy }) =>
    this.queryClient.fetchQuery<UserPersonNetworkDTO>(
      this.personInfoCacheKey,
      this.userNetworkSources.getPersonInfo,
      params,
    );
}

export const userRepository = new UserRepository(
  userNetworkSourcesInstance,
  queryClientInstance,
);
