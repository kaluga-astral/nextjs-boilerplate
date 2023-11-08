import { makeAutoObservable } from 'mobx';

import type {
  BookRepository,
  PaginationInputDTO,
  SortInputDTO,
} from '@example/data';
import { bookRepository as bookRepositoryInstance } from '@example/data';
import { formatPriceToView } from '@example/shared';

import type { ProductCartManagerStore } from '../../../external';
import { createProductCartManagerStore } from '../../../external';

export type ListItem = {
  id: string;
  name: string;
  price: string;
  store: ProductCartManagerStore;
};

export type AvailableSortField = 'name' | 'price';

type SortData = Required<SortInputDTO<AvailableSortField>>;

export class GoodsListStore {
  public sort?: SortData;

  public pagination: PaginationInputDTO = { count: 10, offset: 0, page: 0 };

  constructor(private readonly bookRepository: BookRepository) {
    makeAutoObservable(this);
  }

  private get listQuery() {
    return this.bookRepository.getBookListQuery({
      ...this.sort,
      ...this.pagination,
    });
  }

  public get totalCount() {
    return this.listQuery.data?.meta.totalCount || 0;
  }

  public get list(): ListItem[] {
    const data = this.listQuery.data?.data || [];

    return data.map(({ id, name, price }) => ({
      id,
      name,
      price: formatPriceToView(price),
      store: createProductCartManagerStore(id),
    }));
  }

  public get isLoading() {
    return this.listQuery.isLoading;
  }

  public setSort = (sort: SortData) => {
    this.sort = sort;
  };

  public setPaginationPage = (newPage: number) => {
    this.pagination.page = newPage;
  };
}

export const createGoodsListStore = () =>
  new GoodsListStore(bookRepositoryInstance);
