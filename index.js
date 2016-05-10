function defaultSerializer(object) {
  return JSON.stringify(object);
}

function alwaysValid() {
  return true;
}

function memoize(func, context, serializer, validator) {
  var _serializer = serializer || defaultSerializer;
  var _validator = validator || alwaysValid;
  var cache = {};

  return function () {
    var args = Array.prototype.slice.call(arguments);
    var cacheKey = _serializer(args);

    if (!cache.hasOwnProperty(cacheKey) || !_validator(cache[cacheKey])) {
      cache[cacheKey] = func.apply(context, args);
    }

    return cache[cacheKey];
  };
}

module.exports = memoize;