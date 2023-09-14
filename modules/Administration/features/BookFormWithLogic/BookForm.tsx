import { observer } from 'mobx-react-lite';

import {
  ContentState,
  FormCheckbox,
  FormProvider,
  FormTextField,
} from '@example/shared';

import { BookFormValues, useBookFormLogic } from './useLogic';
import { Genre } from './Genre';
import { Preview } from './Preview';
import { Author } from './Author';

export type BookFormProps = {
  onSubmit: (values: BookFormValues) => Promise<void>;
};

export const BookForm = observer(({ onSubmit }: BookFormProps) => {
  const { form, isPresentCoAuthor, isLoading, submit } = useBookFormLogic({
    onSubmit,
  });

  return (
    <FormProvider {...form}>
      <form noValidate onSubmit={submit}>
        <FormTextField
          required
          control={form.control}
          name="name"
          label="Название книги"
        />
        <ContentState isLoading={isLoading}>
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
        </ContentState>
      </form>
    </FormProvider>
  );
});
