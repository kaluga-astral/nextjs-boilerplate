import { User } from './User';

describe('User', () => {
  it('should calculate displayName based on firstname and lastname', () => {
    const user = new User({
      id: 'user-id',

      createdAt: new Date().toISOString(),

      firstname: 'Firstname',

      middlename: 'Middlename',

      lastname: 'Lastname',

      email: 'email@email.com',
    });

    expect(user.displayName).toEqual('Firstname Lastname');
  });
});
