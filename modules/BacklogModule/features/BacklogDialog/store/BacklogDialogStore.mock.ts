import { buildBacklogItemFixture } from '@example/data';

import { mock } from '../../../../../shared/_tests/utils';

import { buildBacklogDialogFixture } from './__fixtures__';
import { BacklogDialogStore } from './BacklogDialogStore';

vi.mock('@example/modules/BacklogModule/domain');

export const mockBacklogDialogStore = mock<BacklogDialogStore>({
  ...buildBacklogItemFixture(),
  ...buildBacklogDialogFixture(),
  closeDialog: vi.fn(),
  openCreateDialog: vi.fn(),
  openUpdateDialog: vi.fn(),
});
