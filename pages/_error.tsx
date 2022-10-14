import * as Sentry from '@sentry/nextjs';
import type { NextPage } from 'next';
import type { ErrorProps } from 'next/error';
import NextError from 'next/error';

export const ErrorPage: NextPage<ErrorProps> = (props) => {
  return <NextError statusCode={props.statusCode} />;
};

ErrorPage.getInitialProps = async (contextData) => {
  await Sentry.captureUnderscoreErrorException(contextData);

  return NextError.getInitialProps(contextData);
};

export default ErrorPage;
