import {
  APP_ROUTES,
  DashboardLayout,
  PlayIcon,
  RouterLink,
  useRouter,
} from '@example/shared';

export const Sidebar = () => {
  const { pathname } = useRouter();

  return (
    <DashboardLayout.Sidebar
      menu={{
        items: [
          [
            APP_ROUTES.cart.route,
            {
              icon: <PlayIcon />,
              text: 'Корзина',
              active: pathname.includes(APP_ROUTES.cart.route),
              component: ({ children, ...props }) => (
                <RouterLink {...props} href={APP_ROUTES.cart.getRedirectPath()}>
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
