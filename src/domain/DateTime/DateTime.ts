export class DateTime {
  constructor(private readonly _value: string) {}

  get value() {
    return new Date(this._value);
  }
}
