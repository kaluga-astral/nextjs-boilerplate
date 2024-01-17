import { useState } from 'react';
import { observer } from 'mobx-react-lite';

import { PageLayout } from '@example/shared';

import { create<FTName | pascalcase>ScreenStore } from './store';

export const <FTName | pascalcase>Screen = observer(() => {
  const [store] = useState(create<FTName | pascalcase>ScreenStore);

  return (
    <PageLayout
      header={{ title: '' }}
      content={{ children: null, isPaddingDisabled: false }}
    />
  );
});
