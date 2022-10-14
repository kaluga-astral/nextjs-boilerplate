import { graphql } from '../../../__generated__/gql';

export const UserInputFragment = graphql(/* GraphQL */ `
  fragment UserInputFragment on User {
    firstName
    middleName
    lastName
    email
  }
`);
