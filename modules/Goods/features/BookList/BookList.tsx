import { useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';

import { DataGrid } from '@example/shared';

import { AvailableSortField, ListItem, createGoodsListStore } from './store';

/**
 * @description Список товаров (книг)
 */
export const BookList = observer(() => {
  const [{ list, isLoading, getList, setSort, sort }] =
    useState(createGoodsListStore);

  useEffect(() => {
    getList();
  }, []);

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
      sorting={sort}
      onSort={setSort}
    />
  );
});
