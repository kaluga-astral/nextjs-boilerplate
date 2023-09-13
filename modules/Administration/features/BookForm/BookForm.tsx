import { ChangeEvent, useState } from 'react';
import { observer } from 'mobx-react-lite';

import { FormCheckbox, FormProvider, FormTextField } from '@example/shared';

import { useBookForm } from './useForm';
import { Genre } from './Genre';
import { Preview } from './Preview';
import { Author } from './Author';
import { createBookFormStore } from './store';

export type BookFormProps = {};

export const BookForm = observer(({}: BookFormProps) => {
  const [store] = useState(createBookFormStore);

  const { form, isPresentCoAuthor } = useBookForm(store);

  const handleBlurName = (event: ChangeEvent<HTMLInputElement>) => {
    store.findBook(event.target.value);
  };

  return (
    <FormProvider {...form}>
      <form noValidate>
        <FormTextField
          required
          control={form.control}
          name="name"
          label="Название книги"
          onBlur={handleBlurName}
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
        <Preview />
      </form>
    </FormProvider>
  );
});