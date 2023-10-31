import { makeAutoObservable } from 'mobx';

import {
  AdministrationRepository,
  administrationRepository as administrationRepositoryInstance,
} from '@example/data';
import { APP_ROUTES, Router, notify, router } from '@example/shared';
import { BookFormValues } from '@example/modules/administration';

export class CreateBookScreenStore {
  constructor(
    private readonly administrationRepository: AdministrationRepository,
    private readonly routerService: Router,
    private readonly notifyService: typeof notify,
  ) {
    makeAutoObservable<CreateBookScreenStore, 'routerService'>(this, {
      routerService: false,
    });
  }

  private get creationBookMutation() {
    return this.administrationRepository.createBookMutation();
  }

  public createBook = ({ genre, pageCount, ...data }: BookFormValues) =>
    this.creationBookMutation
      .async({ ...data, genreID: genre.id, pageCount: Number(pageCount) })
      .then(() => {
        this.notifyService.success(`${data.name} успешно создана`);
        this.routerService.push(APP_ROUTES.books.getRedirectPath());
      });
}

export const createBookScreenStore = () =>
  new CreateBookScreenStore(administrationRepositoryInstance, router, notify);
