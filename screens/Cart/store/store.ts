import { makeAutoObservable } from 'mobx';

import {
  CardPaymentStore,
  createCardPaymentStore,
} from '@example/modules/payment';
import { APP_ROUTES, Router, createFlagStore, router } from '@example/shared';

export class CartScreenStore {
  private flagStore = createFlagStore();

  // TODO: понять как работать с приватными зависимостями, которые не должны быть observable
  readonly #routerService: Router;

  constructor(
    private readonly cardPaymentStore: CardPaymentStore,
    routerService: Router,
  ) {
    makeAutoObservable(this);
    this.#routerService = routerService;
  }

  public get isOpenModal() {
    return this.flagStore.flag;
  }

  public openModal = () => {
    this.pay();
    this.flagStore.setTrue();
  };

  public closeModal = () => {
    this.flagStore.setFalse();
  };

  public get isLoadingPayment() {
    return this.cardPaymentStore.isLoading;
  }

  public get isErrorPayment() {
    return Boolean(this.errors);
  }

  public get errors() {
    return this.cardPaymentStore.errors;
  }

  public pay = () => {
    this.cardPaymentStore.pay({
      onSuccess: () => {
        this.#routerService.push(APP_ROUTES.cart.getRedirectPath());
      },
    });
  };
}

export const createCartScreenStore = () =>
  new CartScreenStore(createCardPaymentStore(), router);
