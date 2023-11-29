import { vi } from 'vitest';

import type { CartRepository } from '@example/data';
import { mock } from '@example/shared/_tests';
import type { notify } from '@example/shared';

import { CartStore } from './CartStore';

describe('CartStore', () => {
  const setupCartStore = (
    cartRepMockImplementation: Partial<CartRepository>,
  ) => {
    const cartRepositoryStub = mock<CartRepository>(cartRepMockImplementation);
    const notifyMock = mock<typeof notify>();

    const sut = new CartStore(cartRepositoryStub, notifyMock);

    return { sut, notifyMock };
  };

  it('Показывает уведомление при ошибке добавлении товара в корзину', async () => {
    const { sut, notifyMock } = setupCartStore({
      addGoods: async () => {
        throw Error('Неизвестная ошибка');
      },
    });

    await vi.waitFor(() => {
      sut.addGoods([]);
    });

    expect(notifyMock.error).toBeCalledWith('Неизвестная ошибка');
  });

  it('Показывает уведомление при ошибке удаления товара из корзины', async () => {
    const { sut, notifyMock } = setupCartStore({
      removeGoods: async () => {
        throw Error('Неизвестная ошибка');
      },
    });

    await vi.waitFor(() => {
      sut.removeGoods([]);
    });

    expect(notifyMock.error).toBeCalledWith('Неизвестная ошибка');
  });
});
