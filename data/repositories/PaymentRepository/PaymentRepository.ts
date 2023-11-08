import type { ApiDataError, CacheService } from '@example/shared';
import { cacheService } from '@example/shared';

import type { PaymentNetworkSources } from '../../sources';
import { paymentNetworkSources } from '../../sources';
import type { CartRepository } from '../CartRepository';
import { cartRepository as cartRepositoryInstance } from '../CartRepository';

import type { PaymentRepositoryDTO } from './dto';

export class PaymentRepository {
  constructor(
    private readonly cartRepository: CartRepository,
    private readonly paymentSources: PaymentNetworkSources,
    private readonly cache: CacheService,
  ) {}

  public createPaymentByCardMutation = () =>
    this.cache.createMutation<
      void,
      // TODO: удалить проброс ошибки после фикса бага, из-за которого generic MobxQuery класса не прокидывает до сюда тип ошибки
      ApiDataError,
      PaymentRepositoryDTO.PayByCardInputDTO
    >((goods) =>
      this.paymentSources.payByCard(goods).then(() => {
        this.cartRepository.invalidateData();
      }),
    );
}

export const paymentRepository = new PaymentRepository(
  cartRepositoryInstance,
  paymentNetworkSources,
  cacheService,
);
