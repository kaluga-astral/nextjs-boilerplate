import { AppProps } from 'next/app';

import {
  NotificationContainer,
  QueryClientProvider,
  StylesCacheProvider,
  ThemeProvider,
  createStylesServerCache,
  queryClient,
  theme,
} from '@example/shared';

const cache = createStylesServerCache({ key: 'next' });

export const App = ({ Component, pageProps }: AppProps) => {
  return (
    <StylesCacheProvider value={cache}>
      <ThemeProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
          <NotificationContainer />
          <Component {...pageProps} />
        </QueryClientProvider>
      </ThemeProvider>
    </StylesCacheProvider>
  );
};

export default App;
