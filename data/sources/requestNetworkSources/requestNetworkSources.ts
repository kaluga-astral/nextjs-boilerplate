import { apiHttpClient } from '@example/shared';

import {
  CreateDraftRequestNetworkInputDTO,
  EditDraftRequestNetworkInputDTO,
  RequestNetworkDTO,
} from './dto';

export const requestNetworkSources = {
  getRequestInfo: (requestID: string) =>
    apiHttpClient.get<void, RequestNetworkDTO>(`/request/${requestID}`),
  createDraftRequest: (data: CreateDraftRequestNetworkInputDTO) =>
    apiHttpClient.post<CreateDraftRequestNetworkInputDTO, string>(
      '/request',
      data,
    ),
  editRequest: (data: EditDraftRequestNetworkInputDTO) =>
    apiHttpClient.put<void, void>('/request', data),
};

export type RequestNetworkSources = typeof requestNetworkSources;
