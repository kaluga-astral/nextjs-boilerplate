import { graphql } from '../../../__generated__/gql';

export const UserInputFragment = graphql(/* GraphQL */ `
  fragment UserInput on User {
    id
    createdAt
    firstname
    middlename
    lastname
    email
  }
`);
