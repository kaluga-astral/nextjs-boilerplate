import { useEffect, useState } from 'react';

import { FormAutocomplete, FormAutocompleteProps } from '@example/shared';
import { useTariffsQuery } from '@example/data';

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
  const [{ setFetchTariffResult, tariffs, isLoading }] = useState(
    createTariffAutocompleteStore,
  );

  const query = useTariffsQuery({ fetchPolicy: 'network-only' });

  useEffect(() => {
    setFetchTariffResult(query);
  }, [query]);

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
      loading={isLoading}
      getOptionLabel={(option) => option?.name}
    />
  );
};
