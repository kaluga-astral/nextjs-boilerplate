import {
  APP_ROUTES,
  AddOutlineMd,
  DashboardLayout,
  RouterLink,
  useRouter,
} from '@example/shared';

import { CartBadge } from '../../../external';

export const Sidebar = () => {
  const router = useRouter();
  const pathname = router?.state.location.pathname;

  return (
    <DashboardLayout.Sidebar
      menu={{
        items: [
          [
            APP_ROUTES.cart.route,
            {
              icon: <CartBadge />,
              text: 'Корзина',
              active: pathname?.includes(APP_ROUTES.cart.route),
              component: ({ children, ...props }) => (
                <RouterLink {...props} to={APP_ROUTES.cart.getRedirectPath()}>
                  {children}
                </RouterLink>
              ),
            },
          ],
          [
            APP_ROUTES.creatingBook.route,
            {
              icon: <AddOutlineMd />,
              text: 'Добавить книгу',
              active: pathname?.includes(APP_ROUTES.creatingBook.route),
              component: ({ children, ...props }) => (
                <RouterLink
                  {...props}
                  to={APP_ROUTES.creatingBook.getRedirectPath()}
                >
                  {children}
                </RouterLink>
              ),
            },
          ],
        ],
      }}
    />
  );
};
