import {
  CompanyOutlineMd,
  ProfileOutlineMd,
  QuitOutlineMd,
  SettingsFillMd,
} from '@astral/icons';
import {
  DashboardLayout,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  MenuProps,
} from '@astral/ui';

import { HeaderLogo } from './HeaderLogo';

export const useHeader = () => {
  const header = {
    product: {
      name: 'Астрал.ЭДО',
      logo: HeaderLogo,
    },
    profile: {
      displayName: 'Григорьев Виталий',
      annotation: 'vitatiy_grig@mail.ru',
      avatar: {
        alt: 'Григорьев Виталий',
        children: 'ГВ',
      },
      menu: (props: MenuProps) => (
        <Menu {...props}>
          <MenuItem>
            <ListItemIcon>
              <ProfileOutlineMd />
            </ListItemIcon>
            <ListItemText>Мой профиль</ListItemText>
          </MenuItem>
          <MenuItem>
            <ListItemIcon>
              <CompanyOutlineMd />
            </ListItemIcon>
            <ListItemText>Мои организации</ListItemText>
          </MenuItem>
          <MenuItem>
            <ListItemIcon>
              <SettingsFillMd />
            </ListItemIcon>
            <ListItemText>Настройки</ListItemText>
          </MenuItem>
          {/* <Divider /> */}
          <MenuItem>
            <ListItemIcon>
              <QuitOutlineMd />
            </ListItemIcon>
            <ListItemText>Выйти</ListItemText>
          </MenuItem>
        </Menu>
      ),
    },
  };

  return header;
};

export const Header = () => {
  const header = useHeader();

  return <DashboardLayout.Header {...header} />;
};

export default Header;
