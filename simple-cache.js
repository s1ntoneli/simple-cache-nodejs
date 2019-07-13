const cache = require('memory-cache');

Function.prototype.cache = function (cachekey, time) {
    var _self = this;
    return function() {
		var key = cachekey(arguments);
        var value = cache.get(key);
        if (!value) {
            value = _self.apply(this, arguments)
			cache.put(key, value, time);
        }
        return value;
    }
}

var simpleCache = {
	cache: function(f, cacheKey, cacheTime) {
		return f.cache(cacheKey, cacheTime);
	}
}

module.exports = simpleCache
