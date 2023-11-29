import { when } from 'mobx';

import { createCacheService } from '@example/shared';
import { mock } from '@example/shared/_tests';

import type { CartNetworkSources } from '../../sources';

import { CartRepository } from './CartRepository';

describe('CartRepository', () => {
  it('Увеличивает счетчик товаров до успешного выполнения запроса на добавление товара в корзину', async () => {
    const cartSourcesStub = mock<CartNetworkSources>({
      // постоянный pending
      addGoods: () => new Promise(() => {}),
    });

    const sut = new CartRepository(cartSourcesStub, createCacheService());
    const goodsCountQuery = sut.getGoodsCountQuery();

    goodsCountQuery.forceUpdate(0);
    sut.addGoods(['id']);
    await when(() => goodsCountQuery.data !== 0);
    expect(goodsCountQuery.data).toBe(1);
  });

  it('Откатывает значение счетчика в исходное при ошибке запроса на добавления товаров в корзину', async () => {
    const cartSourcesStub = mock<CartNetworkSources>({
      addGoods: () => Promise.reject(),
    });

    const sut = new CartRepository(cartSourcesStub, createCacheService());
    const goodsCountQuery = sut.getGoodsCountQuery();

    goodsCountQuery.forceUpdate(0);

    try {
      await sut.addGoods(['id']);
    } catch (err) {
      expect(goodsCountQuery.data).toBe(0);
    }
  });

  it('Уменьшает счетчик при удалении товаров до успешного выполнения запроса', async () => {
    const cartSourcesStub = mock<CartNetworkSources>({
      // постоянный pending
      removeGoods: () => new Promise(() => {}),
    });

    const sut = new CartRepository(cartSourcesStub, createCacheService());
    const goodsCountQuery = sut.getGoodsCountQuery();

    goodsCountQuery.forceUpdate(2);
    sut.removeGoods(['id']);
    await when(() => goodsCountQuery.data !== 2);
    expect(goodsCountQuery.data).toBe(1);
  });

  it('Откатывает значение счетчика в исходное при ошибке запроса на удаление товаров из корзины', async () => {
    const cartSourcesStub = mock<CartNetworkSources>({
      addGoods: () => Promise.reject(),
    });

    const sut = new CartRepository(cartSourcesStub, createCacheService());
    const goodsCountQuery = sut.getGoodsCountQuery();

    goodsCountQuery.forceUpdate(2);

    try {
      await sut.removeGoods(['id']);
    } catch (err) {
      expect(goodsCountQuery.data).toBe(2);
    }
  });

  it('Сбрасывает счетчик и список после выполнения resetCartCache', () => {
    const cartSourcesStub = mock<CartNetworkSources>();

    const sut = new CartRepository(cartSourcesStub, createCacheService());
    const goodsCountQuery = sut.getGoodsCountQuery();
    const goodsQuery = sut.getGoodsQuery();

    sut.resetCartCache();
    expect(goodsCountQuery.data).toBe(0);
    expect(goodsQuery.data).toEqual([]);
  });

  describe('Товары', () => {
    it('После ресета счетчик и список сбрасывают', () => {
      const cartSourcesStub = mock<CartNetworkSources>();

      const sut = new CartRepository(cartSourcesStub, createCacheService());
      const goodsCountQuery = sut.getGoodsCountQuery();
      const goodsQuery = sut.getGoodsQuery();

      sut.resetCartCache();
      expect(goodsCountQuery.data).toBe(0);
      expect(goodsQuery.data).toEqual([]);
    });
  });
});
