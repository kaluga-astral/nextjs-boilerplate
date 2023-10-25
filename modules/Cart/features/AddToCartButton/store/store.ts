import { makeAutoObservable } from 'mobx';

import { CartStore, cartStore as cartStoreInstance } from '../../../domain';

export class AddToCartButtonStore {
  private currentGoodsId: string;

  constructor(private readonly cartStore: CartStore, goodsID: string) {
    makeAutoObservable(this);
    this.currentGoodsId = goodsID;
  }

  public addToCart = () => {
    this.cartStore.addGoods([this.currentGoodsId]);
  };

  public removeFromCart = () => {
    this.cartStore.removeGoods([this.currentGoodsId]);
  };

  public get count() {
    return this.cartStore.goods.find(({ id }) => id === this.currentGoodsId)
      ?.count;
  }

  public get hasAddedToCart() {
    return Boolean(this.count);
  }
}

export const createAddToCartButtonStore = (goodsID: string) =>
  new AddToCartButtonStore(cartStoreInstance, goodsID);
