import { HttpServiceResponse, apiHttpClient } from '@example/shared';

import { CartSourcesNetworkDTO } from './dto';

export const cartNetworkSources = {
  addGoods: (goods: CartSourcesNetworkDTO.AddGoodsInputDTO) =>
    apiHttpClient.post<
      CartSourcesNetworkDTO.AddGoodsInputDTO,
      HttpServiceResponse<void>
    >('/cart/addGoods', goods),

  removeGoods: (goods: CartSourcesNetworkDTO.RemoveGoodsInputDTO) =>
    apiHttpClient.post<
      CartSourcesNetworkDTO.RemoveGoodsInputDTO,
      HttpServiceResponse<void>
    >('/cart/removeGoods', goods),

  getGoodsCount: () =>
    apiHttpClient.get<
      void,
      HttpServiceResponse<CartSourcesNetworkDTO.GoodsCountDTO>
    >('/cart/goodsCount'),

  getGoods: () =>
    apiHttpClient.get<
      void,
      HttpServiceResponse<CartSourcesNetworkDTO.CartGoodsDTO>
    >('/cart/goods'),

  // getGoods: async (): Promise<
  //   HttpServiceResponse<CartSourcesNetworkDTO.CartGoodsDTO>
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
