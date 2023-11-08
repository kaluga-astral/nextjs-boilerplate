import type { UserRepositoryDTO } from '@example/data';

export const getUserFullName = (
  user: Pick<UserRepositoryDTO.UserFullInfoDTO, 'name' | 'surname'>,
): string => `${user.name} ${user.surname}`;
