import { mock } from '@example/shared/_tests';
import { cartRepositoryFaker } from '@example/data';

import { CartStore } from '../CartStore';

import { ProductCartManagerStore } from './ProductCartManagerStore';

describe('ProductCartManagerStore', () => {
  it('Высчитывает количество текущего товара в корзине', () => {
    const fakeGoods = cartRepositoryFaker.makeGoodsList();
    const currentProduct = fakeGoods[0];

    const cartStoreStub = mock<CartStore>({
      goods: fakeGoods,
    });
    const sut = new ProductCartManagerStore(cartStoreStub, currentProduct.id);

    expect(sut.count).toBe(currentProduct.count);
  });

  it('hasAddedToCart показывает, что товар был добавлен в корзину', () => {
    const fakeGoodsItem = cartRepositoryFaker.makeGoodsItem({ count: 1 });

    const cartStoreStub = mock<CartStore>({
      goods: [fakeGoodsItem, cartRepositoryFaker.makeGoodsItem()],
    });
    const sut = new ProductCartManagerStore(cartStoreStub, fakeGoodsItem.id);

    expect(sut.hasAddedToCart).toBeTruthy();
  });

  it('hasAddedToCart показывает, что товар не был добавлен в корзину', () => {
    const fakeGoodsItem = cartRepositoryFaker.makeGoodsItem({ count: 0 });

    const cartStoreStub = mock<CartStore>({
      goods: [fakeGoodsItem, cartRepositoryFaker.makeGoodsItem()],
    });
    const sut = new ProductCartManagerStore(cartStoreStub, fakeGoodsItem.id);

    expect(sut.hasAddedToCart).toBeFalsy();
  });
});
