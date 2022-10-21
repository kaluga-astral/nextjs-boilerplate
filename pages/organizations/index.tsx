import { InferGetServerSidePropsType, NextPage } from 'next';
import { graphql } from '__generated__/gql';
import { ApolloClientService, Container, Layout, Typography } from 'src';

export type OrganizationPageProps = InferGetServerSidePropsType<
  typeof getServerSideProps
>;

export const OrganizationPage: NextPage<OrganizationPageProps> = (props) => {
  const { data } = props;

  return (
    <Layout data={data}>
      <Container>
        <Typography component="h1">OrganizationPage</Typography>
      </Container>
    </Layout>
  );
};

export const OrganizationPageQuery = graphql(`
  query OrganizationPage {
    user {
      ...UserInput
    }
  }
`);

export async function getServerSideProps() {
  const apollo = new ApolloClientService();
  const { data } = await apollo.query({
    query: OrganizationPageQuery,
  });

  return {
    props: {
      data,
    },
  };
}

export default OrganizationPage;
