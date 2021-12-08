import { UserRequest } from './user-request';

describe('UserRequest', () => {
  const userData = new UserRequest();

  it('should create an instance', () => {
    expect(new UserRequest()).toBeTruthy();
  });

  it('name is accessible', () => {
    expect(userData.name).toEqual('');
    userData.name='User';
    expect(userData.name).toEqual('User');
  });

  it('login is accessible', () => {
    expect(userData.login).toEqual('');
    userData.login='User';
    expect(userData.login).toEqual('User');
  });

  it('pass is accessible', () => {
    expect(userData.sex).toEqual('');
    userData.sex='User';
    expect(userData.sex).toEqual('User');
  });

  it('age is accessible', () => {
    expect(userData.age).toEqual('');
    userData.age='123';
    expect(userData.age).toEqual('123');
  });

  it('email is accessible', () => {
    expect(userData.email).toEqual('');
    userData.email='User';
    expect(userData.email).toEqual('User');
  });

  it('phone is accessible', () => {
    expect(userData.phone).toEqual('');
    userData.phone='User';
    expect(userData.phone).toEqual('User');
  });

  it('msgText is accessible', () => {
    expect(userData.msgText).toEqual('');
    userData.msgText='User';
    expect(userData.msgText).toEqual('User');
  });

});
