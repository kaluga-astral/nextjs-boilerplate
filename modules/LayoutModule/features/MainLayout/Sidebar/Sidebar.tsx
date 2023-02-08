import {
  DashboardLayout,
  ProfileOutlineMd,
  RouterLink,
  useRouter,
} from '@example/shared';
import { APP_ROUTES } from '@example/shared';

export const Sidebar = () => {
  const { pathname } = useRouter();

  return (
    <DashboardLayout.Sidebar
      menu={{
        items: [
          [
            APP_ROUTES.createDraftRequest.route,
            {
              icon: <ProfileOutlineMd />,
              text: 'Создать заявку',
              active: pathname.includes(APP_ROUTES.createDraftRequest.route),
              component: (props) => (
                <RouterLink
                  href={APP_ROUTES.createDraftRequest.route}
                  {...props}
                />
              ),
            },
          ],
        ],
      }}
    />
  );
};
