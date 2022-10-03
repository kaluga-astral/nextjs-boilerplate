/// <reference types="@emotion/react/types/css-prop" />
/// <reference types="@astral/ui/declaration/emotion" />
/// <reference types="@astral/ui/declaration/mui-material" />

import { Theme as BaseTheme } from '@astral/ui';

declare module '@emotion/react' {
  export interface Theme extends BaseTheme {}
}
