import { AppProps } from 'next/app';
import Head from 'next/head';
import { enableStaticRendering as enableMobxStaticRendering } from 'mobx-react-lite';

import { MainLayout } from '@example/modules/LayoutModule';
import {
  NotificationContainer,
  PageProgressbar,
  QueryClientProvider,
  StylesCacheProvider,
  ThemeProvider,
  configService,
  createStylesServerCache,
  queryClient,
  theme,
} from '@example/shared';

configService.init({
  apiUrl: process.env.NEXT_PUBLIC_API_URL as string,
});

enableMobxStaticRendering(typeof window === 'undefined');

const stylesCache = createStylesServerCache({ key: 'next' });


export const App = ({ Component, pageProps }: AppProps) => {
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
        <ThemeProvider theme={theme}>
          <QueryClientProvider client={queryClient}>
            <NotificationContainer />
            <PageProgressbar />
            <MainLayout>
              <Component {...pageProps} />
            </MainLayout>
          </QueryClientProvider>
        </ThemeProvider>
      </StylesCacheProvider>
    </>
  );
};

export default App;
