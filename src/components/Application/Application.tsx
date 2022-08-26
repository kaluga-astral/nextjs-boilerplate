import Head from 'next/head';
import { AppProps as NextAppProps } from 'next/app';
import { Brand, StylesCacheProvider, ThemeProvider } from '@astral/ui';
import { StylesCache } from '@astral/ui/server';

import { Layout } from '../Layout';
import { createStylesCache } from '../../utils';
import { useTheme } from '../../hooks';

import { useLoadingProgress } from './useLoadingProgress';

const clientSideEmotionCache = createStylesCache();

export type ApplicationProps = NextAppProps & {
  brand: `${Brand}`;
  stylesCache: StylesCache;
};

export const Application = (props: ApplicationProps) => {
  const {
    Component,
    stylesCache = clientSideEmotionCache,
    pageProps,
    brand,
  } = props;
  const theme = useTheme({ brand: Brand[brand] });

  useLoadingProgress();

  return (
    <StylesCacheProvider value={stylesCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </StylesCacheProvider>
  );
};

export default Application;
