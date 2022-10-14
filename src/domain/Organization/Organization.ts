import { ISODateTimeString } from '../../types';

export enum OrganizationKind {
  UL,
  IP,
}

export class Organization {
  constructor(
    private readonly _id: string,
    private readonly _createdAt: ISODateTimeString,
    private readonly _type: OrganizationKind
  ) {}

  get id() {
    return this._id;
  }

  get createdAt() {
    return new Date(this._createdAt);
  }

  get type() {
    return this._type;
  }
}
