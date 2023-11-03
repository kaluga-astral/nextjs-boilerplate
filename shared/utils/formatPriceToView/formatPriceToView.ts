export const formatPriceToView = (price: number): string =>
  price ? `${price.toLocaleString('ru')} руб.` : 'Бесплатно';
