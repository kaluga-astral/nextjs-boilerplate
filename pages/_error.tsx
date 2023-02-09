import * as Sentry from '@sentry/nextjs';
import type { NextPage } from 'next';
import type { ErrorProps } from 'next/error';
import NextErrorComponent from 'next/error';
import errorPlaceholderImg from 'public/images/error-placeholder.png';

import { Placeholder } from '@example/shared';

export const ErrorPage: NextPage<ErrorProps> = () => {
  return (
    <Placeholder title="Произошла ошибка" imgSrc={errorPlaceholderImg.src} />
  );
};

ErrorPage.getInitialProps = async (contextData) => {
  await Sentry.captureUnderscoreErrorException(contextData);

  return NextErrorComponent.getInitialProps(contextData);
};

export default ErrorPage;
