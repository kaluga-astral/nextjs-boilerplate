import { ActionType } from '../../enums';
import { BACKLOG_DIALOG_HEADING } from '../constants';

const backlogDialogFixture = {
  actionType: ActionType.create,
  isOpened: false,
  heading: BACKLOG_DIALOG_HEADING.create,
  isLoading: false,
};

export const buildBacklogDialogFixture = (
  overrides?: Partial<typeof backlogDialogFixture>,
) => ({
  ...structuredClone(backlogDialogFixture),
  ...overrides,
});
