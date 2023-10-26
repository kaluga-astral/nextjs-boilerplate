import { observer, useLocalObservable } from 'mobx-react-lite';

import {
  DataGrid,
  DataGridPagination,
  DataGridPaginationProps,
  DataGridSort,
} from '@example/shared';

import { AddToCartButton } from '../../external';

import { AvailableSortField, ListItem, createGoodsListStore } from './store';

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

  console.log('list', list);

  return (
    <DataGrid<ListItem, AvailableSortField>
      columns={[
        { field: 'name', label: 'Название', sortable: true },
        { field: 'price', label: 'Цена', sortable: true },
        {
          sortable: false,
          align: 'center',
          width: '10%',
          renderCell: ({ id }) => {
            return <AddToCartButton goodsID={id} />;
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
