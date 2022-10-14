import { ISODateTimeString } from '../../types';
import { DateTime } from '../DateTime';

export class Docflow {
  constructor(
    private readonly _id: string,
    private readonly _createdAt: ISODateTimeString
  ) {}

  get id() {
    return this._id;
  }

  get createdAt() {
    return new DateTime(this._createdAt);
  }

  get title() {
    return `УПД №1 от ${this.createdAt}`;
  }
}
