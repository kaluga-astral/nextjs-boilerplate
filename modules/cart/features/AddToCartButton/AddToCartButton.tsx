import { observer } from 'mobx-react-lite';

import { Button, Grid, IconButton, Typography } from '@example/shared';

import type { ProductCartManagerStore } from '../../domain';

export type AddToCartButtonProps = {
  store: ProductCartManagerStore;
  className?: string;
};

export const AddToCartButton = observer(
  ({ className, store }: AddToCartButtonProps) => {
    const { hasAddedToCart, addToCart, count, removeFromCart } = store;

    if (!hasAddedToCart) {
      return <Button onClick={addToCart}>Купить</Button>;
    }

    return (
      <Grid container spacing={2} direction="column" className={className}>
        <IconButton onClick={addToCart}>-</IconButton>
        <Typography component="output" color="info">
          {count}
        </Typography>
        <IconButton onClick={removeFromCart}>+</IconButton>
      </Grid>
    );
  },
);
