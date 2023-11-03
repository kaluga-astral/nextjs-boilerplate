import { mock } from '@example/shared/_tests';
import { PaymentRepository, cartRepositoryFaker } from '@example/data';
import { cacheService } from '@example/shared';

import { CartStore } from '../../external';

import { CardPaymentStore } from './CardPaymentStore';

describe('CardPaymentStore', () => {
  it('Отправляет на оплату все товары, добавленные в корзину', () => {
    const fakeGoodsList = cartRepositoryFaker.makeGoodsList(2);

    const payByCardMock = vi.fn();

    const cartStoreStub = mock<CartStore>({
      goods: fakeGoodsList,
    });
    const paymentRepositoryMock = mock<PaymentRepository>({
      createPaymentByCardMutation: () =>
        cacheService.createMutation(async (params) => payByCardMock(params)),
    });
    const sut = new CardPaymentStore(cartStoreStub, paymentRepositoryMock);

    sut.pay();

    expect(payByCardMock).toBeCalledWith([
      fakeGoodsList[0].id,
      fakeGoodsList[1].id,
    ]);
  });

  // it('Форматирует ошибки оплаты для отображения', async () => {
  //   const cartStoreStub = mock<CartStore>({ goods: [] });
  //   const paymentRepositoryMock = mock<PaymentRepository>({
  //     createPaymentByCardMutation: () =>
  //       cacheService.createMutation(async () => {
  //         throw new ApiDataError({
  //           errors: [{ message: 'Недостаточно средства', additionalInfo: {} }],
  //         });
  //       }),
  //   });
  //   const sut = new CardPaymentStore(cartStoreStub, paymentRepositoryMock);
  //
  //   sut.pay();
  //   await when(() => Boolean(sut.errors));
  //   expect(sut.errors).toEqual(['Недостаточно средств']);
  // });
});
