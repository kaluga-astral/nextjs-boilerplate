import { BacklogRepositoryDTO } from '../dto';

const backlogItemFixture: BacklogRepositoryDTO.BacklogItemDTO = {
  id: 'bi1',
  title: 'Вынести сервис',
  description: 'task description',
  assignee: 'assignee-user-id',
  creator: 'creator-user-id',
  storyPoints: 2,
};

export const buildBacklogItemFixture = (
  overrides?: Partial<BacklogRepositoryDTO.BacklogItemDTO>,
): BacklogRepositoryDTO.BacklogItemDTO => ({
  ...structuredClone(backlogItemFixture),
  ...overrides,
});
