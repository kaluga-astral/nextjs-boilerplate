import { observer, useLocalObservable } from 'mobx-react-lite';

import { FormCheckbox, FormProvider, FormTextField } from '@example/shared';

import type { BookFormValues } from './hooks';
import { useBookForm } from './hooks';
import { Genre } from './Genre';
import { Author } from './Author';
import { createBookFormStore } from './store';
import { BookFormPreview, BookFormWrapper } from './styles';

export type BookFormProps = {
  onSubmit: (values: BookFormValues) => Promise<void>;
};

export const BookForm = observer(({ onSubmit }: BookFormProps) => {
  const store = useLocalObservable(createBookFormStore);

  const { form, isPresentCoAuthor } = useBookForm(store, { onSubmit });

  return (
    <FormProvider {...form}>
      <BookFormWrapper noValidate>
        <FormTextField
          required
          control={form.control}
          name="name"
          label="Название книги"
        />
        <Genre />
        <FormTextField
          required
          control={form.control}
          name="pageCount"
          label="Количество страниц"
        />
        <Author />
        <FormCheckbox
          title="Есть соавтор"
          control={form.control}
          name="isPresentCoAuthor"
        />
        {isPresentCoAuthor && (
          <fieldset>
            <FormTextField
              required
              label="Имя автора"
              control={form.control}
              name="coAuthor.name"
            />
            <FormTextField
              required
              label="Фамилия автора"
              control={form.control}
              name="coAuthor.surname"
            />
          </fieldset>
        )}
        <BookFormPreview />
      </BookFormWrapper>
    </FormProvider>
  );
});
