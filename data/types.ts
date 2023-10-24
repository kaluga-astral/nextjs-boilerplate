import { SortingOrder } from './enums';

export type PaginationInputDTO = {
  offset: number;
  count: number;
};

export type SortInputDTO = {
  sortField?: string;
  sortOrder?: SortingOrder;
};

export type PaginationMetaDTO = {
  totalCount: number;
};

export type WithPaginationDTO<TData extends object> = {
  data: TData[];
  meta: PaginationMetaDTO;
};
