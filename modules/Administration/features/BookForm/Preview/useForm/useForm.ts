import { BookFormValues, useBookFormContext } from '../../hooks';

type Returned = {
  name: BookFormValues['name'];
  authorFullName: string;
};

export const useFormPreview = (): Returned => {
  const { watch } = useBookFormContext();

  const { name, author } = watch();

  return {
    name,
    authorFullName: `${author.name} ${author.surname}`,
  };
};
