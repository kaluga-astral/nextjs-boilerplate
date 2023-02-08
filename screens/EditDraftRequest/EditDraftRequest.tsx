import { useState } from 'react';
import { observer } from 'mobx-react-lite';

import { APP_ROUTES, PageLayout, useRouter } from '@example/shared';
import {
  DraftRequestForm,
  createEditRequestDraftLogic,
  useRequestWithTariffQuery,
} from '@example/modules/RequestModule';

import { EditDraftContentState } from './ContentState';

type Props = {
  requestID: string;
};

export const EditDraftRequestScreen = observer(({ requestID }: Props) => {
  const router = useRouter();

  const [{ editRequest, retryEditRequest, editRequestState }] = useState(() =>
    createEditRequestDraftLogic(requestID, {
      onSuccessEditRequest: () => {
        setTimeout(() => {
          router.push(APP_ROUTES.createDraftRequest.getRedirectPath());
        }, 3000);
      },
    }),
  );

  const { data: requestInitialValues } = useRequestWithTariffQuery(requestID);

  return (
    <PageLayout
      header={{ title: 'Редактирование заявления' }}
      content={{
        children: (
          <EditDraftContentState
            {...editRequestState}
            isError={Boolean(editRequestState.errorMessage)}
            onRetryEdit={retryEditRequest}
          >
            <DraftRequestForm
              initialValues={requestInitialValues}
              onSubmit={editRequest}
            />
          </EditDraftContentState>
        ),
      }}
    />
  );
});
