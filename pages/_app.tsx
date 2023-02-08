import { AppProps } from 'next/app';
import { enableStaticRendering as enableMobxStaticRendering } from 'mobx-react-lite';

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

enableMobxStaticRendering(window === undefined);

const cache = createStylesServerCache({ key: 'next' });

export const App = ({ Component, pageProps }: AppProps) => {
  return (
    <StylesCacheProvider value={cache}>
      <ThemeProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
          <NotificationContainer />
          <PageProgressbar />
          <Component {...pageProps} />
        </QueryClientProvider>
      </ThemeProvider>
    </StylesCacheProvider>
  );
};

export default App;
