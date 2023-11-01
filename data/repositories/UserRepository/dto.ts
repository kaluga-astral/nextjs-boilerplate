import { UserNetworkSourcesDTO } from '../../sources';

export namespace UserRepositoryDTO {
  export type UserContactDTO = UserNetworkSourcesDTO.ContactDTO;
  export type UserPersonDTO = UserNetworkSourcesDTO.PersonDTO;
  export type UserFullInfoDTO = UserNetworkSourcesDTO.PersonDTO &
    UserNetworkSourcesDTO.ContactDTO;
}
