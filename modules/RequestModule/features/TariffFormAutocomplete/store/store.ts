import { makeAutoObservable } from 'mobx';

import { notify } from '@example/shared';

import { TariffDTO, TariffListDTO } from '../../../data';

export type TariffFormAutocompleteValue = Pick<
  TariffDTO,
  'name' | 'id' | 'price'
>;

export class TariffAutocompleteStore {
  isLoading = true;

  tariffs: TariffFormAutocompleteValue[] = [];

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
  }

  private formatTariffs = (
    data: TariffListDTO['data'],
  ): TariffFormAutocompleteValue[] =>
    data.map(({ name, id, price }) => ({
      name,
      id,
      price,
    }));

  public setFetchTariffResult = ({
    isLoading,
    data,
    error,
  }: {
    isLoading: boolean;
    data?: TariffListDTO;
    error: Error | null;
  }) => {
    this.isLoading = isLoading;

    if (error) {
      notify.error(error.message);

      return;
    }

    this.tariffs = this.formatTariffs(data?.data || []);
  };
}

export const createTariffAutocompleteStore = () =>
  new TariffAutocompleteStore();
