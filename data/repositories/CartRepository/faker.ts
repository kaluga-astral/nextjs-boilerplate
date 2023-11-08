import { cartNetworkSourcesFaker } from '../../sources';

import type { CartRepositoryDTO } from './dto';

export const cartRepositoryFaker = {
  makeGoodsList(length?: number): CartRepositoryDTO.GoodsDTO {
    return cartNetworkSourcesFaker.makeGoodsList(length).data;
  },
  makeGoodsItem(
    data?: Partial<CartRepositoryDTO.GoodsItemDTO>,
  ): CartRepositoryDTO.GoodsItemDTO {
    return cartNetworkSourcesFaker.makeGoodsItem(data);
  },
};
