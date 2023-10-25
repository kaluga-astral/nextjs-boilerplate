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
};

export type CartNetworkSources = typeof cartNetworkSources;
