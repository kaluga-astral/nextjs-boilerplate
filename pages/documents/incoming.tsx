import { NextPage } from 'next';
import { Typography } from '@astral/ui';

import { Container } from '../../src/components';

export const IncomingDocumentsPage: NextPage = () => {
  return (
    <Container>
      <Typography component="h1">IncomingDocumentsPage</Typography>
    </Container>
  );
};

export default IncomingDocumentsPage;
