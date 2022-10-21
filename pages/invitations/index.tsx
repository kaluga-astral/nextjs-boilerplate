import { InferGetServerSidePropsType, NextPage } from 'next';
import { graphql } from '__generated__/gql';
import { ApolloClientService, Container, Layout, Typography } from 'src';

export type InvintationPageProps = InferGetServerSidePropsType<
  typeof getServerSideProps
>;

export const InvintationPage: NextPage<InvintationPageProps> = (props) => {
  const { data } = props;

  return (
    <Layout data={data}>
      <Container>
        <Typography component="h1">InvintationPage</Typography>
      </Container>
    </Layout>
  );
};

export const InvintationPageQuery = graphql(`
  query InvintationPage {
    user {
      ...UserInput
    }
  }
`);

export async function getServerSideProps() {
  const apollo = new ApolloClientService();
  const { data } = await apollo.query({
    query: InvintationPageQuery,
  });

  return {
    props: {
      data,
    },
  };
}

export default InvintationPage;
