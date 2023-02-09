import { createQueryClient, localStorageService } from '@example/shared';

import { RequestRepository } from './RequestRepository';

describe('RequestRepository.getRequestFullInfo', () => {
  const queryClient = createQueryClient();

  it('Возвращает смерженый RequestNetworkDTO и OwnerNetworkDTO', async () => {
    const owner = {
      name: 'name',
      surname: 'name',
      age: 22,
    };
    const request = {
      ownerID: 'id',
      id: '22',
      status: 2,
      description: 'description',
      createdDate: '11.11.2022',
      updatedDate: '11.11.2022',
    };

    const requestRepository = new RequestRepository(
      {
        getRequestInfo: async () => request,
        // eslint-disable-next-line
      } as any,
      // eslint-disable-next-line
      { getOwnerInfo: async () => owner } as any,
      // eslint-disable-next-line
      {} as any,
      queryClient,
      localStorageService,
    );

    const expectedResult = {
      id: '22',
      status: 2,
      description: 'description',
      createdDate: '11.11.2022',
      updatedDate: '11.11.2022',
      owner: {
        name: 'name',
        surname: 'name',
        age: 22,
      },
    };

    const result = await requestRepository.getRequestFullInfo(request.id);

    expect(result).toEqual(expectedResult);
  });
});
