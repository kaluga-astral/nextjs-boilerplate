import { fireEvent, renderWithTheme, screen } from '@example/shared/_tests';

import { mockBacklogDialogStore } from '../BacklogDialog/store/BacklogDialogStore.mock';

import { BacklogPreview } from './BacklogPreview';
import { BacklogDialogStoreContext } from './BacklogDialogStoreContext';

// npm run tests BacklogPreview
describe('BacklogPreview: Список задач', () => {
  it('Редактирование задачи из списка', async () => {
    // ARRANGE|Given
    renderWithTheme(
      <BacklogDialogStoreContext.Provider value={mockBacklogDialogStore}>
        <BacklogPreview id="a1" title="Задача" />
      </BacklogDialogStoreContext.Provider>,
    );

    // ACT
    const button = screen.getByLabelText('Редактировать');

    fireEvent.click(button);
    // ASSERT
    expect(mockBacklogDialogStore.openUpdateDialog).toHaveBeenCalledWith('a1');
  });
});
