import { observer, useLocalObservable } from 'mobx-react-lite';

import { Badge, CartOutlineMd, IconButton } from '@example/shared';

import { createCartBadgeStore } from './store';

export const CartBadge = observer(() => {
  const { isAccessCount, count, redirectToCart } =
    useLocalObservable(createCartBadgeStore);

  return (
    <Badge color="error" badgeContent={isAccessCount ? count : undefined}>
      <IconButton onClick={redirectToCart}>
        <CartOutlineMd />
      </IconButton>
    </Badge>
  );
});
