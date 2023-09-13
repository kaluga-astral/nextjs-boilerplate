import { FormTextField } from '@example/shared';

import { useBookFormContext } from '../useForm';

export const Author = () => {
  const { control } = useBookFormContext();

  return (
    <fieldset>
      <FormTextField
        required
        label="Имя автора"
        control={control}
        name="author.name"
      />
      <FormTextField
        required
        label="Фамилия автора"
        control={control}
        name="author.surname"
      />
    </fieldset>
  );
};
