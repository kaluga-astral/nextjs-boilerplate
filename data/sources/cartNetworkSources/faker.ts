import { faker } from '@example/shared';

import { makeFakeSourceRes } from '../utils';

import type { CartNetworkSources } from './cartNetworkSources';
import { cartNetworkSources } from './cartNetworkSources';
import type { CartNetworkSourcesDTO } from './dto';

export const cartNetworkSourcesFaker = {
  makeGoodsList(length: number = 10): CartNetworkSourcesDTO.CartGoodsDTO {
    return {
      data: Array.from({ length }).map(() => this.makeGoodsItem()),
    };
  },
  makeGoodsItem(
    data?: Partial<CartNetworkSourcesDTO.CartGoodsItemDTO>,
  ): CartNetworkSourcesDTO.CartGoodsItemDTO {
    return {
      name: faker.commerce.productName(),
      id: faker.string.uuid(),
      price: faker.number.int(100000),
      count: faker.number.int(5),
      ...data,
    };
  },
};

export const fakeCartNetworkSources: CartNetworkSources = {
  ...cartNetworkSources,
  getGoods: async () =>
    makeFakeSourceRes(cartNetworkSourcesFaker.makeGoodsList()),
  getGoodsCount: async () => makeFakeSourceRes(10),
};
