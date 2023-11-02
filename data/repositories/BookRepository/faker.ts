import { faker } from '@example/shared';

import { BookRepositoryDTO } from './dto';

export const bookRepositoryFaker = {
  makeBookList: (
    data?: Partial<BookRepositoryDTO.BookListDTO>,
  ): BookRepositoryDTO.BookListDTO => ({
    data: Array.from({ length: 10 }).map(() => ({
      id: faker.string.uuid(),
      name: faker.lorem.word(2),
      price: faker.number.int({ max: 100000 }),
    })),
    meta: { totalCount: 100 },
    ...data,
  }),
};
