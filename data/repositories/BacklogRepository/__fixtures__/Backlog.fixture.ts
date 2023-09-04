import { BacklogRepositoryDTO } from '../dto';

const backlogFixture: BacklogRepositoryDTO.BacklogDTO = {
  totalCount: 3,
  list: [
    {
      id: 'bi1',
      storyPoints: 2,
      title: 'Вынести сервис',
    },
    {
      id: 'bi2',
      storyPoints: 5,
      title: 'Создать раздел',
    },
    {
      id: 'bi3',
      storyPoints: 8,
      title: 'Написать логику',
    },
  ],
};

export const buildBacklogFixture = (
  overrides?: Partial<BacklogRepositoryDTO.BacklogDTO>,
): BacklogRepositoryDTO.BacklogDTO => ({
  ...structuredClone(backlogFixture),
  ...overrides,
});
