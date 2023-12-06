import { getUserFullName } from './getUserFullName';

describe('getUserFullName', () => {
  it('Имя и фамилия разделяется пробелом', () => {
    const result = getUserFullName({ name: 'Вася', surname: 'Пупкин' });

    expect(result).toBe('Вася Пупкин');
  });
});
