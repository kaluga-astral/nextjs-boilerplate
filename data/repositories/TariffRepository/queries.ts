import { UseQueryOptions, useQuery } from '@example/shared';

import { tariffRepository } from './TariffRepository';
import { TariffListDTO } from './dto';

export const useTariffsQuery = (options?: UseQueryOptions<TariffListDTO>) =>
  useQuery<TariffListDTO>(
    tariffRepository.getTariffsCacheKey(),
    () => tariffRepository.getTariffs(),
    options,
  );
