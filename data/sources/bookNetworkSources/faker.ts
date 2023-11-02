import { faker } from '@example/shared/_tests';

import { BookNetworkSourcesDTO } from './dto';

export const bookNetworkSourcesFaker = {
  makeBookByName: (
    data?: Partial<BookNetworkSourcesDTO.BookByNameDTO>,
  ): BookNetworkSourcesDTO.BookByNameDTO => ({
    name: faker.lorem.word(6),
    genreID: faker.string.uuid(),
    pageCount: 3,
    author: {
      name: faker.person.firstName(),
      surname: faker.person.lastName(),
    },
    coAuthor: {
      name: faker.person.firstName(),
      surname: faker.person.lastName(),
    },
    ...data,
  }),

  makeGenre: (
    data?: Partial<BookNetworkSourcesDTO.GenreDTO>,
  ): BookNetworkSourcesDTO.GenreDTO => ({
    id: faker.string.uuid(),
    name: 'Мужской',
    description: faker.lorem.sentence(),
    ...data,
  }),
};
