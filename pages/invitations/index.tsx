import { NextPage } from 'next';
import { Typography } from '@astral/ui';

import { Container } from '../../src/components';

export const InvitationsPage: NextPage = () => {
  return (
    <Container>
      <Typography component="h1">InvitationsPage</Typography>
    </Container>
  );
};

export default InvitationsPage;
