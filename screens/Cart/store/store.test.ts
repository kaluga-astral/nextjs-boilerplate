import { createRouterMock, mock } from '@example/shared/_tests';
import type { CardPaymentStore } from '@example/modules/payment';
import { APP_ROUTES } from '@example/shared';

import { CartScreenStore } from './store';

describe('CartScreenStore', () => {
  describe('Процесс оплаты', () => {
    it('Запускается фоном при открытии модалки', () => {
      const cartPaymentStoreMock = mock<CardPaymentStore>();
      const sut = new CartScreenStore(cartPaymentStoreMock, createRouterMock());

      sut.openModal();
      expect(cartPaymentStoreMock.pay).toBeCalled();
    });
  });

  describe('Успешная оплата', () => {
    it('Происходит редирект на страницу корзины', () => {
      const cartPaymentStoreMock = mock<CardPaymentStore>({
        pay: (params) => {
          params?.onSuccess();
        },
      });
      const routerMock = createRouterMock();
      const sut = new CartScreenStore(cartPaymentStoreMock, routerMock);

      sut.pay();
      expect(routerMock.pathname).toBe(APP_ROUTES.cart.getRedirectPath());
    });
  });
});
