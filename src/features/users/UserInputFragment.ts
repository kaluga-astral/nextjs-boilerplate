import { graphql } from '../../../__generated__/gql';

export const UserInputFragment = graphql(/* GraphQL */ `
  fragment UserInputFragment on User {
    firstname
    middlename
    lastname
    email
  }
`);
