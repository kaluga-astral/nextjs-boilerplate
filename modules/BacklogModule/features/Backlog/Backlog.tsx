import { useState } from 'react';
import { observer } from 'mobx-react-lite';

import { Button } from '@example/shared';

import { createBacklogItemStore, createBacklogStore } from '../../domain';
import { BacklogDialog } from '../BacklogDialog';
import { createBacklogDialogStore } from '../BacklogDialog/store';

import { BacklogStoreContext } from './BacklogStoreContext';
import { BacklogDialogStoreContext } from './BacklogDialogStoreContext';
import { BacklogList } from './BacklogList';

export const Backlog = observer(() => {
  const [backlogStore] = useState(createBacklogStore);
  const [backlogItemStore] = useState(createBacklogItemStore);
  const [backlogDialogStore] = useState(() =>
    createBacklogDialogStore(backlogItemStore),
  );
  const { openCreateDialog } = backlogDialogStore;

  const handleOpen = () => {
    openCreateDialog();
  };

  return (
    <BacklogStoreContext.Provider value={backlogStore}>
      <BacklogDialogStoreContext.Provider value={backlogDialogStore}>
        <Button variant="light" onClick={handleOpen}>
          Создать задачу
        </Button>
        <BacklogList />
        <BacklogDialog />
      </BacklogDialogStoreContext.Provider>
    </BacklogStoreContext.Provider>
  );
});
