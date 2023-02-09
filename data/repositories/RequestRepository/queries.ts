import { UseQueryOptions, useQuery } from '@example/shared';

import { requestRepository } from './RequestRepository';
import { RequestRepositoryDTO } from './dto';

export const useRequestWithTariffQuery = (
  requestID: string,
  options?: UseQueryOptions<RequestRepositoryDTO.RequestWithTariffDTO>,
) =>
  useQuery<RequestRepositoryDTO.RequestWithTariffDTO>(
    requestRepository.getRequestWithTariffCacheID(requestID),
    () => requestRepository.getRequestWithTariff(requestID),
    options,
  );
