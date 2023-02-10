import {
  DashboardLayout,
  PlayIcon,
  RouterLink,
  useRouter,
} from '@example/shared';

export const Sidebar = () => {
  const { pathname, createDraftRequestRoute } = useRouter();

  return (
    <DashboardLayout.Sidebar
      menu={{
        items: [
          [
            createDraftRequestRoute,
            {
              icon: <PlayIcon />,
              text: 'Создать заявку',
              active: pathname.includes(createDraftRequestRoute),
              component: ({ children, ...props }) => (
                <RouterLink {...props} href={createDraftRequestRoute}>
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
