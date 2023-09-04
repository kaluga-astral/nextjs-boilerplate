import { BacklogRepositoryDTO, buildBacklogFixture } from '@example/data';

export const mockBacklogItemStore = {
  data: buildBacklogFixture(),
  isLoading: false,
  errorMessage: '',
  getOneBacklogItem: async () => {
    new Promise<BacklogRepositoryDTO.BacklogDTO>((resolve) => {
      setTimeout(() => {
        resolve(buildBacklogFixture());
      }, 300);
    });
  },
  deleteBacklogListItem: vi.fn(),
};
