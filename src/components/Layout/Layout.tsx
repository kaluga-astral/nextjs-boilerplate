import { ReactNode } from 'react';
import { DashboardLayout } from '@astral/ui';

import { User, UserInput } from '../../domain';
import { Header } from '../Header';
import { Sidebar } from '../Sidebar';

export type LayoutProps = {
  children: ReactNode;
  mode?: 'sidebar' | 'header-only';
  data: {
    user: UserInput;
  };
};

export const Layout = (props: LayoutProps) => {
  const { children, mode = 'sidebar', data } = props;
  const user = User.mapToDomain(data.user);

  return (
    <DashboardLayout>
      <Header data={{ user }} />
      {mode === 'sidebar' && <Sidebar />}
      <DashboardLayout.Main>{children}</DashboardLayout.Main>
    </DashboardLayout>
  );
};
