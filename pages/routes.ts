import { RootRoute, Route } from '@tanstack/react-router';

import App from '@example/pages/_app';
import { APP_ROUTES, router } from '@example/shared';
import IndexPage from '@example/pages/index';
import CartPage from '@example/pages/cart';
import CreateBookPage from '@example/pages/admin/createBook';

const rootRout = new RootRoute({
  component: App,
});

const indexPage = new Route({
  component: IndexPage,
  path: APP_ROUTES.books.route,
  getParentRoute: () => rootRout,
});

const cartPage = new Route({
  component: CartPage,
  path: APP_ROUTES.cart.route,
  getParentRoute: () => rootRout,
});

const createBookPage = new Route({
  component: CreateBookPage,
  path: APP_ROUTES.creatingBook.route,
  getParentRoute: () => rootRout,
});

router.update({
  routeTree: rootRout.addChildren([indexPage, cartPage, createBookPage]),
});

export const providerValue = router;
