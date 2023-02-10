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
const cacheWm = new WeakMap();
function FibWm(n){
    
}

//console.log(fibMap(100));
console.log(FibWm(100))
