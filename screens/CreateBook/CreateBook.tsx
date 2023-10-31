import { observer, useLocalObservable } from 'mobx-react-lite';

import { PageLayout } from '@example/shared';
import { BookForm } from '@example/modules/administration';

import { createBookScreenStore } from './store';

export const CreateBookScreen = observer(() => {
  const { createBook } = useLocalObservable(createBookScreenStore);

  return (
    <PageLayout
      header={{ title: 'Добавить книгу' }}
      content={{
        children: <BookForm onSubmit={createBook} />,
        isPaddingDisabled: false,
      }}
    />
  );
});
