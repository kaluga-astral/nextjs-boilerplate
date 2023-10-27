import { ApiDataError, CacheService, cacheService } from '@example/shared';

import { PaymentNetworkSources, paymentNetworkSources } from '../../sources';
import {
  CartRepository,
  cartRepository as cartRepositoryInstance,
} from '../CartRepository';

import { PaymentRepositoryDTO } from './dto';

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
