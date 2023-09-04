import { createContext } from 'react';

import { BacklogStore } from '../../domain';

export const BacklogStoreContext = createContext<
  BacklogStore | Record<string, never>
>({});
