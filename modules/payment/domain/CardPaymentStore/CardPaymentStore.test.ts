import { mock } from '@example/shared/_tests';
import type { PaymentRepository } from '@example/data';
import { cartRepositoryFaker } from '@example/data';

import type { CartStore } from '../../external';

import { CardPaymentStore } from './CardPaymentStore';

describe('CardPaymentStore', () => {
  it('Отправляет на оплату все товары, добавленные в корзину', () => {
    const fakeGoodsList = cartRepositoryFaker.makeGoodsList(2);

    const mutationMock =
      mock<ReturnType<PaymentRepository['createPaymentByCardMutation']>>();

    const cartStoreStub = mock<CartStore>({
      goods: fakeGoodsList,
    });
    const paymentRepositoryMock = mock<PaymentRepository>({
      createPaymentByCardMutation: () => mutationMock,
    });
    const sut = new CardPaymentStore(cartStoreStub, paymentRepositoryMock);

    sut.pay();

    expect(mutationMock.sync.mock.lastCall?.[0]?.params).toEqual([
      fakeGoodsList[0].id,
      fakeGoodsList[1].id,
    ]);
  });

  // it('Отправляет на оплату все товары, добавленные в корзину. With sources stub', () => {
  //   const fakeGoodsList = cartRepositoryFaker.makeGoodsList(2);
  //
  //   const mutationMock =
  //     mock<ReturnType<PaymentRepository['createPaymentByCardMutation']>>();
  //
  //   const paymentRepositoryMock = mock<PaymentRepository>({
  //     createPaymentByCardMutation: () => mutationMock,
  //   });
  //   const notifyService = mock<typeof notify>();
  //   const sut = new CardPaymentStore(
  //     new CartStore(
  //       new CartRepository(fakeCartNetworkSources, cacheService),
  //       notifyService,
  //     ),
  //     new PaymentRepository(new CartRepository()),
  //   );
  //
  //   sut.pay();
  //
  //   expect(mutationMock.sync.mock.lastCall?.[0]?.params).toEqual([
  //     fakeGoodsList[0].id,
  //     fakeGoodsList[1].id,
  //   ]);
  // });

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
