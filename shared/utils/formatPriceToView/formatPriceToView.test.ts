import { formatPriceToView } from './formatPriceToView';

describe('formatPriceToView', () => {
  it('В результирующую строку добавляется постфикс', () => {
    expect(formatPriceToView(100)).toBe('100 руб.');
  });

  it.each([
    [1000, '1 000 руб.'],
    [10000, '10 000 руб.'],
    [100000, '100 000 руб.'],
    [1000000, '1 000 000 руб.'],
  ])('Для "%s" добавляется неразрывный пробел в числах', (input, output) => {
    const result = formatPriceToView(input);

    expect(result).toBe(output);
  });

  it('Для нуля отдает дефолтный текст', () => {
    expect(formatPriceToView(0)).toBe('Бесплатно');
  });
});
