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

import { User } from '../../domain';

import { HeaderLogo } from './HeaderLogo';

export type HeaderProps = {
  data: {
    user: User;
  };
};

export const Header = (props: HeaderProps) => {
  const {
    data: { user },
  } = props;

  return (
    <DashboardLayout.Header
      {...{
        product: {
          name: 'Астрал.ЭДО',
          logo: HeaderLogo,
        },
        profile: {
          displayName: user.displayName,
          annotation: user.email,
          avatar: {
            alt: user.displayName,
            children: user.initials,
          },
          menu: (menuProps: MenuProps) => (
            <Menu {...menuProps}>
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
      }}
    />
  );
};
