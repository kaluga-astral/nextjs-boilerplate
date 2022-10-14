import { ISODateTimeString } from '../../types';

export class DateTime {
  constructor(private readonly _value: ISODateTimeString) {}

  get value() {
    return new Date(this._value);
  }
}
