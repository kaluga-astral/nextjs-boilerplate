import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { router } from '../../../services/RouterService';

export const RouterServiceAdapter = () => {
  const navigate = useNavigate();

  const { pathname } = useLocation();

  useEffect(() => {
    router.setParams({
      navigate: (path, _params) =>
        typeof path === 'string'
          ? navigate({ pathname: path, ..._params })
          : navigate(path),
    });
  }, []);

  useEffect(() => {
    router.updatePathname(pathname);
  }, [pathname]);

  return null;
};
