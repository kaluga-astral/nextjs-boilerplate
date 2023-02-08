import { UseQueryOptions, useQuery } from '@example/shared';

import { userRepository } from './UserRepository';
import { UserFullInfoDTO } from './dto';

export const useUserFullInfoQuery = (
  options?: UseQueryOptions<UserFullInfoDTO>,
) =>
  useQuery<UserFullInfoDTO>(
    userRepository.fullInfoCacheKey,
    () => userRepository.getFullInfo(),
    options,
  );
