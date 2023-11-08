import type { HttpServiceResponse } from '@example/shared';

export const makeFakeSourceRes = <TResponse>(
  data: TResponse,
): HttpServiceResponse<TResponse> => ({
  headers: {},
  status: 200,
  statusText: 'success',
  data,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  config: {} as any,
});
