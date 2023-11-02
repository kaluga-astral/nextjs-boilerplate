import { when } from 'mobx';

import { cacheService } from '@example/shared';
import { mock } from '@example/shared/_tests';

import { CartNetworkSources, makeFakeSourceRes } from '../../sources';

import { CartRepository } from './CartRepository';

describe('CartRepository', () => {
  const cartSourcesStub = mock<CartNetworkSources>({
    addGoods: async () => makeFakeSourceRes(undefined),
    getGoods: async () => makeFakeSourceRes({ data: [] }),
    getGoodsCount: async () => makeFakeSourceRes(0),
  });

  it('При добавлении товара в корзину инвалидирует данные корзины', async () => {
    const sut = new CartRepository(cartSourcesStub, cacheService);
    const goodsQuery = sut.getGoodsQuery();
    const goodsCountQuery = sut.getGoodsCountQuery();

    await sut.addGoods(['id']);

    await when(
      () => goodsQuery.data?.length === 0 && goodsCountQuery.data === 0,
    );

    expect(goodsQuery.data).toEqual([]);
    expect(goodsCountQuery.data).toBe(0);
  });

  it('При удалении товара из корзины инвалидирует данные корзины', async () => {
    const sut = new CartRepository(cartSourcesStub, cacheService);
    const goodsQuery = sut.getGoodsQuery();
    const goodsCountQuery = sut.getGoodsCountQuery();

    await sut.removeGoods(['id']);

    await when(
      () => goodsQuery.data?.length === 0 && goodsCountQuery.data === 0,
    );

    expect(goodsQuery.data).toEqual([]);
    expect(goodsCountQuery.data).toBe(0);
  });
});
