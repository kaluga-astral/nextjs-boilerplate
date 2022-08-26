import { Brand, createTheme } from '@astral/ui';

export type UseThemeConfig = {
  brand: Brand;
};

export const useTheme = (config: UseThemeConfig) => {
  const { brand } = config;

  return createTheme({
    brand,
    fontsUrls: {
      light: {
        woff: '/_assets/fonts/ubuntu/UbuntuLight.woff',
        woff2: '/_assets/fonts/ubuntu/UbuntuLight.woff2',
      },
      regular: {
        woff: '/_assets/fonts/ubuntu/UbuntuRegular.woff',
        woff2: '/_assets/fonts/ubuntu/UbuntuRegular.woff2',
      },
      medium: {
        woff: '/_assets/fonts/ubuntu/UbuntuMedium.woff',
        woff2: '/_assets/fonts/ubuntu/UbuntuMedium.woff2',
      },
      bold: {
        woff: '/_assets/fonts/ubuntu/UbuntuBold.woff',
        woff2: '/_assets/fonts/ubuntu/UbuntuBold.woff2',
      },
    },
  });
};
