import { createCacheService, faker } from '@example/shared';
import { mock } from '@example/shared/_tests';

import type { UserNetworkSources, UserNetworkSourcesDTO } from '../../sources';
import { makeFakeSourceRes } from '../../sources';

import { UserRepository } from './UserRepository';

describe('UserRepository', () => {
  it('Запрос на получение полных данных пользователя содержит личные данные и контакты', async () => {
    const fakePersonData: UserNetworkSourcesDTO.PersonDTO = {
      name: faker.person.firstName(),
      surname: faker.person.lastName(),
      displayName: faker.person.fullName(),
    };
    const fakeContactData: UserNetworkSourcesDTO.ContactDTO = {
      email: faker.internet.email(),
      phone: faker.phone.number(),
    };

    const userSourcesStub = mock<UserNetworkSources>({
      getContactInfo: async () => makeFakeSourceRes(fakeContactData),
      getPersonInfo: async () => makeFakeSourceRes(fakePersonData),
    });

    const sut = new UserRepository(userSourcesStub, createCacheService());

    const user = await sut.getFullInfoQuery().async();

    expect(user).toEqual({
      name: fakePersonData.name,
      surname: fakePersonData.surname,
      displayName: fakePersonData.displayName,
      email: fakeContactData.email,
      phone: fakeContactData.phone,
    });
  });
});
