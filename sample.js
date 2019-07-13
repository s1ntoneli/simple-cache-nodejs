const cache = require('./simple-cache.js').cache;

function cachekey(args) {
    return args[0]
}

function request(key) {
    return (new Date()).getTime();
}
request = cache(request, cachekey, 5000);

console.log('request 1 ', request(1));
setTimeout(() => {
    console.log('request 2 ', request(2));
}, 1000)

setTimeout(()=> {
    console.log('request 1 ', request(1))
    console.log('request 1 ', request(1))
    console.log('request 1 ', request(1))
    console.log('request 2 ', request(2));
    console.log('request 2 ', request(2));
    console.log('request 2 ', request(2));
}, 2000);


setTimeout(()=> {
    console.log('request 1 ', request(1));
    console.log('request 1 ', request(1));
    console.log('request 1 ', request(1));
    console.log('request 2 ', request(2));
    console.log('request 2 ', request(2));
    console.log('request 2 ', request(2));
}, 10000);
