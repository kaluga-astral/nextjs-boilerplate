import { observer, useLocalObservable } from 'mobx-react-lite';

import type { DataGridPaginationProps, DataGridSort } from '@example/shared';
import { DataGrid, DataGridPagination } from '@example/shared';

import { AddToCartButton } from '../../external';

import type { AvailableSortField, ListItem } from './store';
import { createGoodsListStore } from './store';

export const BookList = observer(() => {
  const {
    list,
    isLoading,
    totalCount,
    setSort,
    setPaginationPage,
    pagination,
    sort,
  } = useLocalObservable(createGoodsListStore);

  const handleSort = (newSort?: DataGridSort<AvailableSortField>) => {
    if (newSort) {
      setSort({ sortOrder: newSort.sort, sortField: newSort.fieldId });
    }
  };

  const handleChangePage: DataGridPaginationProps['onChange'] = (
    _,
    newPage,
  ) => {
    setPaginationPage(newPage);
  };

  return (
    <DataGrid<ListItem, AvailableSortField>
      columns={[
        { field: 'name', label: 'Название', sortable: true },
        { field: 'price', label: 'Цена', sortable: true },
        {
          sortable: false,
          align: 'center',
          width: '10%',
          renderCell: ({ store }) => {
            return <AddToCartButton store={store} />;
          },
        },
      ]}
      rows={list}
      keyId="id"
      loading={isLoading}
      sorting={sort && { sort: sort.sortOrder, fieldId: sort.sortField }}
      onSort={handleSort}
      Footer={
        <DataGridPagination
          onChange={handleChangePage}
          page={pagination.page}
          totalCount={totalCount}
        />
      }
    />
  );
});
