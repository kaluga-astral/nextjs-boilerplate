export type SortingOrder = 'asc' | 'desc';

export type PaginationInputDTO = {
  offset: number;
  count: number;
  page: number;
};

export type SortInputDTO<TSortField extends string = string> = {
  sortField?: TSortField;
  sortOrder?: SortingOrder;
};

export type PaginationMetaDTO = {
  totalCount: number;
};

export type WithPaginationDTO<TData extends object> = {
  data: TData[];
  meta: PaginationMetaDTO;
};
