import { observer } from 'mobx-react-lite';
import { useState } from 'react';

import { Badge, CartOutlineMd, IconButton } from '@example/shared';

import { createCartBadgeStore } from './store';

export const CartBadge = observer(() => {
  const [{ isAccessCount, count, redirectToCart }] =
    useState(createCartBadgeStore);

  return (
    <Badge color="error" badgeContent={isAccessCount ? count : undefined}>
      <IconButton onClick={redirectToCart}>
        <CartOutlineMd />
      </IconButton>
    </Badge>
  );
});
