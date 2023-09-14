import { BookFormValues, useBookFormContext } from '../../useLogic';

type Returned = {
  name: BookFormValues['name'];
  authorFullName: string;
};

export const useFormPreviewLogic = (): Returned => {
  const { watch } = useBookFormContext();

  const { name, author } = watch();

  return {
    name,
    authorFullName: `${author.name} ${author.surname}`,
  };
};
