import { observer } from 'mobx-react-lite';

import { Description, Grid, Typography } from '@example/shared';

import { AddToCartButton } from '../../AddToCartButton';
import { ListItem } from '../store';

type Props = ListItem;

export const CartGoodsListItem = observer(
  ({ name, price, itemStore }: Props) => {
    return (
      <Grid component="div" spacing={2} columns="2fr 1fr 1fr">
        <Typography component="span">{name}</Typography>
        <Description>
          <Description.Name>Цена</Description.Name>
          <Description.Value>{price}</Description.Value>
        </Description>
        <AddToCartButton store={itemStore} />
      </Grid>
    );
  },
);
