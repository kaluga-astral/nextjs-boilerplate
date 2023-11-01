import { HttpServiceResponse, apiHttpClient } from '@example/shared';

import { CartNetworkSourcesDTO } from './dto';

export const cartNetworkSources = {
  addGoods: (goods: CartNetworkSourcesDTO.AddGoodsInputDTO) =>
    apiHttpClient.post<
      CartNetworkSourcesDTO.AddGoodsInputDTO,
      HttpServiceResponse<void>
    >('/cart/addGoods', goods),

  removeGoods: (goods: CartNetworkSourcesDTO.RemoveGoodsInputDTO) =>
    apiHttpClient.post<
      CartNetworkSourcesDTO.RemoveGoodsInputDTO,
      HttpServiceResponse<void>
    >('/cart/removeGoods', goods),

  getGoodsCount: () =>
    apiHttpClient.get<
      void,
      HttpServiceResponse<CartNetworkSourcesDTO.GoodsCountDTO>
    >('/cart/goodsCount'),

  getGoods: () =>
    apiHttpClient.get<
      void,
      HttpServiceResponse<CartNetworkSourcesDTO.CartGoodsDTO>
    >('/cart/goods'),

  // getGoods: async (): Promise<
  //   HttpServiceResponse<CartNetworkSourcesDTO.CartGoodsDTO>
  // > => ({
  //   status: 200,
  //   statusText: 'text',
  //   headers: {},
  //   config: {} as any,
  //   data: {
  //     data: [
  //       { id: '1', price: 2000, name: 'Name', count: 1 },
  //       { id: '2', price: 2000, name: 'Name', count: 0 },
  //     ],
  //   },
  // }),
};

export type CartNetworkSources = typeof cartNetworkSources;
