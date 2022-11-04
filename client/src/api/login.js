import request from '../utils/request';

export function register(user) {
  return request({
    url: 'users/register',
    method: 'post',
    data: {...user},
  });
}
export function login(user) {
  return request({
    url: 'users/login',
    method: 'post',
    data: {...user},
  });
}
