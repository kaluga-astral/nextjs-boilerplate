import { autorun, makeAutoObservable } from 'mobx';
import { nanoid } from 'nanoid';

import { BacklogItemStore } from '@example/modules/BacklogModule/domain';

import { ActionType } from '../enums';

import { BACKLOG_DIALOG_HEADING } from './constants';

export class BacklogDialogStore {
  public id = '';

  public title = '';

  public description = '';

  public storyPoints = 0;

  public creator = '';

  public actionType = '';

  public isOpened = false;

  constructor(private backlogItemStore: BacklogItemStore) {
    makeAutoObservable(this);
    this.backlogItemStore = backlogItemStore;
  }

  public get heading() {
    return this.actionType === ActionType.create
      ? BACKLOG_DIALOG_HEADING.create
      : BACKLOG_DIALOG_HEADING.update;
  }

  public get isLoading() {
    return this.backlogItemStore.isLoading;
  }

  public closeDialog = () => {
    this.id = '';
    this.title = '';
    this.description = '';
    this.storyPoints = 0;
    this.creator = '';
    this.isOpened = false;
  };

  public openCreateDialog = () => {
    this.id = nanoid();
    this.actionType = ActionType.create;
    this.isOpened = true;
  };

  public openUpdateDialog = async (currentId: string) => {
    this.backlogItemStore.getOneBacklogItem(currentId);

    autorun(() => {
      const { title, description } = this.backlogItemStore.data;

      this.id = currentId;
      this.title = title;
      this.description = description;
      this.actionType = ActionType.update;
      this.isOpened = true;
    });
  };
}

export const createBacklogDialogStore = (backlogItemStore: BacklogItemStore) =>
  new BacklogDialogStore(backlogItemStore);
