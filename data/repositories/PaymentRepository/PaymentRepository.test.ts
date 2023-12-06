import { createCacheService } from '@example/shared';
import { mock } from '@example/shared/_tests';

import type { PaymentNetworkSources } from '../../sources';
import type { CartRepository } from '../CartRepository';

import { PaymentRepository } from './PaymentRepository';

describe('PaymentRepository', () => {
  it('Данные корзины инвалидируются после успешной покупки', async () => {
    const paymentSourcesStub = mock<PaymentNetworkSources>({
      payByCard: async () => undefined,
    });
    const cartRepositoryMock = mock<CartRepository>();

    const sut = new PaymentRepository(
      cartRepositoryMock,
      paymentSourcesStub,
      createCacheService(),
    );

    const payByCardMutation = sut.createPaymentByCardMutation();

    await payByCardMutation.async(['id']);
    expect(cartRepositoryMock.resetCartCache).toBeCalled();
  });
});
