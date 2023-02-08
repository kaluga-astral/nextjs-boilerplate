import { makeAutoObservable } from 'mobx';

import { RequestWithTariffDTO } from '../../../data';

export type RequestViewModel = {
  description: string;
  tariffName: string;
};

export class RequestViewerStore {
  isLoading = true;

  error: Error | null = null;

  request: RequestViewModel | undefined;

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
  }

  public setFetchRequestData = ({
    isLoading,
    data,
    error,
  }: {
    isLoading: boolean;
    data?: RequestWithTariffDTO;
    error: Error | null;
  }) => {
    this.isLoading = isLoading;
    this.error = null;

    if (error || !data) {
      this.error = error;

      return;
    }

    const { description, tariff } = data;

    this.request = { description, tariffName: tariff.name };
  };
}

export const createRequestViewerStore = () => new RequestViewerStore();
