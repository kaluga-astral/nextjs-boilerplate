import { Description, Grid } from '@example/shared';

import { useFormPreview } from './useForm';

export const Preview = () => {
  const { name, authorFullName } = useFormPreview();

  return (
    <Grid spacing={2}>
      <Description leader>
        <Description.Name>Название книги</Description.Name>
        <Description.Value>{name}</Description.Value>
      </Description>
      <Description leader>
        <Description.Name>Автор</Description.Name>
        <Description.Value>{authorFullName}</Description.Value>
      </Description>
    </Grid>
  );
};
