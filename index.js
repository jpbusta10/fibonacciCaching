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
const key = {};

function fibWn(n) {
  if (cacheWn.has(key)) {
    cacheWn.get(key)[n] = cacheWn.get(key)[n] || null;
    if (cacheWn.get(key)[n]) {
      //console.log(`Returning cached value for n=${n}`);
      return cacheWn.get(key)[n];
    }
  } else {
    cacheWn.set(key, {});
  }

  if (n <= 1) {
    //console.log(`Caching value n=${n}`);
    cacheWn.get(key)[n] = n;
    return n;
  }

  const result = fibWn(n - 1) + fibWn(n - 2);
  cacheWn.get(key)[n] = result;
  //console.log(`Returning calculated value for n=${n}`);
  return result;
}



console.log(fibWn(100));

//console.log(fibMap(100));


