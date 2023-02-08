import { UseQueryOptions, useQuery } from '@example/shared';

import { requestRepository } from './RequestRepository';
import { RequestWithTariffDTO } from './dto';

export const useRequestWithTariffQuery = (
  requestID: string,
  options?: UseQueryOptions<RequestWithTariffDTO>,
) =>
  useQuery<RequestWithTariffDTO>(
    requestRepository.getRequestWithTariffCacheID(requestID),
    () => requestRepository.getRequestWithTariff(requestID),
    options,
  );
