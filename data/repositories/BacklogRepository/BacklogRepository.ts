import { DataError, cacheService } from '@example/shared';

import {
  BacklogNetworkSources,
  backlogNetworkSources as BacklogNetworkSourcesInstance,
} from '../../sources';

import { BacklogRepositoryDTO } from './dto';

const BACKLOG_LIST_CACHE_ID = 'BACKLOG_LIST';
const BACKLOG_ITEM_CACHE_ID = 'BACKLOG_ITEM';

export class BacklogRepository {
  constructor(private readonly backlogNetworkSources: BacklogNetworkSources) {
    this.backlogNetworkSources = BacklogNetworkSourcesInstance;
  }

  /**
   * @description Загрузка списка задач
   */
  public getBacklogList = () => {
    return cacheService.createQuery<
      BacklogRepositoryDTO.BacklogDTO,
      DataError<Record<string, unknown>>
    >([BACKLOG_LIST_CACHE_ID], async () => {
      const result = await this.backlogNetworkSources.getBacklogList();

      console.log('cacheService', cacheService);

      return {
        list: result.list,
        totalCount: result.totalCount,
      };
    });
  };

  public getOneBacklogItem = (id: string) => {
    return cacheService.createQuery<
      BacklogRepositoryDTO.BacklogItemDTO,
      DataError<Record<string, unknown>>
    >([BACKLOG_ITEM_CACHE_ID, id], async () => {
      const result = await this.backlogNetworkSources.getOneBacklogItem(id);

      return result;
    });
  };

  public deleteBacklogListItem = async (id: string) => {
    this.backlogNetworkSources.deleteBacklogListItem(id);
  };

  public createOneBacklogItem = async (
    input: BacklogRepositoryDTO.CreateBacklogItemInputDTO,
  ) => {
    this.backlogNetworkSources.createOneBacklogItem(input);
  };
}

export const backlogRepository = new BacklogRepository(
  BacklogNetworkSourcesInstance,
);
