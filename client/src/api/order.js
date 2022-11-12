import request from '../utils/request';

export function pushorder(order) {
  return request({
    url: 'order/inputorder',
    method: 'post',
    data: {...order},
  });
}
export function getorders(id) {
  return request({
    url: 'order/getorders',
    method: 'post',
    data: {user_id: id},
  });
}
