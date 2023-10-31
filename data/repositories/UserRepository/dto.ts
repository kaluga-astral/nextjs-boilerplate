import { UserContactNetworkDTO, UserPersonNetworkDTO } from '../../sources';

export namespace UserRepositoryDTO {
  export type UserContactDTO = UserContactNetworkDTO;
  export type UserPersonDTO = UserPersonNetworkDTO;
  export type UserFullInfoDTO = UserPersonNetworkDTO & UserContactNetworkDTO;
}
