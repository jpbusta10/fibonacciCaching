const cacheMap = new Map();
function fibMap(n) {
    if (cacheMap.has(n)) {
        return cacheMap.get(n);
    }
    let result = 1;
    if (n <= 1) {
        result = n;
    } else {
        result = fibMap(n - 1) + fibMap(n - 2);
    }
    cacheMap.set(n, result);
    return result;
}
const cacheWn = new WeakMap();

function fibWn(n) {
  if (cacheWn.has(n)) {
    return cacheWn.get(n);
  }

  if (n <= 1) {
    return n;
  }

  const result = fibWn(n - 1) + fibWn(n - 2);
  cacheWn.set({n: n}, result);
  return result;
}



console.log(fibMap(100));
console.log(fibWn(20));

