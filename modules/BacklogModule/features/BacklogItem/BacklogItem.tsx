import { useEffect } from 'react';

import { FormTextField, Grid, useFormContext } from '@example/shared';

import { BacklogDialogStore } from '../BacklogDialog';

export type BacklogItemProps = Pick<
  BacklogDialogStore,
  'title' | 'description' | 'isLoading'
>;

export const BacklogItem = ({
  isLoading,
  title,
  description,
}: BacklogItemProps) => {
  const { setValue, control } = useFormContext();

  useEffect(() => {
    setValue('title', title);
    setValue('description', description);
  }, [setValue, description, title]);

  return (
    <Grid container spacing={2}>
      <FormTextField
        required
        label="Тема"
        name="title"
        control={control}
        disabled={isLoading}
      />
      <FormTextField
        label="Описание"
        name="description"
        control={control}
        disabled={isLoading}
      />
    </Grid>
  );
};
