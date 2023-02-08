import { NextPage } from 'next';

import { useRouter } from '@example/shared';
import { AccessDeniedScreen, EditDraftRequestScreen } from '@example/screens';

export const EditDraftRequestPage: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;

  if (!id || Array.isArray(id)) {
    return <AccessDeniedScreen />;
  }

  return <EditDraftRequestScreen requestID={id} />;
};

export default EditDraftRequestPage;
