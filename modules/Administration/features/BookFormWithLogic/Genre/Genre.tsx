import { useState } from 'react';
import { observer } from 'mobx-react-lite';

import { FormAutocomplete } from '@example/shared';

import { useBookFormContext } from '../useForm';

import { createGenreStore } from './store';

export const Genre = observer(() => {
  const [{ genreList, isLoading }] = useState(createGenreStore);

  const { control } = useBookFormContext();

  return (
    <FormAutocomplete
      required
      options={genreList}
      control={control}
      name="genre"
      loading={isLoading}
    />
  );
});
