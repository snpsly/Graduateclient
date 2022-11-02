import request from '../utils/request';

export function getDetailShop(iid) {
  return request({
    url: 'detail',
    method: 'get',
    params: {
      iid,
    },
  });
}
