// eslint-disable-next-line import/no-extraneous-dependencies
import { RenderOptions, render } from '@testing-library/react';
import { ReactElement } from 'react';

import { ThemeWrapper } from './ThemeWrapper';

export const renderWithTheme = (ui: ReactElement, options?: RenderOptions) =>
  render(ui, { wrapper: ThemeWrapper, ...options });
