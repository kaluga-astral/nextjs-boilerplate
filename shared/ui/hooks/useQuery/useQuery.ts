import {
  QueryKey,
  UseQueryOptions as UseAstralQueryOptions,
  useQuery as useAstralQuery,
} from '@astral/react-query';

export type { UseQueryResult } from '@astral/react-query';

import { DataError } from '../../../services';

type DefaultError = DataError<Record<string, unknown>>;

export type UseQueryOptions<
  TData,
  TError = DefaultError,
> = UseAstralQueryOptions<TData, TError>;

export const useQuery = <TData, TError = DefaultError>(
  key: QueryKey,
  fnData: () => Promise<TData>,
  options?: UseQueryOptions<TData, TError>,
) => useAstralQuery<TData, TError>(key, fnData, options);
