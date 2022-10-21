import { InferGetServerSidePropsType, NextPage } from 'next';
import { graphql } from '__generated__/gql';
import { ApolloClientService, Container, Layout, Logo, Typography } from 'src';

export type IndexPageProps = InferGetServerSidePropsType<
  typeof getServerSideProps
>;

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
      ...UserInput
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
