import NextImage from 'next/image';

import rasterLogoSrc from './logo.png';
import vectorLogoSrc from './logo.svg';

export type LogoProps = {
  mode?: 'vector' | 'raster';
};

export const Logo = (props: LogoProps) => {
  const { mode = 'vector' } = props;

  return <NextImage src={mode === 'vector' ? vectorLogoSrc : rasterLogoSrc} />;
};
