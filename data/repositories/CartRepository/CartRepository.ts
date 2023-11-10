import type { ApiDataError, CacheService } from '@example/shared';
import { cacheService } from '@example/shared';

import type { CartNetworkSources } from '../../sources';
import { fakeCartNetworkSources } from '../../sources';

import type { CartRepositoryDTO } from './dto';

export class CartRepository {
  private goodsKey = 'cart-goods';

  private goodsCountKey = 'cart-goods-count';

  constructor(
    private readonly cartNetworkSources: CartNetworkSources,
    private readonly cache: CacheService,
  ) {}

  private resetCartCache = () => {
    this.getGoodsQuery().forceUpdate([]);
    this.getGoodsCountQuery().forceUpdate(0);
  };

  /**
   * Товары, добавленные в корзину
   */
  public getGoodsQuery = () =>
    // TODO: удалить проброс ошибки после фикса бага, из-за которого generic MobxQuery класса не прокидывает до сюда тип ошибки
    this.cache.createQuery<CartRepositoryDTO.GoodsDTO, ApiDataError>(
      [this.goodsKey],
      () => this.cartNetworkSources.getGoods().then(({ data }) => data.data),
    );

  /**
   * Общее число товаров, добавленное в корзину
   */
  public getGoodsCountQuery = () =>
    this.cache.createQuery<CartRepositoryDTO.GoodsCountDTO>(
      [this.goodsCountKey],
      () => this.cartNetworkSources.getGoodsCount().then(({ data }) => data),
    );

  public addGoods = async (
    goods: CartRepositoryDTO.AddGoodsToCartInputDTO,
  ): Promise<void> => {
    const prevCount = this.getGoodsCountQuery().data || 0;

    // позволяет увеличить счетчик до того, как инфа успешно сохраниться на бэк
    this.getGoodsCountQuery().forceUpdate(prevCount + goods.length);

    try {
      await this.cartNetworkSources.addGoods(goods);
      this.getGoodsQuery().forceUpdate([]);
      this.getGoodsCountQuery().forceUpdate(0);
    } catch (err) {
      // отказ optimistic update
      this.getGoodsCountQuery().forceUpdate(prevCount);

      throw err;
    }
  };

  public removeGoods = async (
    goods: CartRepositoryDTO.RemoveGoodsFromCartInputDTO,
  ): Promise<void> => {
    const prevCount = this.getGoodsCountQuery().data || 0;

    // позволяет уменьшить счетчик до того, как инфа успешно сохраниться на бэк
    this.getGoodsCountQuery().forceUpdate(prevCount - goods.length);

    try {
      await this.cartNetworkSources.removeGoods(goods);
      this.resetCartCache();
    } catch (err) {
      // отказ optimistic update
      this.getGoodsCountQuery().forceUpdate(prevCount);

      throw err;
    }
  };

  /**
   * Инвалидирует все query корзины
   */
  public invalidateData = () => {
    this.getGoodsQuery().invalidate();
    this.getGoodsCountQuery().invalidate();
  };

  public createAddGoodsMutation = () =>
    this.cache.createMutation(this.addGoods);

  public createRemoveGoodsMutation = () =>
    this.cache.createMutation(this.removeGoods);
}

export const cartRepository = new CartRepository(
  fakeCartNetworkSources,
  cacheService,
);
