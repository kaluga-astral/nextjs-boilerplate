import { NextPage } from 'next';
import { Typography } from '@astral/ui';

import { Container } from '../../src/components';

export const OutgoingDocumentsPage: NextPage = () => {
  return (
    <Container>
      <Typography component="h1">OutgoingDocumentsPage</Typography>
    </Container>
  );
};

export default OutgoingDocumentsPage;
