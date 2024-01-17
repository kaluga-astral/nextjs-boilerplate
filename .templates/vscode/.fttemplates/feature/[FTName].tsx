import { useState } from 'react';
import { observer } from 'mobx-react-lite';

import { create<FTName | pascalcase>Store } from './store';

export const <FTName | pascalcase> = observer(() => {
  const [store] = useState(create<FTName | pascalcase>Store);

  return ();
});
