import { observer } from 'mobx-react-lite';
import { useContext } from 'react';

import {
  BinOutlineMd,
  EditOutlineMd,
  IconButton,
  ListItem,
  ListItemText,
} from '@example/shared';
import { BacklogRepositoryDTO } from '@example/data';

import { ListActionWrapperContainer } from './styled';
import { BacklogDialogStoreContext } from './BacklogDialogStoreContext';
import { BacklogStoreContext } from './BacklogStoreContext';

export type BacklogPreviewProps = Pick<
  BacklogRepositoryDTO.BacklogItemDTO,
  'id' | 'title'
>;

export const BacklogPreview = observer(({ id, title }: BacklogPreviewProps) => {
  const { deleteBacklogListItem } = useContext(BacklogStoreContext);
  const { openUpdateDialog } = useContext(BacklogDialogStoreContext);

  const handleEditClick = () => {
    openUpdateDialog(id);
  };

  const handleDeleteClick = () => {
    deleteBacklogListItem(id);
  };

  return (
    <ListItem
      key={id}
      disableGutters
      secondaryAction={
        <ListActionWrapperContainer>
          <IconButton
            aria-label="Редактировать"
            name={id}
            onClick={handleEditClick}
          >
            <EditOutlineMd />
          </IconButton>
          <IconButton
            aria-label="Удалить"
            name={id}
            onClick={handleDeleteClick}
          >
            <BinOutlineMd />
          </IconButton>
        </ListActionWrapperContainer>
      }
    >
      <ListItemText primary={title} />
    </ListItem>
  );
});
