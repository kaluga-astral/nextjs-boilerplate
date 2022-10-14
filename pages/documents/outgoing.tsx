import { NextPage } from 'next';
import { Typography } from '@astral/ui';
import { gql } from '@apollo/client';

import { ApolloClient } from '../../src/services';
import { User } from '../../__generated__/graphql';
import { Layout } from '../../src/components';
import { UserInputFragment } from '../../src/features';

export type OutgoingDocumentsPageQueryResponse = {
  user: User;
};

export type OutgoingDocumentsPageProps = {
  data: OutgoingDocumentsPageQueryResponse;
};

export const OutgoingDocumentsPage: NextPage<OutgoingDocumentsPageProps> = (
  props
) => {
  const { data } = props;

  return (
    <Layout data={data}>
      <Typography component="h1">OutgoingDocumentsPage</Typography>
    </Layout>
  );
};

export const OutgoingDocumentsPageQuery = gql`
  query OutgoingDocumentsPageQuery {
    user {
      ...UserInputFragment
    }
  }

  ${UserInputFragment}
`;

export async function getServerSideProps() {
  const apolloClient = new ApolloClient();
  const { data } = await apolloClient.query<OutgoingDocumentsPageQueryResponse>(
    {
      query: OutgoingDocumentsPageQuery,
    }
  );

  return {
    props: {
      data,
    },
  };
}

export default OutgoingDocumentsPage;
