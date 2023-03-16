import { useEffect, useState } from 'react';

import { FormAutocomplete, FormAutocompleteProps } from '@example/shared';

import {
  TariffFormAutocompleteValue,
  createTariffAutocompleteStore,
} from './store';

export type TariffFormAutocompleteProps<FieldValues extends object> = Pick<
  FormAutocompleteProps<FieldValues, false, false, false, false>,
  'name' | 'control' | 'label'
>;

export const TariffFormAutocomplete = <FieldValues extends object>({
  name,
  control,
  label,
}: TariffFormAutocompleteProps<FieldValues>) => {
  const [{ tariffsQuery, tariffs, fetchTariffs }] = useState(
    createTariffAutocompleteStore,
  );

  useEffect(() => {
    fetchTariffs();
  }, []);

  return (
    <FormAutocomplete<
      FieldValues,
      TariffFormAutocompleteValue,
      false,
      false,
      false
    >
      name={name}
      control={control}
      label={label}
      options={tariffs}
      loading={tariffsQuery.isLoading}
      getOptionLabel={(option) => option?.name}
    />
  );
};
