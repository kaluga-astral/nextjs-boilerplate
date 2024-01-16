import { makeAutoObservable } from 'mobx';

import type { CardPaymentStore } from '@example/modules/payment';
import { createCardPaymentStore } from '@example/modules/payment';
import { APP_ROUTES, createFlagStore, router } from '@example/shared';
import type { RouterService } from '@example/shared/services/RouterService';

export class CartScreenStore {
  private readonly modalStore = createFlagStore();

  constructor(
    private readonly cardPaymentStore: CardPaymentStore,
    private readonly routerService: RouterService,
  ) {
    makeAutoObservable<CartScreenStore, 'routerService'>(this, {
      routerService: false,
    });
  }

  public get isOpenModal() {
    return this.modalStore.flag;
  }

  public openModal = () => {
    this.pay();
    this.modalStore.setTrue();
  };

  public closeModal = () => {
    this.modalStore.setFalse();
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
        this.routerService.navigate(APP_ROUTES.cart.getRedirectPath());
      },
    });
  };
}

export const createCartScreenStore = () =>
  new CartScreenStore(createCardPaymentStore(), router);
