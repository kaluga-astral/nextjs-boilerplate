import { makeAutoObservable, runInAction } from 'mobx';
import Error from 'next/error';

type Key = number | string;

type QueryParams<TData> = {
  fetchPolicy?: 'network-only' | 'cache-first';
  onSuccess?: (res: TData) => void;
};

// TODO: сделать еще MutationStore
export class QueryStore<TData> {
  public data: TData | undefined;

  public isInvalid = false;

  get data() {
    if (!this.isInvalid) {
      this.sync();
    }
  }

  public isLoading: boolean = false;

  public isSuccess: boolean = false;

  public isError: boolean = false;

  public error: Error | undefined;

  constructor(private readonly executor: () => Promise<TData>) {
    makeAutoObservable(this);
  }

  public sync = ({ onSuccess, fetchPolicy }: QueryParams<TData> = {}) => {
    const execute = () => {
      this.isLoading = true;

      this.executor()
        .then((res) => {
          this.isSuccess = true;
          this.data = res;
          onSuccess?.(res);
        })
        .catch((err) => {
          this.isError = true;
          this.error = err;
        })
        .finally(() => {
          runInAction(() => {
            this.isLoading = false;
          });
        });
    };

    // если cache-first, то значения беруться из кэша и запрос не выполняется
    if (fetchPolicy === 'network-only' || !!this.data) {
      execute();
    }
  };

  public async = (): Promise<TData> => {
    this.isLoading = true;
    this.error = undefined;

    return this.executor()
      .then((res) => {
        this.isSuccess = true;
        this.data = res;

        return res;
      })
      .catch((err) => {
        this.isError = true;
        this.error = err;

        throw err;
      })
      .finally(() => {
        runInAction(() => {
          this.isLoading = false;
        });
      });
  };

  public invalidateCache = () => {
    this.isInvalid = true;
  };

  public clearCache = () => {
    this.data = undefined;
    this.error = undefined;
    this.isSuccess = false;
  };

  public updateCache = (
    updater: (prev: TData | undefined) => TData | undefined,
  ) => {
    this.data = updater(this.data);
  };
}

export class QueryCache {
  cache: Record<string, QueryStore<any>> = {};

  // public clearAllCache = () => {
  //   this.cache[key].clearCache()
  // };

  // TODO: сделать еще createMutation
  public createQuery = <TData>(
    key: Key[],
    executor: () => Promise<TData>,
  ): QueryStore<TData> => {
    const queryHash = JSON.stringify(key);

    if (this.cache[queryHash]) {
      return this.cache[queryHash];
    }

    const queryStore = new QueryStore<TData>(executor);

    this.cache[queryHash] = queryStore;

    return queryStore;
  };
}

export const queryCache = new QueryCache();
