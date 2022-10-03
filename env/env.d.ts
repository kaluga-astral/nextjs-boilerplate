import { Brand } from '@astral/ui';

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      BRAND: Brand;
    }
  }
}
