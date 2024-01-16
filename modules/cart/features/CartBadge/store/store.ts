import { makeAutoObservable } from 'mobx';

import type { CartRepository } from '@example/data';
import { cartRepository as cartRepositoryInstance } from '@example/data';
import { APP_ROUTES, router } from '@example/shared';

export class CartBadgeStore {
  constructor(private readonly cartRepository: CartRepository) {
    makeAutoObservable(this);
  }

  private get countQuery() {
    return this.cartRepository.getGoodsCountQuery();
  }

  public get count() {
    return this.countQuery.data;
  }

  public get isAccessCount() {
    return this.countQuery.isSuccess;
  }

  public redirectToCart = () => {
    router.navigate(APP_ROUTES.cart.getRedirectPath());
  };
}

export const createCartBadgeStore = () =>
  new CartBadgeStore(cartRepositoryInstance);
