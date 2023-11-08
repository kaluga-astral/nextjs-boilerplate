import { createHttpService } from '../HttpService';
import { configService } from '../ConfigService';

import type { ApiDataError } from './error';
import { formatApiError } from './utils';

/**
 * Создаем экземпляр httpService
 */
const httpService = createHttpService();

/**
 *
 *@description Инициализация apiHttpClient
 */
export const initApiHttpClient = () => {
  const apiHttpClient = httpService.init({
    baseURL: configService.config.apiUrl,
  });

  apiHttpClient.initErrorFormatter<ApiDataError>(formatApiError);
};

/**
 * @description Http service для взаимодействия с основным api
 * */
export const apiHttpClient = httpService;
