import { useState } from 'react';
import { observer } from 'mobx-react-lite';

import { DataGrid, DataGridPagination, DataGridSort } from '@example/shared';

import { AvailableSortField, ListItem, createGoodsListStore } from './store';

export const BookList = observer(() => {
  const [{ list, isLoading, totalCount, setSort, sort }] =
    useState(createGoodsListStore);

  const handleSort = (newSort?: DataGridSort<AvailableSortField>) => {
    if (newSort) {
      setSort({ sortOrder: newSort.sort, sortField: newSort.fieldId });
    }
  };

  return (
    <DataGrid<ListItem, AvailableSortField>
      columns={[
        { field: 'name', label: 'Название', sortable: true },
        { field: 'price', label: 'Цена', sortable: true },
        {
          sortable: false,
          align: 'center',
          renderCell: () => {
            return <>counter</>;
          },
        },
      ]}
      rows={list}
      keyId="id"
      loading={isLoading}
      sorting={sort && { sort: sort.sortOrder, fieldId: sort.sortField }}
      onSort={handleSort}
      Footer={<DataGridPagination totalCount={totalCount} />}
    />
  );
});
