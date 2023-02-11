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

f/*unction fibWn(n){
    let key = {};
    key = valueOf(n);
    if(cacheWm.has(key)){
        return cacheWm.get(n);
    }
    let result = 1;
    if(n<=1){
        result = n;
    }else{
        result = fibWn(n-1) + fibMap(n-2)
    }
    cacheWm.set(n, result);
}*/
console.log(fibMap(100));

//console.log(fibWn(100));
