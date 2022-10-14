import { NextPage } from 'next';
import { Typography } from '@astral/ui';
import { gql } from '@apollo/client';

import { ApolloClient } from '../../src/services';
import { User } from '../../__generated__/graphql';
import { Layout } from '../../src/components';
import { UserInputFragment } from '../../src/features';

export type InvitationsPageQueryResponse = {
  user: User;
};

export type InvitationsPageProps = {
  data: InvitationsPageQueryResponse;
};

export const InvitationsPage: NextPage<InvitationsPageProps> = (props) => {
  const { data } = props;

  return (
    <Layout data={data}>
      <Typography component="h1">InvitationsPage</Typography>
    </Layout>
  );
};

export const InvitationsPageQuery = gql`
  query InvitationsPageQuery {
    user {
      ...UserInputFragment
    }
  }

  ${UserInputFragment}
`;

export async function getServerSideProps() {
  const apolloClient = new ApolloClient();
  const { data } = await apolloClient.query<InvitationsPageQueryResponse>({
    query: InvitationsPageQuery,
  });

  return {
    props: {
      data,
    },
  };
}

export default InvitationsPage;
