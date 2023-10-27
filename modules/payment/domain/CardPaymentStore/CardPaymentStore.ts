import { makeAutoObservable } from 'mobx';

import {
  PaymentRepository,
  paymentRepository as paymentRepositoryInstance,
} from '@example/data';

import { CartStore, cartStore as cartStoreInstance } from '../../external';

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

  public pay = ({ onSuccess }: { onSuccess: () => void }) => {
    const goodsId = this.cartStore.goods.map(({ id }) => id);

    this.paymentMutation.sync({ params: goodsId, onSuccess });
  };
}

export const createCardPaymentStore = () =>
  new CardPaymentStore(cartStoreInstance, paymentRepositoryInstance);
