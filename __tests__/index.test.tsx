import { render } from '@testing-library/react';
import { Brand, ThemeProvider, createTheme } from '@astral/ui';

import { IndexPage } from '../pages/index';

describe('IndexPage', () => {
  it('should be render without crash', () => {
    const component = render(
      <ThemeProvider
        theme={createTheme({
          brand: Brand.DEFAULT,
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
        })}
      >
        <IndexPage />
      </ThemeProvider>
    );

    expect(component.baseElement).toBeInTheDocument();
  });
});
