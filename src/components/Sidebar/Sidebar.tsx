import { DashboardLayout } from '@astral/ui';

import { useSidebar } from './useSidebar';

export const Sidebar = () => {
  const sidebar = useSidebar();

  return <DashboardLayout.Sidebar {...sidebar} />;
};
