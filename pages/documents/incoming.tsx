import { InferGetServerSidePropsType, NextPage } from 'next';
import { graphql } from '__generated__/gql';
import { ApolloClientService, Container, Layout, Typography } from 'src';

export type IncomingDocumentsPageProps = InferGetServerSidePropsType<
  typeof getServerSideProps
>;

export const IncomingDocumentsPage: NextPage<IncomingDocumentsPageProps> = (
  props
) => {
  const { data } = props;

  return (
    <Layout data={data}>
      <Container>
        <Typography component="h1">IncomingDocumentsPage</Typography>
      </Container>
    </Layout>
  );
};

export const IncomingDocumentsPageQuery = graphql(`
  query IncomingDocumentsPage {
    user {
      ...UserInput
    }
  }
`);

export async function getServerSideProps() {
  const apollo = new ApolloClientService();
  const { data } = await apollo.query({
    query: IncomingDocumentsPageQuery,
  });

  return {
    props: {
      data,
    },
  };
}

export default IncomingDocumentsPage;
