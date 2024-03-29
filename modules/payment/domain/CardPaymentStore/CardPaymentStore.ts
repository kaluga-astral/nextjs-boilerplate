import { makeAutoObservable } from 'mobx';

import type { PaymentRepository } from '@example/data';
import { paymentRepository as paymentRepositoryInstance } from '@example/data';

import type { CartStore } from '../../external';
import { cartStore as cartStoreInstance } from '../../external';

export class CardPaymentStore {
  constructor(
    private readonly cartStore: CartStore,
    private readonly paymentRepository: PaymentRepository,
  ) {
    makeAutoObservable(this);
  }

  private get paymentMutation() {
    return this.paymentRepository.createPaymentByCardMutation();
  }

  public get isLoading() {
    return this.paymentMutation.isLoading;
  }

  public get errors() {
    return this.paymentMutation.error?.errors.map(({ message }) => message);
  }

  public pay = (params?: { onSuccess: () => void }) => {
    const { onSuccess } = params || {};
    const goodsId = this.cartStore.goods.map(({ id }) => id);

    this.paymentMutation.sync({
      params: goodsId,
      onSuccess,
    });
  };
}

export const createCardPaymentStore = () =>
  new CardPaymentStore(cartStoreInstance, paymentRepositoryInstance);
