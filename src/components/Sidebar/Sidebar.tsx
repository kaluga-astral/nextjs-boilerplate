import { DashboardLayout } from '@astral/ui';

export const useSidebar = () => {
  const sidebar = { menu: { items: [] } };

  return sidebar;
};

export const Sidebar = () => {
  const sidebar = useSidebar();

  return <DashboardLayout.Sidebar {...sidebar} />;
};
