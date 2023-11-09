import { makeAutoObservable } from 'mobx';

import type { AdministrationRepository } from '@example/data';
import { administrationRepository as administrationRepositoryInstance } from '@example/data';
import type { Router } from '@example/shared';
import { APP_ROUTES, notify, router } from '@example/shared';
import type { BookFormValues } from '@example/modules/administration';

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

  public createBook = ({
    genre,
    pageCount,
    isPresentCoAuthor,
    ...data
  }: BookFormValues) =>
    this.creationBookMutation
      .async({ ...data, genreID: genre.id, pageCount: Number(pageCount) })
      .then(() => {
        this.notifyService.success(`${data.name} успешно создана`);
        this.routerService.push(APP_ROUTES.books.getRedirectPath());
      });
}

export const createBookScreenStore = () =>
  new CreateBookScreenStore(administrationRepositoryInstance, router, notify);
