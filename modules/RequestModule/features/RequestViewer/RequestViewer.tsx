import { useEffect, useState } from 'react';

import { ContentState, Description } from '@example/shared';

import { useRequestWithTariffQuery } from '../../data';

import { createRequestViewerStore } from './store';

type RequestViewerProps = { requestID: string };

export const RequestViewer = ({ requestID }: RequestViewerProps) => {
  const [{ setFetchRequestData, request, isLoading }] = useState(
    createRequestViewerStore,
  );

  const query = useRequestWithTariffQuery(requestID);

  useEffect(() => {
    setFetchRequestData(query);
  }, [query]);

  return (
    <ContentState isLoading={isLoading}>
      <Description>
        <Description.Name>Описание</Description.Name>
        <Description.Value>{request?.description}</Description.Value>
      </Description>
      <Description>
        <Description.Name>Тариф</Description.Name>
        <Description.Value>{request?.tariffName}</Description.Value>
      </Description>
    </ContentState>
  );
};
