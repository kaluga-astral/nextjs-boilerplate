import { useContext, useEffect } from 'react';
import { observer } from 'mobx-react-lite';

import { ContentState, List } from '@example/shared';

import { BacklogPreview } from './BacklogPreview';
import { ListWrapperContainer } from './styled';
import { BacklogEmpty } from './BacklogEmpty';
import { BacklogStoreContext } from './BacklogStoreContext';

export const BacklogList = observer(() => {
  const backlogStore = useContext(BacklogStoreContext);

  const { getBacklogList, data, isLoading } = backlogStore;

  useEffect(() => {
    getBacklogList();
  }, []);

  return (
    <ListWrapperContainer>
      <ContentState isLoading={isLoading}>
        {data?.list?.length > 0 ? (
          <List>
            {data?.list.map((item) => (
              <BacklogPreview key={item.id} id={item.id} title={item.title} />
            ))}
          </List>
        ) : (
          <BacklogEmpty />
        )}
      </ContentState>
    </ListWrapperContainer>
  );
});
