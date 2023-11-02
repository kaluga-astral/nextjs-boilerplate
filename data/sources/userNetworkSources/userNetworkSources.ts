import { HttpServiceResponse, apiHttpClient } from '@example/shared';

import { UserNetworkSourcesDTO } from './dto';

export const userNetworkSources = {
  getContactInfo: () =>
    apiHttpClient.get<
      void,
      HttpServiceResponse<UserNetworkSourcesDTO.ContactDTO>
    >('/my/contactInfo'),
  getPersonInfo: () =>
    apiHttpClient.get<
      void,
      HttpServiceResponse<UserNetworkSourcesDTO.PersonDTO>
    >('/my/personInfo'),
};

export type UserNetworkSources = typeof userNetworkSources;
