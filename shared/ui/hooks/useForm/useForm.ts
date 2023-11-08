import type {
  FormFieldValues,
  UseFormProps as UseAstralFormProps,
  UseFormReturn,
} from '@astral/ui';
import { useForm as useAstralForm } from '@astral/ui';
import { resolver } from '@astral/validations-react-hook-form-resolver';

import type { v } from '../../../services';

export type UseFormProps<
  TFieldValues extends FormFieldValues = FormFieldValues,
  // eslint-disable-next-line
  TContext = any,
> = Omit<UseAstralFormProps<TFieldValues, TContext>, 'resolver'> & {
  validationSchema?: v.ObjectGuard<TFieldValues>;
};

export const useForm = <
  TFieldValues extends FormFieldValues = FormFieldValues,
  // eslint-disable-next-line
  TContext = any,
>({
  validationSchema,
  defaultValues,
  ...params
}: UseFormProps<TFieldValues, TContext> = {}): UseFormReturn<
  TFieldValues,
  TContext
> =>
  useAstralForm<TFieldValues, TContext>({
    ...params,
    defaultValues,
    resolver: validationSchema && resolver(validationSchema),
  });

export type { UseFormReturn };
