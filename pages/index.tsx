import { NextPage } from 'next';
import { Typography } from '@astral/ui';

import { ApolloClientService } from '../src/services';
import { User } from '../__generated__/graphql';
import { graphql } from '../__generated__/gql';
import { Container, Layout, Logo } from '../src/components';

export type IndexPageQueryResult = {
  user: User;
};

export type IndexPageProps = {
  data: IndexPageQueryResult;
};

export const IndexPage: NextPage<IndexPageProps> = (props) => {
  const { data } = props;

  return (
    <Layout data={data}>
      <Container>
        <Typography component="h1">IndexPage</Typography>
        <Logo mode="vector" />
        <Logo mode="raster" />
      </Container>
    </Layout>
  );
};

export const IndexPageQuery = graphql(`
  query IndexPage {
    user {
      ...UserInputFragment
    }
  }
`);

export async function getServerSideProps() {
  const apollo = new ApolloClientService();
  const { data } = await apollo.query({
    query: IndexPageQuery,
  });

  return {
    props: {
      data,
    },
  };
}

export default IndexPage;
