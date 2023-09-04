import type {
  BacklogItemNetworkDTO,
  BacklogNetworkDTO,
  CreateBacklogItemNetworkInputDTO,
} from '@example/data/sources';

export namespace BacklogRepositoryDTO {
  export type BacklogDTO = BacklogNetworkDTO;
  export type BacklogItemDTO = BacklogItemNetworkDTO;
  export type CreateBacklogItemInputDTO = CreateBacklogItemNetworkInputDTO;
}
