import {
  ApolloClient as ApolloClientBase,
  InMemoryCache,
  NormalizedCacheObject,
} from '@apollo/client';

export class ApolloClient extends ApolloClientBase<NormalizedCacheObject> {
  constructor() {
    super({
      cache: new InMemoryCache(),
      uri: 'http://localhost:3000/api/graphql',
    });
  }
}
