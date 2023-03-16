import { makeAutoObservable } from 'mobx';

import { QueryStore, notify } from '@example/shared';
import { TariffRepositoryDTO, tariffRepository } from '@example/data';

export type TariffFormAutocompleteValue = Pick<
  TariffRepositoryDTO.TariffDTO,
  'name' | 'id' | 'price'
>;

export class TariffAutocompleteStore {
  tariffsCount: number = 10;

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
  }

  get tariffsQuery(): QueryStore<TariffRepositoryDTO.TariffListDTO> {
    return tariffRepository.tariffsQuery(this.tariffsCount);
  }

  get tariffs(): TariffFormAutocompleteValue[] {
    return (this.tariffsQuery.data?.data || [])?.map(({ name, id, price }) => ({
      name,
      id,
      price,
    }));
  }

  public fetchTariffs = () => {
    this.tariffsQuery.sync();
  };

  public setTariffsCount = (count: number) => {
    this.tariffsCount = count;
  };

  private fetchEmptyTariffs = async (count: number) => {
    const res = await tariffRepository.tariffsQuery(count).async();

    console.log(res.total);
  };
}

export const createTariffAutocompleteStore = () =>
  new TariffAutocompleteStore();
