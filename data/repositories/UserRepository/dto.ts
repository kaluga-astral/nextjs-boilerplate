import { UserContactNetworkDTO, UserPersonNetworkDTO } from '../../sources';

export namespace UserRepositoryDTO {
  export type UserFullInfoDTO = UserPersonNetworkDTO & UserContactNetworkDTO;
}
