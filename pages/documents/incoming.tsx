import { NextPage } from 'next';
import { Typography } from '@astral/ui';
import { gql } from '@apollo/client';

import { ApolloClient } from '../../src/services';
import { User } from '../../__generated__/graphql';
import { Layout } from '../../src/components';
import { UserInputFragment } from '../../src/features';

export type IncomingDocumentsPageQueryResponse = {
  user: User;
};

export type IncomingDocumentsPageProps = {
  data: IncomingDocumentsPageQueryResponse;
};

export const IncomingDocumentsPage: NextPage<IncomingDocumentsPageProps> = (
  props
) => {
  const { data } = props;

  return (
    <Layout data={data}>
      <Typography component="h1">IncomingDocumentsPage</Typography>
    </Layout>
  );
};

export const IncomingDocumentsPageQuery = gql`
  query IncomingDocumentsPageQuery {
    user {
      ...UserInputFragment
    }
  }

  ${UserInputFragment}
`;

export async function getServerSideProps() {
  const apolloClient = new ApolloClient();
  const { data } = await apolloClient.query<IncomingDocumentsPageQueryResponse>(
    {
      query: IncomingDocumentsPageQuery,
    }
  );

  return {
    props: {
      data,
    },
  };
}

export default IncomingDocumentsPage;
