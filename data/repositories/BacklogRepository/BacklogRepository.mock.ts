import { mock } from '@example/shared/_tests/utils';

import { BacklogRepository } from './BacklogRepository';

export const mockBacklogRepository = mock<BacklogRepository>({
  createOneBacklogItem: vi.fn(),
  deleteBacklogListItem: vi.fn(),
  getOneBacklogItem: vi.fn(),
  getBacklogList: vi.fn(),
});
