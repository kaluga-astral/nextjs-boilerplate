import {
  ComponentProps,
  ReactElement,
  forwardRef,
  useCallback,
  useMemo,
} from 'react';
import { DashboardLayout } from '@astral/ui';
import { CompanyOutlineMd, ProfileOutlineMd } from '@astral/icons';

import { RouterLocation } from '../../types';
import { Link } from '../Link';

export const useSidebar = ({ location }: { location: RouterLocation }) => {
  const createComponent = useCallback(({ pathname }: { pathname: string }) => {
    return forwardRef<HTMLAnchorElement, { children: ReactElement }>(
      (props, ref) => {
        return <Link ref={ref} to={pathname} {...props} />;
      }
    );
  }, []);

  return useMemo<ComponentProps<typeof DashboardLayout.Sidebar>>(() => {
    return {
      menu: {
        items: [
          [
            'documents',
            {
              icon: <ProfileOutlineMd />,
              text: 'Документы',
              items: [
                [
                  'incoming-documents',
                  {
                    text: 'Входящие документы',
                    active: ['/documents/incoming'].includes(location.pathname),
                    component: createComponent({
                      pathname: '/documents/incoming',
                    }),
                  },
                ],
                [
                  'outgoing-documents',
                  {
                    text: 'Исходящие документы',
                    active: ['/documents/outgoing'].includes(location.pathname),
                    component: createComponent({
                      pathname: '/documents/outgoing',
                    }),
                  },
                ],
              ],
            },
          ],
          [
            'counterparties',
            {
              icon: <ProfileOutlineMd />,
              text: 'Контрагенты',
              items: [
                [
                  'invitations',
                  {
                    text: 'Приглашения',
                    active: ['/invitations'].includes(location.pathname),
                    component: createComponent({
                      pathname: '/invitations',
                    }),
                  },
                ],
              ],
            },
          ],
          [
            'organizations',
            {
              icon: <CompanyOutlineMd />,
              text: 'Мои организации',
              active: ['/organizations'].includes(location.pathname),
              component: createComponent({
                pathname: '/organizations',
              }),
            },
          ],
        ],
      },
    };
  }, []);
};
