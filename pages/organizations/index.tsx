import { NextPage } from 'next';
import { Typography } from '@astral/ui';

import { Container } from '../../src/components';

export const OrganizationsPage: NextPage = () => {
  return (
    <Container>
      <Typography component="h1">OrganizationsPage</Typography>
    </Container>
  );
};

export default OrganizationsPage;
