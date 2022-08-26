import { ReactNode } from 'react';
import { DashboardLayout } from '@astral/ui';

import { Header } from '../Header';
import { Sidebar } from '../Sidebar';

export type LayoutProps = {
  children: ReactNode;
};

export const Layout = (props: LayoutProps) => {
  const { children } = props;

  return (
    <DashboardLayout>
      <Header />
      <Sidebar />
      <DashboardLayout.Main>{children}</DashboardLayout.Main>
    </DashboardLayout>
  );
};

export default Layout;
