import { CacheService, cacheService } from '@example/shared';

import {
  CartNetworkSources,
  cartNetworkSources as cartNetworkSourcesInstance,
} from '../../sources';

import { CartRepositoryDTO } from './dto';

export class CartRepository {
  private goodsKey = 'cart-goods';

  private goodsCountKey = 'cart-goods-count';

  constructor(
    private readonly cartNetworkSources: CartNetworkSources,
    private readonly cache: CacheService,
  ) {}

  /**
   * Товары, добавленные в корзину
   */
  public getGoodsQuery = () =>
    this.cache.createQuery<CartRepositoryDTO.GoodsDTO>([this.goodsKey], () =>
      this.cartNetworkSources.getGoods().then(({ data }) => data.data),
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
    await this.cartNetworkSources.addGoods(goods);
    this.getGoodsQuery().invalidate();
    this.getGoodsCountQuery().invalidate();
  };

  public removeGoods = async (
    goods: CartRepositoryDTO.RemoveGoodsFromCartInputDTO,
  ): Promise<void> => {
    await this.cartNetworkSources.removeGoods(goods);
    this.getGoodsQuery().invalidate();
    this.getGoodsCountQuery().invalidate();
  };

  public createAddGoodsMutation = () =>
    this.cache.createMutation(this.addGoods);

  public createRemoveGoodsMutation = () =>
    this.cache.createMutation(this.removeGoods);
}

export const cartRepository = new CartRepository(
  cartNetworkSourcesInstance,
  cacheService,
);
