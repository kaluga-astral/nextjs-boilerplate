import { useEffect } from 'react';
import { enableStaticRendering as enableMobxStaticRendering } from 'mobx-react-lite';
import { useRoutes } from 'react-router-dom';

import { authStore } from '@example/modules/auth';
import { MainLayout } from '@example/modules/layout';
import {
  ConfigProvider,
  NotificationContainer,
  RouterServiceAdapter,
  ThemeProvider,
  apiHttpClient,
  configService,
  initApiHttpClient,
  monitoringErrorService,
  noDataImgSrc,
  outdatedReleaseImgSrc,
  placeholderImgSrc,
  theme,
} from '@example/shared';

import { routes } from './routes';

configService.init({
  apiUrl: import.meta.env.VITE_PUBLIC_API_URL,
});

initApiHttpClient();
enableMobxStaticRendering(typeof window === 'undefined');

export const App = () => {
  const renderRoutes = useRoutes(routes);

  useEffect(() => {
    authStore.addProtectedHttpClients([apiHttpClient]);
    authStore.signIn('token');
  }, []);

  return (
    <ConfigProvider
      imagesMap={{
        noDataImgSrc: noDataImgSrc,
        defaultErrorImgSrc: placeholderImgSrc,
        outdatedReleaseErrorImgSrc: outdatedReleaseImgSrc,
      }}
      captureException={monitoringErrorService.captureException}
    >
      <RouterServiceAdapter />
      <ThemeProvider theme={theme}>
        <NotificationContainer />
        <MainLayout>{renderRoutes}</MainLayout>
      </ThemeProvider>
    </ConfigProvider>
  );
};

export default App;
