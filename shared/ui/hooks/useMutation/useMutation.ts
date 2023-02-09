import {
  QueryKey,
  UseMutationOptions as UseAstralMutationOptions,
  useMutation as useAstralMutation,
} from '@astral/react-query';

import { DataError } from '../../../services';

type DefaultError = DataError<Record<string, unknown>>;

export type UseMutationOptions<
  TData,
  TError = DefaultError,
> = UseAstralMutationOptions<TData, TError>;

export const useMutation = <TData, TError = DefaultError>(
  key: QueryKey,
  fnData: () => Promise<TData>,
  options?: UseMutationOptions<TData, TError>,
) => useAstralMutation<TData, TError>(key, fnData, options);
