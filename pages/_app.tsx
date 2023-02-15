import { AppProps } from 'next/app';
import { useEffect } from 'react';
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
  queryClient,
  theme,
} from '@example/shared';

configService.init({
  apiUrl: process.env.NEXT_PUBLIC_API_URL as string,
});

initApiHttpClient();
enableMobxStaticRendering(typeof window === 'undefined');

const stylesCache = createStylesServerCache({ key: 'next' });

export const App = ({ Component, pageProps }: AppProps) => {
  useEffect(() => {
    authStore.addProtectedHttpClients([apiHttpClient]);
    authStore.signIn('token');
  }, []);

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
