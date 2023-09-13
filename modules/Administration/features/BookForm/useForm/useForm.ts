import { useEffect } from 'react';

import {
  FormCheckboxValue,
  FormTextFieldValue,
  UseFormReturn,
  useForm,
  useFormContext,
  v,
} from '@example/shared';
import { AdministrationRepositoryDTO, BookRepositoryDTO } from '@example/data';

import { BookFormStore } from '../store';

export type BookFormValues = {
  name: FormTextFieldValue;
  genre: BookRepositoryDTO.GenreDTO;
  pageCount: FormTextFieldValue;
  author: AdministrationRepositoryDTO.CreateBookInputDTO['author'];
  coAuthor?: AdministrationRepositoryDTO.CreateBookInputDTO['coAuthor'];
  isPresentCoAuthor: FormCheckboxValue;
};

type Result = {
  form: UseFormReturn<BookFormValues>;
  isPresentCoAuthor: boolean;
};

const validationSchema = v.object<BookFormValues>({
  name: v.string(),
  genre: v.object<BookFormValues['genre']>({
    id: v.string(),
    name: v.string(),
    description: v.optional(v.string()),
  }),
  pageCount: v.number(),
  author: v.object<BookFormValues['author']>({
    name: v.string(),
    surname: v.string(),
  }),
  isPresentCoAuthor: v.optional(v.boolean()),
  coAuthor: v.when({
    is: (_, ctx) => Boolean((ctx.values as BookFormValues)?.isPresentCoAuthor),
    then: v.object<BookFormValues['author']>({
      name: v.string(),
      surname: v.string(),
    }),
    otherwise: v.any(),
  }),
});

export const useBookForm = (store: BookFormStore): Result => {
  const form = useForm<BookFormValues>({ validationSchema });

  useEffect(() => {
    store.subscribeOnAutocompleteByName((data) => {
      form.setValue('genre', data.genre);
      form.setValue('author', data.author);
    });
  }, []);

  const isPresentCoAuthor = form.watch('isPresentCoAuthor');

  return { form, isPresentCoAuthor };
};

export const useBookFormContext = () => useFormContext<BookFormValues>();
