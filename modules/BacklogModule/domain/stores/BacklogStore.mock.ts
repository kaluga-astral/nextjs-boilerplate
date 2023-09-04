import { BacklogRepositoryDTO, buildBacklogFixture } from '@example/data';

import { mock } from '../../../../shared/_tests/utils';

import { BacklogStore } from './BacklogStore';

type DeepPartial<T> = {
  [K in keyof T]?: T[K] extends object ? DeepPartial<T[K]> : T[K];
};

export const mockBacklogStore = (
  overrides?: DeepPartial<() => Promise<void>> | (() => Promise<void>),
) =>
  mock<BacklogStore>({
    data: buildBacklogFixture(),
    isLoading: false,
    errorMessage: '',
    getBacklogList: async () => {
      new Promise<BacklogRepositoryDTO.BacklogDTO>((resolve) => {
        setTimeout(() => {
          resolve(buildBacklogFixture());
        }, 100);
      });
    },
    deleteBacklogListItem: vi.fn(),
    ...overrides,
  });
