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
            APP_ROUTES.createDraftRequest.route,
            {
              icon: <PlayIcon />,
              text: 'Создать заявку',
              active: pathname.includes(APP_ROUTES.createDraftRequest.route),
              component: ({ children, ...props }) => (
                <RouterLink
                  {...props}
                  href={APP_ROUTES.createDraftRequest.getRedirectPath()}
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
