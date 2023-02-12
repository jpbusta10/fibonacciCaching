const cacheMap = new Map();
function fibMap(n) { ///function using Map
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
  if (cacheWn.has({n: n})) {
    console.log(`Returning cached value for n=${n}`);
    return cacheWn.get({n: n});
  }

  if (n <= 1) {
    cacheWn.set({n: n}, n);
    return n;
  }

  const result = fibWn(n - 1) + fibWn(n - 2);
  cacheWn.set({n: n}, result);
  return result;
}

console.log(fibWn(20));

console.log(fibMap(100));


