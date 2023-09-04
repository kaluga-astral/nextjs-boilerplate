import { createContext } from 'react';

import { BacklogDialogStore } from '../BacklogDialog';

export const BacklogDialogStoreContext = createContext<
  BacklogDialogStore | Record<string, never>
>({});
