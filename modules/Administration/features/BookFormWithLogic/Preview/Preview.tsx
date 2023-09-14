import { Description, Grid } from '@example/shared';

import { useFormPreviewLogic } from './useLogic';

export const Preview = () => {
  const { name, authorFullName } = useFormPreviewLogic();

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
