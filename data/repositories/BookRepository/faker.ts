import { bookNetworkSourcesFaker } from '../../sources';

import type { BookRepositoryDTO } from './dto';

export const bookRepositoryFaker = {
  makeBookList(
    length?: number,
    item?: Partial<BookRepositoryDTO.BookListItemDTO>,
  ): BookRepositoryDTO.BookListDTO {
    return bookNetworkSourcesFaker.makeBookList(length, item);
  },
  makeBookByName(): BookRepositoryDTO.BookByNameDTO {
    return {
      ...bookNetworkSourcesFaker.makeBookByName(),
      genre: bookNetworkSourcesFaker.makeGenre(),
    };
  },
};
