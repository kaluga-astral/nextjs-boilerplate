import { useState } from 'react';
import { observer } from 'mobx-react-lite';

import { PageLayout, router } from '@example/shared';
import { useRequestWithTariffQuery } from '@example/data';
import {
  DraftRequestForm,
  createEditRequestDraftLogic,
} from '@example/modules/RequestModule';

import { EditDraftContentState } from './ContentState';

type Props = {
  requestID: string;
};

export const EditDraftRequestScreen = observer(({ requestID }: Props) => {
  const [{ editRequest, retryEditRequest, editRequestState }] = useState(() =>
    createEditRequestDraftLogic(requestID, {
      onSuccessEditRequest: () => {
        setTimeout(() => {
          router.push(router.routes.createDraftRequest.getRedirectPath());
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
