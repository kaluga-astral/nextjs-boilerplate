import {
  CreateDraftRequestNetworkInputDTO,
  EditDraftRequestNetworkInputDTO,
  OwnerNetworkDTO,
  RequestNetworkDTO,
} from '../../sources';
import { TariffRepositoryDTO } from '../TariffRepository';

import { RequestStatus } from './enums';

export namespace RequestRepositoryDTO {
  export type RequestDTO = Omit<RequestNetworkDTO, 'status'> & {
    status: RequestStatus;
  };

  export type RequestFullInfoDTO = Omit<RequestDTO, 'ownerID'> & {
    owner: OwnerNetworkDTO;
  };

  export type EditRequestInputDTO = EditDraftRequestNetworkInputDTO;

  export type RequestStoreInputDTO = EditRequestInputDTO;

  export type CreateDraftRequestInputDTO = CreateDraftRequestNetworkInputDTO;

  export type RequestWithTariffDTO = Omit<RequestDTO, 'tariffID'> & {
    tariff: TariffRepositoryDTO.TariffDTO;
  };
}
