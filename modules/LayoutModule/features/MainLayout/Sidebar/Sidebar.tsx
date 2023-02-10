import {
  DashboardLayout,
  PlayIcon,
  RouterLink,
  useRouter,
} from '@example/shared';

export const Sidebar = () => {
  const { pathname, routes } = useRouter();

  return (
    <DashboardLayout.Sidebar
      menu={{
        items: [
          [
            routes.createDraftRequest.route,
            {
              icon: <PlayIcon />,
              text: 'Создать заявку',
              active: pathname.includes(routes.createDraftRequest.route),
              component: ({ children, ...props }) => (
                <RouterLink
                  {...props}
                  href={routes.createDraftRequest.getRedirectPath()}
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
