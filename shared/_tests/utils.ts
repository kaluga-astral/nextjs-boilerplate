/**
 * Чтобы выбрать только общедоступные поля, необходимо передать тип через Pick<T, keyof T>.
 * Поскольку keyof T предоставляет только общедоступные свойства, приватные удаляются
 *
 * @param {Pick<T, keyof T>} o - The object to be used as a template.
 * @return {T} The generated mock object.
 */
export const mock = <T>(o: Pick<T, keyof T>): T => {
  return o;
};
