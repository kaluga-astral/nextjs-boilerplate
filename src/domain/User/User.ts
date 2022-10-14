import { plainToClass } from 'class-transformer';

export type UserInput = {
  id: string;

  createdAt: string;

  firstName: string;

  middleName: string;

  lastName: string;

  email: string;
};

export class User {
  constructor(private readonly _input: UserInput) {}

  get id() {
    return this._input.id;
  }

  get createdAt() {
    return new Date(this._input.createdAt);
  }

  get firstName() {
    return this._input.firstName;
  }

  get middleName() {
    return this._input.middleName;
  }

  get lastName() {
    return this._input.lastName;
  }

  get email() {
    return this._input.email;
  }

  get displayName() {
    return `${this.firstName} ${this.lastName}`;
  }

  get initials() {
    return `${this.firstName[0]}${this.lastName[0]}`;
  }

  static mapToDomain(input: UserInput) {
    return plainToClass(User, { _input: input });
  }
}
