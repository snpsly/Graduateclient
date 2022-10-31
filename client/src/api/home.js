import request from '../utils/request';

export function getCommodity() {
  return request({
    url: 'commodity',
    method: 'get',
  });
}
