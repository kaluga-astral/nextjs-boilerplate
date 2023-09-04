import { buildBacklogItemFixture } from '@example/data';
import { mockBacklogRepository } from '@example/data/repositories/BacklogRepository/BacklogRepository.mock';

import { BacklogItemStore } from './BacklogItemStore';

// Создайте экземпляр BacklogItemStore, передавая мокированный backlogRepository
const backlogItemStore = new BacklogItemStore(mockBacklogRepository);

// npm run tests BacklogItemStore
describe('BacklogItemStore', () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  it('вызывает createOneBacklogItem с отформатированными данными', () => {
    // Создаём фикстуру
    const backlogItemData = buildBacklogItemFixture();

    // Вызываем метод createOneBacklogItem
    backlogItemStore.createOneBacklogItem(backlogItemData);

    // Проверяем, что createOneBacklogItem был вызван с отформатированными данными
    expect(mockBacklogRepository.createOneBacklogItem).toHaveBeenCalledWith({
      theme: backlogItemData.title,
      description: backlogItemData.description,
    });
  });
});
