import type { RouteObject } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import { lazy } from 'react';

import { APP_ROUTES } from '@example/shared';

const IndexPage = lazy(() => import('./index'));

const CartPage = lazy(() => import('./cart'));

const CreateBookPage = lazy(() => import('./admin/createBook'));

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <Outlet />,
    children: [
      {
        index: true,
        element: <IndexPage />,
      },
      {
        path: APP_ROUTES.cart.route,
        element: <CartPage />,
      },
      {
        path: APP_ROUTES.creatingBook.route,
        element: <CreateBookPage />,
      },
    ],
  },
];
