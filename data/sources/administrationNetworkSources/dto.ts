export type CreateBookNetworkInputDTO = {
  name: string;
  genreID: string;
  pageCount: number;
  author: {
    name: string;
    surname: string;
  };
  coAuthor?: {
    name: string;
    surname: string;
  };
};
