import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './_app';

const renderApp = (): void => {
  const root = document.getElementById('root');

  if (!root) {
    console.warn('Рут не найден');

    return;
  }

  createRoot(root).render(
    <StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StrictMode>,
  );
};

renderApp();
