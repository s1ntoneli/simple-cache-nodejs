# simple-cache-nodejs
nodejs 简单的无侵入式内存缓存框架

## 安装
```
npm install --save simple-cache-z
```

## 用法
```
const cache = require('simple-cache-z').cache;

// 定义 cacheKey
function cachekey(args) {
    return args[0]
}

// 你需要缓存的方法
function request(key) {
    return (new Date()).getTime();
}

// 缓存时间 5000 ms
const cacheTime = 5 * 1000

// 应用缓存
request = cache(request, cachekey, 5000);

// 使用
// 用法不变，不需要添加缓存代码
request("abc", "def")
```

**测试代码**
```
console.log('request 1 ', request(1));

setTimeout(() => {
    console.log('request 2 ', request(2));
}, 1000)

setTimeout(()=> {
    console.log('request 1 ', request(1));
    console.log('request 1 ', request(1));
    console.log('request 1 ', request(1));
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
```

**输出结果**
```
request 1  1563000551142
// 1000 ms
request 2  1563000552150

// 2000 ms
request 1  1563000551142
request 1  1563000551142
request 1  1563000551142
request 2  1563000552150
request 2  1563000552150
request 2  1563000552150

// 10000 ms
request 1  1563000561151
request 1  1563000561151
request 1  1563000561151
request 2  1563000561151
request 2  1563000561151
request 2  1563000561151
```
