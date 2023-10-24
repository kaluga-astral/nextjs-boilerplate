import { makeAutoObservable } from 'mobx';

import {
  BookRepository,
  PaginationInputDTO,
  bookRepository as bookRepositoryInstance,
} from '@example/data';
import { DataGridSort, formatPriceToView } from '@example/shared';

export type ListItem = {
  id: string;
  name: string;
  price: string;
};

export type AvailableSortField = 'name' | 'price';

export class GoodsListStore {
  public sort?: DataGridSort<AvailableSortField>;

  public pagination: PaginationInputDTO = { count: 10, offset: 0 };

  constructor(private readonly bookRepository: BookRepository) {
    makeAutoObservable(this);
  }

  private get listQuery() {
    return this.bookRepository.getBookListQuery({
      sortField: this.sort?.fieldId,
      sortOrder: this.sort?.sort,
      ...this.pagination,
    });
  }

  public getList = (): void => {
    this.listQuery.sync();
  };

  public get list(): ListItem[] {
    return (
      this.listQuery.data?.data.map(({ id, name, price }) => ({
        id,
        name,
        price: formatPriceToView(price),
      })) || []
    );
  }

  public get isLoading() {
    return this.listQuery.isLoading;
  }

  public setSort = (sort: DataGridSort<AvailableSortField> | undefined) => {
    this.sort = sort;
  };
}

export const createGoodsListStore = () =>
  new GoodsListStore(bookRepositoryInstance);
