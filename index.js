function memoization(fn){
    let cache = {};
    return (...args) =>{
        let key = args.join(',');
        if(key in cache){
            return cache[key];
        }
        cache[key] = fn.apply(null, args);
        return cache[key];
    }
}


const fib = memoization((n) => {
    if(n<=1){
        return n;
    }
    return fib(n-1) + fib(n-2);
});

console.log(fib(8));