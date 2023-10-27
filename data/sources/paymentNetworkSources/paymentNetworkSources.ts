import { apiHttpClient } from '@example/shared';

import { PaymentSourcesNetworkDTO } from './dto';

export const paymentNetworkSources = {
  payByCard: (data: PaymentSourcesNetworkDTO.PayByCardInputDTO) =>
    apiHttpClient.post<PaymentSourcesNetworkDTO.PayByCardInputDTO, void>(
      '/payment/payByCard',
      data,
    ),
};

export type PaymentNetworkSources = typeof paymentNetworkSources;
