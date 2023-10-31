import { makeAutoObservable } from 'mobx';

import {
  CartRepository,
  cartRepository as cartRepositoryInstance,
} from '@example/data';
import { formatPriceToView } from '@example/shared';

import {
  ProductCartManagerStore,
  createProductCartManagerStore,
} from '../../../domain';

export type ListItem = {
  id: string;
  name: string;
  price: string;
  itemStore: ProductCartManagerStore;
};

export class CartGoodsListStore {
  constructor(private readonly cartRepository: CartRepository) {
    makeAutoObservable(this);
  }

  private get listQuery() {
    return this.cartRepository.getGoodsQuery();
  }

  public get isLoading() {
    return this.listQuery.isLoading;
  }

  public get errors(): string[] | undefined {
    return this.listQuery.error?.errors.map(({ message }) => message);
  }

  public get list(): ListItem[] {
    const data = this.listQuery.data || [];

    return data.map(({ id, name, price }) => ({
      price: formatPriceToView(price),
      id,
      name,
      itemStore: createProductCartManagerStore(id),
    }));
  }

  public refetchList = () => {
    this.listQuery.sync();
  };
}

export const createCartGoodsListStore = () =>
  new CartGoodsListStore(cartRepositoryInstance);
