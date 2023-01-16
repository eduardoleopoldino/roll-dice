// cache results to improve performance
const memoize = (fn) => {
    let cache = {};
    return (...args) => {
        let n = args[0];
        if (n in cache) {
            return cache[n];
        }
        else {
            let result = fn(n);
            cache[n] = result;
            return result;
        }
    }
}

const fibonacci = memoize((n) => {
    if (n < 3) {
        return 1;
    }

    return fibonacci(n - 1) + fibonacci(n - 2);
});

module.exports = fibonacci;