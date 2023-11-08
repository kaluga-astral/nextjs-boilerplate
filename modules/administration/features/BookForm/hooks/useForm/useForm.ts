import { useEffect } from 'react';

import type { DeepPartial, UseFormReturn } from '@example/shared';
import { useForm, useFormContext, v } from '@example/shared';
import type {
  AdministrationRepositoryDTO,
  BookRepositoryDTO,
} from '@example/data';

import type { BookFormStore } from '../../store';

type UseBookFormParams = {
  onSubmit: (values: BookFormValues) => Promise<void>;
  initialValues?: DeepPartial<BookFormValues>;
};

export type BookFormValues = {
  name: string;
  genre: BookRepositoryDTO.GenreDTO;
  pageCount: string;
  author: AdministrationRepositoryDTO.CreateBookInputDTO['author'];
  coAuthor?: AdministrationRepositoryDTO.CreateBookInputDTO['coAuthor'];
  isPresentCoAuthor: boolean;
};

type UseBookFormResult = {
  form: UseFormReturn<BookFormValues>;
  isPresentCoAuthor: boolean;
  submit: ReturnType<UseFormReturn<BookFormValues>['handleSubmit']>;
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

export const useBookForm = (
  store: BookFormStore,
  {
    onSubmit,
    initialValues = { author: {}, isPresentCoAuthor: false },
  }: UseBookFormParams,
): UseBookFormResult => {
  const form = useForm<BookFormValues>({
    validationSchema,
    defaultValues: initialValues,
  });

  const isPresentCoAuthor = form.watch('isPresentCoAuthor');

  const name = form.watch('name');

  useEffect(() => {
    store.onAutocompleteByName((data) => {
      form.setValue('genre', data.genre);
      form.setValue('author', data.author);
    });
  }, []);

  useEffect(() => {
    store.findBook(name);
  }, [name]);

  return { form, isPresentCoAuthor, submit: form.handleSubmit(onSubmit) };
};

export const useBookFormContext = () => useFormContext<BookFormValues>();
