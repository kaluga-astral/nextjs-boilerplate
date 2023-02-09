import NextjsProgressbar from 'nextjs-progressbar';

import { useTheme } from '../../hooks';

export const PageProgressbar = () => {
  const theme = useTheme();

  return <NextjsProgressbar color={theme.palette.primary.main} height={3} />;
};
