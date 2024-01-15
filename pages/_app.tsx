import { useEffect } from 'react';
import { enableStaticRendering as enableMobxStaticRendering } from 'mobx-react-lite';
import { Outlet } from '@tanstack/react-router';

import { authStore } from '@example/modules/auth';
import { MainLayout } from '@example/modules/layout';
import {
  ConfigProvider,
  NotificationContainer,
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

configService.init({
  apiUrl: import.meta.env.VITE_PUBLIC_API_URL,
});

initApiHttpClient();
enableMobxStaticRendering(typeof window === 'undefined');

export const App = () => {
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
      <ThemeProvider theme={theme}>
        <NotificationContainer />
        <MainLayout>
          <Outlet />
        </MainLayout>
      </ThemeProvider>
    </ConfigProvider>
  );
};

export default App;
