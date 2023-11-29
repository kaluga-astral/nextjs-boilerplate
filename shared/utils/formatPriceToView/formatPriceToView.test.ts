import { formatPriceToView } from './formatPriceToView';

describe('formatPriceToView', () => {
  it('Добавляет постфикс рубля', () => {
    expect(formatPriceToView(100)).toBe('100 руб.');
  });

  it.each([
    [1000, '1 000 руб.'],
    [10000, '10 000 руб.'],
    [100000, '100 000 руб.'],
    [1000000, '1 000 000 руб.'],
  ])('Добавляет %s неразрывный пробел между нулями', (input, output) => {
    const result = formatPriceToView(input);

    expect(result).toBe(output);
  });

  it('Отдает дефолтный текст при нуле', () => {
    expect(formatPriceToView(0)).toBe('Бесплатно');
  });
});
