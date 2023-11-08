import type { HttpServiceResponse } from '@example/shared';
import { apiHttpClient } from '@example/shared';

import type { CartNetworkSourcesDTO } from './dto';

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
};

export type CartNetworkSources = typeof cartNetworkSources;
