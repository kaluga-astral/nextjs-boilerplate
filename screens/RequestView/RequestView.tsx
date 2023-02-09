import { RequestViewer } from '@example/modules/RequestModule';

export type RequestViewProps = { requestID: string };

export const RequestViewScreen = ({ requestID }: RequestViewProps) => {
  return <RequestViewer requestID={requestID} />;
};
