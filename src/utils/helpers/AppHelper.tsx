export function stringifyObjectValues<T>(obj): T {
  Object.keys(obj).forEach((k) => (obj[k] = obj[k].toString()));
  return obj;
}
