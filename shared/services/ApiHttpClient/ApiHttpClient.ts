import { HttpService, createHttpService } from '../HttpService';
import { configService } from '../ConfigService';

import { ApiDataError } from './error';
import { formatApiError } from './utils';

/**
 * Создаем экземпляр httpService
 */
const httpService = createHttpService();

/**
 *
 *@description Инициализация apiHttpClient
 */
export const createApiHttpClient = (): HttpService => {
  const apiHttpClient = httpService.init({
    baseURL: configService.config.apiUrl,
  });

  apiHttpClient.initErrorFormatter<ApiDataError>(formatApiError);

  return apiHttpClient;
};

/**
 * @description Http service для взаимодействия с основным api
 * */
export const apiHttpClient = httpService;
