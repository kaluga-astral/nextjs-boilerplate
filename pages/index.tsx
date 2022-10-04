import { NextPage } from 'next';
import { Typography } from '@astral/ui';

import { Container, Logo } from '../src/components';

export const IndexPage: NextPage = () => {
  return (
    <Container>
      <Typography component="h1">IndexPage</Typography>
      <Logo mode="vector" />
      <Logo mode="raster" />
    </Container>
  );
};

export default IndexPage;
