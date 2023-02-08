import { Suspense, lazy, useState } from 'react';
import { observer } from 'mobx-react-lite';

import {
  ContentState,
  FormProvider,
  FormSubmitButton,
  useForm,
} from '@example/shared';

import { TariffStage } from './stages/Tariff';
import { DraftRequestFormValues, createDraftRequestFormStore } from './store';
import { DraftRequestStage } from './enums';

const RequestInfoStage = lazy(() => import('./stages/RequestInfo'));

export type DraftRequestFormProps = {
  onSubmit: (values: DraftRequestFormValues) => Promise<void>;
  initialValues?: Partial<DraftRequestFormValues>;
};

export const DraftRequestForm = observer(
  ({ initialValues, onSubmit }: DraftRequestFormProps) => {
    const [
      {
        isLastStage,
        currentStage,
        isSelectedExpensiveTariff,
        onSubmitRequest,
        validationSchema,
        tariffStageValues,
      },
    ] = useState(() =>
      createDraftRequestFormStore({ onFinishSubmit: onSubmit }),
    );

    const form = useForm<DraftRequestFormValues>({
      defaultValues: initialValues,
      validationSchema,
    });

    return (
      <FormProvider {...form}>
        <form noValidate onSubmit={form.handleSubmit(onSubmitRequest)}>
          {currentStage === DraftRequestStage.tariff && <TariffStage />}
          <Suspense fallback={<ContentState isLoading>loading</ContentState>}>
            {tariffStageValues && currentStage === DraftRequestStage.info && (
              <RequestInfoStage
                isShowTariffPrice={isSelectedExpensiveTariff}
                tariffPrice={tariffStageValues.tariff.price}
              />
            )}
          </Suspense>
          <footer>
            <FormSubmitButton>
              {isLastStage ? 'Создать' : 'Далее'}
            </FormSubmitButton>
          </footer>
        </form>
      </FormProvider>
    );
  },
);
