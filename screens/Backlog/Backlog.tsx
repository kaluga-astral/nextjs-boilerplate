import { PageLayout } from '@example/shared';
import { Backlog } from '@example/modules/BacklogModule';

export const BacklogScreen = () => {
  return (
    <PageLayout
      header={{ title: 'Бэклог' }}
      content={{
        children: <Backlog />,
      }}
    />
  );
};
