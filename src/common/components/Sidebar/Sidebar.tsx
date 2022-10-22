import { DashboardLayout } from '@astral/ui';

import { RouterLocation } from '../../types';

import { useSidebar } from './useSidebar';

export type SidebarProps = {
  location: RouterLocation;
};

export const Sidebar = (props: SidebarProps) => {
  const { location } = props;
  const sidebar = useSidebar({ location });

  return <DashboardLayout.Sidebar {...sidebar} />;
};
