import { ComponentProps, forwardRef, useMemo } from 'react';
import { DashboardLayout } from '@astral/ui';
import { CompanyOutlineMd, ProfileOutlineMd } from '@astral/icons';

import { Link } from '../Link';

type Item = ComponentProps<
  typeof DashboardLayout.Sidebar
>['menu']['items'][number];

const useDocuments = () => {
  return useMemo<Item>(() => {
    return [
      'documents',
      {
        icon: <ProfileOutlineMd />,
        text: 'Документы',
        active: true,
        items: [
          [
            'incoming-documents',
            {
              text: 'Входящие документы',
              active: true,
              component: forwardRef((props, ref) => {
                return <Link ref={ref} to="/documents/incoming" {...props} />;
              }),
            },
          ],
          [
            'outgoing-documents',
            {
              text: 'Исходящие документы',
              active: false,
              component: forwardRef((props, ref) => {
                return <Link ref={ref} to="/documents/outgoing" {...props} />;
              }),
            },
          ],
        ],
      },
    ];
  }, []);
};

const useCounterparties = () => {
  return useMemo<Item>(() => {
    return [
      'counterparties',
      {
        icon: <CompanyOutlineMd />,
        text: 'Контрагенты',
        items: [
          [
            'invitations',
            {
              text: 'Приглашения',
              active: false,
              component: forwardRef((props, ref) => {
                return <Link ref={ref} to="/invitations" {...props} />;
              }),
            },
          ],
        ],
      },
    ];
  }, []);
};

const useOrganizations = () => {
  return useMemo<Item>(() => {
    return [
      'organizations',
      {
        icon: <CompanyOutlineMd />,
        text: 'Мои организации',
        active: false,
        component: forwardRef((props, ref) => {
          return <Link ref={ref} to="/organizations" {...props} />;
        }),
      },
    ];
  }, []);
};

export const useSidebarItems = () => {
  const documents = useDocuments();
  const counterparties = useCounterparties();
  const organizations = useOrganizations();

  return useMemo(() => {
    return [documents, counterparties, organizations];
  }, [documents, counterparties, organizations]);
};

export const useSidebar = () => {
  const items = useSidebarItems();
  const sidebar: ComponentProps<typeof DashboardLayout.Sidebar> =
    useMemo(() => {
      return {
        menu: {
          items,
        },
      };
    }, [items]);

  return sidebar;
};
