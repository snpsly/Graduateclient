export function getYMD(date) {
  let year = date.getFullYear();
  let month = date.getMonth() + 1;

  if (month.toString().length === 1) {
    month = '0' + month;
  }
  let day = date.getDate();
  if (day.toString().length === 1) {
    day = '0' + day;
  }
  let h = date.getHours();
  h = h < 10 ? '0' + h : h;
  let M = date.getMinutes();
  M = M < 10 ? '0' + M : M;

  return year + '-' + month + '-' + day + ' ' + h + ':' + M;
}
