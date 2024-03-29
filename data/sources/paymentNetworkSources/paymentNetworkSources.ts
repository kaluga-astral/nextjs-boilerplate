import { apiHttpClient } from '@example/shared';

import type { PaymentNetworkSourcesDTO } from './dto';

export const paymentNetworkSources = {
  payByCard: (data: PaymentNetworkSourcesDTO.PayByCardInputDTO) =>
    apiHttpClient.post<PaymentNetworkSourcesDTO.PayByCardInputDTO, void>(
      '/payment/payByCard',
      data,
    ),
};

export type PaymentNetworkSources = typeof paymentNetworkSources;
