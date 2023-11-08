import { makeAutoObservable } from 'mobx';

import type { CartStore } from '../CartStore';
import { cartStore as cartStoreInstance } from '../CartStore';

/**
 * Store для добавления, удаления конкретного товара из корзины
 */
export class ProductCartManagerStore {
  private currentProductId: string;

  constructor(
    private readonly cartStore: CartStore,
    productID: string,
  ) {
    makeAutoObservable(this);
    this.currentProductId = productID;
  }

  public addToCart = () => {
    this.cartStore.addGoods([this.currentProductId]);
  };

  public removeFromCart = () => {
    this.cartStore.removeGoods([this.currentProductId]);
  };

  public get count() {
    const product = this.cartStore.goods.find(
      ({ id }) => id === this.currentProductId,
    );

    return product?.count;
  }

  public get hasAddedToCart() {
    return Boolean(this.count);
  }
}

export const createProductCartManagerStore = (goodsID: string) =>
  new ProductCartManagerStore(cartStoreInstance, goodsID);
