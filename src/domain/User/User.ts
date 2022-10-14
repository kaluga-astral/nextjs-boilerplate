import { plainToClass } from 'class-transformer';

export type UserInput = {
  id: string;

  createdAt: string;

  firstname: string;

  middlename: string;

  lastname: string;

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

  get firstname() {
    return this._input.firstname;
  }

  get middlename() {
    return this._input.middlename;
  }

  get lastname() {
    return this._input.lastname;
  }

  get email() {
    return this._input.email;
  }

  get displayName() {
    return `${this.firstname} ${this.lastname}`;
  }

  get initials() {
    return `${this.firstname[0]}${this.lastname[0]}`;
  }

  static mapToDomain(input: UserInput) {
    return plainToClass(User, { _input: input });
  }
}
