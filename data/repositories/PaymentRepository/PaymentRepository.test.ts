import { cacheService } from '@example/shared';
import { mock } from '@example/shared/_tests';

import { PaymentNetworkSources } from '../../sources';
import { CartRepository } from '../CartRepository';

import { PaymentRepository } from './PaymentRepository';

describe('PaymentRepository', () => {
  it('После успешной покупки инвалидируются данные корзины', async () => {
    const paymentSourcesStub = mock<PaymentNetworkSources>({
      payByCard: async () => undefined,
    });
    const cartRepositoryMock = mock<CartRepository>();

    const sut = new PaymentRepository(
      cartRepositoryMock,
      paymentSourcesStub,
      cacheService,
    );

    const payByCardMutation = sut.createPaymentByCardMutation();

    await payByCardMutation.async(['id']);
    expect(cartRepositoryMock.invalidateData).toBeCalled();
  });
});
