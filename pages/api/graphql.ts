import type { NextApiRequest, NextApiResponse } from 'next';
import { ApolloServer, gql } from 'apollo-server-micro';

const typeDefs = gql`
  type User {
    id: String!
    createdAt: String!
    firstName: String!
    middleName: String!
    lastName: String!
    email: String!
  }
  type Query {
    user: User
  }
`;

const resolvers = {
  Query: {
    user() {
      return {
        firstName: 'Виталий',
        middleName: 'Александрович',
        lastName: 'Григорьев',
        email: 'vitatiy_grigoriev@astral.ru',
      };
    },
  },
};

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
});

const startServer = apolloServer.start();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await startServer;
  await apolloServer.createHandler({
    path: '/api/graphql',
  })(req, res);
}

export const config = {
  api: {
    bodyParser: false,
  },
};
