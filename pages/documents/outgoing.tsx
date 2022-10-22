import { InferGetServerSidePropsType, NextPage } from 'next';
import { useRouter } from 'next/router';
import { graphql } from '__generated__/gql';
import { ApolloClientService, Container, Layout, Typography } from 'src';

export type OutgoingDocumentsPageProps = InferGetServerSidePropsType<
  typeof getServerSideProps
>;

export const OutgoingDocumentsPage: NextPage<OutgoingDocumentsPageProps> = (
  props
) => {
  const { data } = props;
  const { pathname } = useRouter();

  return (
    <Layout data={data} location={{ pathname }}>
      <Container>
        <Typography component="h1">OutgoingDocumentsPage</Typography>
      </Container>
    </Layout>
  );
};

export const OutgoingDocumentsPageQuery = graphql(`
  query OutgoingDocumentsPage {
    user {
      ...UserInput
    }
  }
`);

export async function getServerSideProps() {
  const apollo = new ApolloClientService();
  const { data } = await apollo.query({
    query: OutgoingDocumentsPageQuery,
  });

  return {
    props: {
      data,
    },
  };
}

export default OutgoingDocumentsPage;
