import { observer } from 'mobx-react-lite';
import { useContext } from 'react';

import {
  Button,
  Form,
  FormSubmitButton,
  SideDialog,
  SideDialogActions,
  SideDialogContent,
  SideDialogContentText,
  useForm,
} from '@example/shared';

import { BacklogItem } from '../BacklogItem';
import { BacklogDialogStoreContext } from '../Backlog/BacklogDialogStoreContext';

export type FormValues = {
  title: string;
  description: string;
};

export const BacklogDialog = observer(() => {
  const { closeDialog, isOpened, heading, isLoading, title, description } =
    useContext(BacklogDialogStoreContext);
  const form = useForm<FormValues>({
    // resolver: resolver<FormValues>(validationSchema),
  });
  const handleSubmit = () => {};
  const handleClose = () => {
    closeDialog();
  };

  return (
    <SideDialog title={heading} open={isOpened}>
      <Form form={form} onSubmit={handleSubmit}>
        <SideDialogContent>
          <SideDialogContentText id="alert-dialog-description">
            <BacklogItem
              isLoading={isLoading}
              title={title}
              description={description}
            />
          </SideDialogContentText>
        </SideDialogContent>
        <SideDialogActions>
          <Button variant="text" onClick={handleClose}>
            Отмена
          </Button>
          <FormSubmitButton onClick={handleClose} disabled={isLoading}>
            Готово
          </FormSubmitButton>
        </SideDialogActions>
      </Form>
    </SideDialog>
  );
});
