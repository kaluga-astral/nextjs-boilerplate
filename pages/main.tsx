import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from '@tanstack/react-router';

import { providerValue } from './routes';

const renderApp = (): void => {
  const root = document.getElementById('root');

  if (!root) {
    console.warn('Рут не найден');

    return;
  }

  createRoot(root).render(
    <StrictMode>
      <RouterProvider router={providerValue} />
    </StrictMode>,
  );
};

renderApp();
