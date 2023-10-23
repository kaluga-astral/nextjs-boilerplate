import { AppProps } from 'next/app';
import { useEffect, useState } from 'react';
import Head from 'next/head';
import { enableStaticRendering as enableMobxStaticRendering } from 'mobx-react-lite';

import { authStore } from '@example/modules/AuthModule';
import { MainLayout } from '@example/modules/LayoutModule';
import {
  ConfigProvider,
  NotificationContainer,
  PageProgressbar,
  QueryClientProvider,
  StylesCacheProvider,
  ThemeProvider,
  apiHttpClient,
  configService,
  createStylesServerCache,
  initApiHttpClient,
  monitoringErrorService,
  noDataImgSrc,
  placeholderImgSrc,
  queryClient,
  theme,
} from '@example/shared';

configService.init({
  apiUrl: process.env.NEXT_PUBLIC_API_URL as string,
});

initApiHttpClient();
enableMobxStaticRendering(typeof window === 'undefined');

export const App = ({ Component, pageProps }: AppProps) => {
  useEffect(() => {
    authStore.addProtectedHttpClients([apiHttpClient]);
    authStore.signIn('token');
  }, []);

  const [stylesCache] = useState(() => {
    return createStylesServerCache({ key: 'next' });
  });

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <title>Astral.Example</title>
      </Head>
      <StylesCacheProvider value={stylesCache}>
        <ConfigProvider
          imagesMap={{
            noDataImgSrc: noDataImgSrc,
            defaultErrorImgSrc: placeholderImgSrc,
          }}
          captureException={monitoringErrorService.captureException}
        >
          <ThemeProvider theme={theme}>
            <QueryClientProvider client={queryClient}>
              <NotificationContainer />
              <PageProgressbar />
              <MainLayout>
                <Component {...pageProps} />
              </MainLayout>
            </QueryClientProvider>
          </ThemeProvider>
        </ConfigProvider>
      </StylesCacheProvider>
    </>
  );
};

export default App;
