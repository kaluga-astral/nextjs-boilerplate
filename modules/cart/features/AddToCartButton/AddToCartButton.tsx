import { observer, useLocalObservable } from 'mobx-react-lite';

import { Button, Grid, IconButton, Typography } from '@example/shared';

import { createAddToCartButtonStore } from './store';

export type AddToCartButtonProps = {
  goodsID: string;
  className?: string;
};

export const AddToCartButton = observer(
  ({ goodsID, className }: AddToCartButtonProps) => {
    const { hasAddedToCart, addToCart, count, removeFromCart } =
      useLocalObservable(() => createAddToCartButtonStore(goodsID));

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
