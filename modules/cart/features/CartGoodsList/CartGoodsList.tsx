import { observer, useLocalObservable } from 'mobx-react-lite';

import { ContentState, Grid } from '@example/shared';

import { createCartGoodsListStore } from './store';
import { CartGoodsListItem } from './ListItem';

export type CartGoodsListProps = {};

export const CartGoodsList = observer(({}: CartGoodsListProps) => {
  const { list, isLoading, error, refetchList } = useLocalObservable(
    createCartGoodsListStore,
  );

  return (
    <ContentState
      isLoading={isLoading}
      errorState={
        error && {
          errorList: error.errors.map(({ message }) => message),
          // TODO: удалить после фикса бага с required параметром для imgAlt
          imgAlt: 'Разрыв соединения',
          onRetry: refetchList,
        }
      }
    >
      <Grid component="ul" spacing={2}>
        {list.map((data) => (
          <li key={data.id}>
            <CartGoodsListItem {...data} />
          </li>
        ))}
      </Grid>
    </ContentState>
  );
});
