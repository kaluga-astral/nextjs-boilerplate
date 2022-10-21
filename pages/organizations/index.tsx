import { NextPage } from 'next';
import { Typography } from '@astral/ui';
import { gql } from '@apollo/client';

import { ApolloClientService } from '../../src/services';
import { User } from '../../__generated__/graphql';
import { Container, Layout } from '../../src/components';
import { UserInputFragment } from '../../src/features';

export type OrganizationsPageQueryResponse = {
  user: User;
};

export type OrganizationsPageProps = {
  data: OrganizationsPageQueryResponse;
};

export const OrganizationsPage: NextPage<OrganizationsPageProps> = (props) => {
  const { data } = props;

  return (
    <Layout data={data} mode="header-only">
      <Container>
        <Typography component="h1">OrganizationsPage</Typography>
      </Container>
    </Layout>
  );
};

export const OrganizationsPageQuery = gql`
  query OrganizationsPageQuery {
    user {
      ...UserInputFragment
    }
  }

  ${UserInputFragment}
`;

export async function getServerSideProps() {
  const apolloClient = new ApolloClientService();
  const { data } = await apolloClient.query<OrganizationsPageQueryResponse>({
    query: OrganizationsPageQuery,
  });

  return {
    props: {
      data,
    },
  };
}

export default OrganizationsPage;
