import { UseQueryOptions, useQuery } from '@example/shared';

import { userRepository } from './UserRepository';
import { UserRepositoryDTO } from './dto';

export const useUserFullInfoQuery = (
  options?: UseQueryOptions<UserRepositoryDTO.UserFullInfoDTO>,
) =>
  useQuery<UserRepositoryDTO.UserFullInfoDTO>(
    userRepository.fullInfoCacheKey,
    () => userRepository.getFullInfo(),
    options,
  );
