import { observer, useLocalObservable } from 'mobx-react-lite';
import logo from 'public/images/logo.png';

import {
  DashboardLayout,
  Divider,
  Image,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  ProfileOutlineMd,
  QuitOutlineMd,
} from '@example/shared';

import { createHeaderStore } from './store';

export const Header = observer(() => {
  const { user } = useLocalObservable(createHeaderStore);

  return (
    <DashboardLayout.Header
      product={{
        name: 'Nextjs-boilerplate',
        logo: () => (
          <Image
            width={20}
            height={20}
            src={logo.src}
            alt="Логотип React-boilerplate"
          />
        ),
      }}
      profile={{
        displayName: user.displayName,
        menu: (props) => (
          <Menu {...props}>
            <MenuItem>
              <ListItemIcon>
                <ProfileOutlineMd />
              </ListItemIcon>
              <ListItemText>Мой профиль</ListItemText>
            </MenuItem>
            <Divider />
            <MenuItem>
              <ListItemIcon>
                <QuitOutlineMd />
              </ListItemIcon>
              <ListItemText>Выйти</ListItemText>
            </MenuItem>
          </Menu>
        ),
      }}
    />
  );
});
