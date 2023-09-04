import { apiHttpClient } from '@example/shared';

import type {
  BacklogItemNetworkDTO,
  BacklogNetworkDTO,
  CreateBacklogItemNetworkInputDTO,
} from './dto';

export const backlogNetworkSources = {
  getBacklogList: () => {
    return apiHttpClient.get<void, BacklogNetworkDTO>('/backlog');
  },

  getOneBacklogItem: (id: string) => {
    return apiHttpClient.get<void, BacklogItemNetworkDTO>(`/backlog/${id}`);
  },

  deleteBacklogListItem: (id: string) => {
    return apiHttpClient.delete<void>(`/backlog/${id}`);
  },

  createOneBacklogItem: (input: CreateBacklogItemNetworkInputDTO) => {
    return apiHttpClient.post<void, BacklogItemNetworkDTO>('/backlog', input);
  },
};

export type BacklogNetworkSources = typeof backlogNetworkSources;
