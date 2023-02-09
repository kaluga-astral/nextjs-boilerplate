export type RequestNetworkDTO = {
  id: string;
  status: number;
  ownerID: string;
  tariffID: string;
  description: string;
  createdDate: string;
  updatedDate: string;
};

export type CreateDraftRequestNetworkInputDTO = {
  tariffID: string;
  description: string;
};

export type EditDraftRequestNetworkInputDTO = {
  id: string;
  tariffID: string;
  description: string;
};

export type RequestListNetworkDTO = {
  list: RequestNetworkDTO[];
  total: number;
};
