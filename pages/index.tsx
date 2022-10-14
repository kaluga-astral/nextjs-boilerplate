import { NextPage } from 'next';
import { Typography } from '@astral/ui';
import { gql } from '@apollo/client';

import { ApolloClient } from '../src/services';
import { User } from '../__generated__/graphql';
import { Container, Layout, Logo } from '../src/components';
import { UserInputFragment } from '../src/features';

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

export const IndexPageQuery = gql`
  query IndexPageQuery {
    user {
      ...UserInputFragment
    }
  }

  ${UserInputFragment}
`;

export async function getServerSideProps() {
  const apolloClient = new ApolloClient();
  const { data } = await apolloClient.query<IndexPageQueryResult>({
    query: IndexPageQuery,
  });

  return {
    props: {
      data,
    },
  };
}

export default IndexPage;
