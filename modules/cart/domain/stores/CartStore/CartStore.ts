import { makeAutoObservable } from 'mobx';

import type { CartRepository } from '@example/data';
import { cartRepository as cartRepositoryInstance } from '@example/data';
import { notify } from '@example/shared';

export class CartStore {
  constructor(
    private readonly cartRepository: CartRepository,
    private readonly notifyService: typeof notify,
  ) {
    makeAutoObservable(this);
  }

  private get goodsQuery() {
    return this.cartRepository.getGoodsQuery();
  }

  private get goodsCountQuery() {
    return this.cartRepository.getGoodsCountQuery();
  }

  public get count() {
    return this.goodsCountQuery.data;
  }

  public get goods() {
    return this.goodsQuery.data || [];
  }

  public addGoods = (goodsID: string[]) => {
    this.cartRepository.addGoods(goodsID).catch((err: Error) => {
      this.notifyService.error(err.message);
    });
  };

  public removeGoods = (goodsID: string[]) => {
    this.cartRepository.removeGoods(goodsID).catch((err: Error) => {
      this.notifyService.error(err.message);
    });
  };
}

export const cartStore = new CartStore(cartRepositoryInstance, notify);
