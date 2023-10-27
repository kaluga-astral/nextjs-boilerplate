import { observer, useLocalObservable } from 'mobx-react-lite';

import { FormAutocomplete } from '@example/shared';

import { useBookFormContext } from '../hooks';

import { createGenreStore } from './store';

export const Genre = observer(() => {
  const { genreList, isLoading } = useLocalObservable(createGenreStore);

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
