import { expect, vi } from 'vitest';
import { when } from 'mobx';

import { cacheService } from '@example/shared';

import { cartNetworkSources } from '../../sources';
import { makeFakeSourceRes } from '../../sources/_tests';

import { CartRepository } from './CartRepository';

describe('CartRepository', () => {
  it('При добавлении товара в корзину инвалидирует данные корзины', async () => {
    vi.spyOn(cartNetworkSources, 'addGoods').mockResolvedValue(
      makeFakeSourceRes(undefined),
    );

    vi.spyOn(cartNetworkSources, 'getGoods').mockResolvedValue(
      makeFakeSourceRes({ data: [] }),
    );

    vi.spyOn(cartNetworkSources, 'getGoodsCount').mockResolvedValue(
      makeFakeSourceRes(0),
    );

    const sut = new CartRepository(cartNetworkSources, cacheService);
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
    vi.spyOn(cartNetworkSources, 'removeGoods').mockResolvedValue(
      makeFakeSourceRes(undefined),
    );

    vi.spyOn(cartNetworkSources, 'getGoods').mockResolvedValue(
      makeFakeSourceRes({ data: [] }),
    );

    vi.spyOn(cartNetworkSources, 'getGoodsCount').mockResolvedValue(
      makeFakeSourceRes(0),
    );

    const sut = new CartRepository(cartNetworkSources, cacheService);
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
