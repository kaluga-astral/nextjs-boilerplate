import { ReactNode } from 'react';
import { DashboardLayout } from '@astral/ui';

import { FragmentType, useFragment } from '../../../../__generated__/gql';
import { User } from '../../../domain';
import { UserInputFragment } from '../../../features';
import { Header } from '../Header';
import { Sidebar } from '../Sidebar';

export type LayoutProps = {
  children: ReactNode;
  mode?: 'sidebar' | 'header-only';
  data: {
    user: FragmentType<typeof UserInputFragment>;
  };
};

export const Layout = (props: LayoutProps) => {
  const { children, mode = 'sidebar', data } = props;
  const user = User.mapToDomain(useFragment(UserInputFragment, data.user));

  return (
    <DashboardLayout>
      <Header data={{ user }} />
      {mode === 'sidebar' && <Sidebar />}
      <DashboardLayout.Main>{children}</DashboardLayout.Main>
    </DashboardLayout>
  );
};
