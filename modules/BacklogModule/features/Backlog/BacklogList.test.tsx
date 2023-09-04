import { renderWithTheme, screen } from '@example/shared/_tests';

import { mockBacklogStore } from '../../domain/stores/BacklogStore.mock';

import { BacklogStoreContext } from './BacklogStoreContext';
import { BacklogList } from './BacklogList';

// npm run tests BacklogList
describe('BacklogList: Список задач', () => {
  it('Получение непустого списка задач', async () => {
    // ARRANGE|Given
    renderWithTheme(
      <BacklogStoreContext.Provider value={mockBacklogStore()}>
        <BacklogList />
      </BacklogStoreContext.Provider>,
    );

    // ACT|When
    const task1 = screen.getByText('Вынести сервис');
    const task2 = screen.getByText('Создать раздел');

    // ASSERT|Then
    expect(task1).toBeInTheDocument();
    expect(task2).toBeInTheDocument();
  });

  it('Получение пустого списка задач', async () => {
    // ARRANGE|Given
    renderWithTheme(
      <BacklogStoreContext.Provider
        value={mockBacklogStore({ data: { list: [], totalCount: 0 } })}
      >
        <BacklogList />
      </BacklogStoreContext.Provider>,
    );

    // ACT|When
    const emptyMessage = screen.getByText('Задач нет');

    // ASSERT|Then
    expect(emptyMessage).toBeInTheDocument();
  });
});
