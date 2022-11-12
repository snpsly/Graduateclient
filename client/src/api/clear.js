import request from '../utils/request';

export function getclearorders() {
  return request({
    url: 'order/getclearorders',
    method: 'post',
  });
}
export function pushclearorders({id, clean_id, updateorder}) {
  return request({
    url: 'order/pushclearorders',
    method: 'post',
    data: {id, clean_id, updateorder},
  });
}
export function getmyclearorders(clean_id) {
  return request({
    url: 'order/getmyclearorders',
    method: 'post',
    data: {clean_id},
  });
}
