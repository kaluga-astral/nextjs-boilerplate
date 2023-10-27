import { observer, useLocalObservable } from 'mobx-react-lite';

import { CartGoodsList } from '@example/modules/cart';
import { Button, Grid, PageLayout, createFlagStore } from '@example/shared';

export const CartScreen = observer(() => {
  const {
    flag: isOpenModal,
    setTrue: openModal,
    setFalse: closeModal,
  } = useLocalObservable(createFlagStore);

  return (
    <PageLayout
      header={{ title: 'Корзина' }}
      content={{
        children: (
          <Grid rowSpacing={4}>
            <CartGoodsList />
            <Button>Оплатить</Button>
          </Grid>
        ),
      }}
    />
  );
});
