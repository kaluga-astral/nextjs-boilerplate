import { createCacheService, faker } from '@example/shared';
import { mock } from '@example/shared/_tests';

import type { UserNetworkSources, UserNetworkSourcesDTO } from '../../sources';
import { makeFakeSourceRes } from '../../sources';

import { UserRepository } from './UserRepository';

describe('UserRepository', () => {
  it('Отдает полные данные о пользователя, которые включают личные данные и контакты', async () => {
    const personDataStub: UserNetworkSourcesDTO.PersonDTO = {
      name: faker.person.firstName(),
      surname: faker.person.lastName(),
      displayName: faker.person.fullName(),
    };
    const contactDataStub: UserNetworkSourcesDTO.ContactDTO = {
      email: faker.internet.email(),
      phone: faker.phone.number(),
    };

    const userSourcesStub = mock<UserNetworkSources>({
      getContactInfo: async () => makeFakeSourceRes(contactDataStub),
      getPersonInfo: async () => makeFakeSourceRes(personDataStub),
    });

    const sut = new UserRepository(userSourcesStub, createCacheService());

    const user = await sut.getFullInfoQuery().async();

    expect(user).toEqual({
      name: personDataStub.name,
      surname: personDataStub.surname,
      displayName: personDataStub.displayName,
      email: contactDataStub.email,
      phone: contactDataStub.phone,
    });
  });
});
