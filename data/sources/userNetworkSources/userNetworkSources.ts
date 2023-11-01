import { apiHttpClient } from '@example/shared';

import { UserNetworkSourcesDTO } from './dto';

export const userNetworkSources = {
  getContactInfo: () =>
    apiHttpClient.get<void, UserNetworkSourcesDTO.ContactDTO>(
      '/my/contactInfo',
    ),
  getPersonInfo: () =>
    apiHttpClient.get<void, UserNetworkSourcesDTO.PersonDTO>('/my/personInfo'),
};

export type UserNetworkSources = typeof userNetworkSources;
